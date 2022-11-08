import React, { FormEvent } from "react";
const Login = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("username"));
    console.log(form.get("password"));
  };
  return (
    <div className="flex justify-center  items-center">
      <form
        onSubmit={onSubmit}
        className="mt-3 bg-base-100 w-full  mx-3 xs:w-auto sm:mx-auto   p-3 rounded form-control "
      >
        <input
          dir="rtl"
          type="text"
          className="input input-sm input-bordered rounded"
          placeholder="نام کاربری"
          name="username"
        />
        <input
          dir="rtl"
          type="password"
          className="input  mt-2 input-sm input-bordered rounded"
          placeholder="رمز عبور"
          name="password"
        />
        <button className="btn btn-sm rounded mt-3 " type="submit">
          ورود
        </button>
      </form>
    </div>
  );
};

export default Login;
