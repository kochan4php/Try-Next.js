import { useRouter } from "next/router";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import MainLayout from "../../components/MainLayout";

export default function PostDetail({ post }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/posts");
  };

  if (router.isFallback) {
    return (
      <Typography variant="h4" component="div" sx={{ my: 4 }} align="center">
        Loading...
      </Typography>
    );
  } else {
    return (
      <MainLayout title="User Detail">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="warning" onClick={handleClick}>
              &laquo;&nbsp;Back
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                minHeight: "200px",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                  {post.id}.&nbsp;{post.title}
                </Typography>
                <Typography variant="body" component="div">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MainLayout>
    );
  }
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};
