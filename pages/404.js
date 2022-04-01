import { Component } from "react";
import { withRouter } from "next/router";
import MainLayout from "../components/MainLayout";

class NotFoundPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.router.push("/");
    }, 2000);
  }

  render() {
    return (
      <MainLayout title="Not Found Page">
        <h1>404</h1>
        <h1>Not Found</h1>
      </MainLayout>
    );
  }
}

export default withRouter(NotFoundPage);
