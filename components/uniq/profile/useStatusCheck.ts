import { useRouter } from "next/router";

const useStatusCheck = () => {
  const router = useRouter();
  return (status: number) => {
    if (status === 401) {
      router.push("/login");
      return false
    }
    return true
  };
};

export default useStatusCheck;
