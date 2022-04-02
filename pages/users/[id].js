import { useRouter } from "next/router";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import MainLayout from "../../components/MainLayout";

export default function PostDetail({ user }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/users");
  };

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
              <Typography
                variant="h4"
                component="div"
                sx={{ mb: 4 }}
                align="center"
              >
                Detail User
              </Typography>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Name:&nbsp;{user.name}
              </Typography>
              <Typography variant="h6" component="div">
                Username:&nbsp;{user.username}
              </Typography>
              <Typography variant="h6" component="div">
                Email:&nbsp;{user.email}
              </Typography>
              <Typography variant="h6" component="div">
                Phone:&nbsp;{user.phone}
              </Typography>
              <Typography variant="h6" component="div">
                Web:&nbsp;{user.website}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const paths = users.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
};
