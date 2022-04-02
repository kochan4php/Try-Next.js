import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Users({ posts }) {
  const router = useRouter();

  return (
    <MainLayout title="Posts">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" sx={{ mb: 4 }} align="center">
            Article
          </Typography>
        </Grid>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                minHeight: "200px",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.id}.&nbsp;{post.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => router.push(`/posts/${post.id}`)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return { props: { posts } };
};
