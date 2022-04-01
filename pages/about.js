import { Component } from "react";
import MainLayout from "../components/MainLayout";

export default class About extends Component {
  render() {
    return (
      <MainLayout title="About">
        <h1 className="font-bold underline text-3xl">About</h1>
        <p>Ini adalah halaman about page dari /about</p>
      </MainLayout>
    );
  }
}
