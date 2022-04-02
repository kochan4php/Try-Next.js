import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <MainLayout title="Not Found Page">
      <h1>404</h1>
      <h1>Not Found</h1>
    </MainLayout>
  );
}
