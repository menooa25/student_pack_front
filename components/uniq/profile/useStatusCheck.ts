import { useRouter } from "next/router";

const useStatusCheck = () => {
  const router = useRouter();
  return (status: number) => {
    if (status === 401) {
      router.push("/login");
    }
  };
};

export default useStatusCheck;
