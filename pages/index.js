import Image from "next/image";
import { Component } from "react";
import MainLayout from "../components/MainLayout";

export default class Home extends Component {
  render() {
    return (
      <MainLayout title="Home">
        <h1 className="text-3xl font-bold underline">Hello Next.js</h1>
        <Image
          src="/images/tsumugi.jpg"
          alt="Mugi Chan"
          layout="responsive"
          width={1000}
          height={500}
        />
      </MainLayout>
    );
  }
}
