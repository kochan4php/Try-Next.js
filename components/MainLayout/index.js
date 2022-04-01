import { Component } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Navbar from "../Navbar";

export default class MainLayout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Website Basic Next JS" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Next JS Basic | {this.props.title}</title>
        </Head>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
          {this.props.children}
        </Container>
      </>
    );
  }
}
