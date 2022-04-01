import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MainLayout from "../../components/MainLayout";

export default function Users({ posts }) {
  return (
    <MainLayout title="Posts">
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                minHeight: "200px",
                boxShadow: "5px 5px 7px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
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
