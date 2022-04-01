import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function PostDetail() {
  const router = useRouter();

  return (
    <MainLayout title="User Detail">
      <h1 className="font-bold underline text-3xl">User Detail</h1>
      <p>Ini adalah halama user detail dari /users/detail</p>
      <p>page : {router.query.params}</p>
    </MainLayout>
  );
}
