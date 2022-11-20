import { Layout, LayoutType } from "@components/UI";
import ResetPassword from "@components/uniq/profile/ResetPassword";
import { UserDetail } from "api/schema";
import { requestUserDetail } from "api/services";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  const access_token = cookies["access"];
  const { data, status } = await requestUserDetail(`JWT ${access_token}`);
  if (!access_token || status === 401)
    return {
      redirect: {
        permanent: true,
        destination: "/login",
      },
    };
  return { props: { userInfo: data[0] } };
};
interface Props {
  userInfo: UserDetail;
}
const Profile: FC<Props> & { Layout: LayoutType } = ({ userInfo }) => {
  return (
    <div>
      <Head>
        <title>حساب کاربری</title>
        <meta
          name="description"
          content="A pack of things thal all student gonna need"
        />
        <link rel="icon" href="/favico.svg" type="image/svg+xml" />
      </Head>

      <main>
        <div className="flex flex-col items-center">
          <div dir="rtl">
            <div>
              <label className="label pb-1">نام کاربری</label>
              <input
                className="input input-sm input-bordered rounded-md"
                type="text"
                value={userInfo.username}
                readOnly
              />
            </div>
            <div>
              <label className="label pb-1">نام</label>
              <input
                className="input input-sm input-bordered rounded-md"
                type="text"
                value={userInfo.name}
                readOnly
              />
            </div>
          </div>
          <div className="divider">تغییر رمز عبور</div>
          <ResetPassword />
        </div>
      </main>
    </div>
  );
};
Profile.Layout = Layout;
export default Profile;
