import { SubmitAlert } from "@components/UI";
import { requestChangePassword } from "api/services";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FieldError from "../../../UI/Form/FieldError";
type Passwords = {
  password_one: string;
  password_two: string;
};
const ResetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Passwords>();
  const [loading, setLoading] = useState(false);
  const [submitAlert, setSbumitAlert] = useState({
    isError: false,
    message: "",
  });
  const equalValidate = (data: Passwords) => {
    if (data.password_one !== data.password_two) {
      const message = "تکرار رمز عبور با رمز عبور تطابق ندارد";
      const type = "notEqual";
      setError("password_one", { type, message });
      return false;
    }
    return true;
  };
  const onSubmit: SubmitHandler<Passwords> = async (data) => {
    if (equalValidate(data)) {
      setLoading(true);
      const { status } = await requestChangePassword(data);
      setLoading(false);
      if (status == 401) router.push("/login");
      else if (status >= 400)
        setSbumitAlert({
          isError: true,
          message: "خطایی در بروزرسانی رمزعبور به وجود آمد",
        });
      else
        setSbumitAlert({
          isError: false,
          message: "رمز عبور با موفقیت بروزرسانی شد",
        });
    }
  };
  return (
    <form dir="rtl" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="label pb-1">رمزعبور جدید</label>
        <input
          autoComplete=""
          className="input input-sm input-bordered rounded-md"
          type="password"
          {...register("password_one", { required: "این فیلد اجباری سات" })}
        />
        <FieldError error={errors.password_one} />
      </div>
      <div>
        <label className="label pb-1">تکرار رمز عبور جدید</label>
        <input
          autoComplete=""
          className="input input-sm input-bordered rounded-md"
          type="password"
          {...register("password_two", { required: "این فیلد اجباری است" })}
        />
        <div className="max-w-fit">
          <FieldError error={errors.password_two} />
        </div>
      </div>
      <button
        dir="ltr"
        type="submit"
        className={`btn btn-sm rounded-md w-full mt-3 ${loading && "loading"}`}
      >
        بوزرسانی رمز عبور
      </button>
      <SubmitAlert {...submitAlert} />
    </form>
  );
};

export default ResetPassword;
