import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Users(props) {
  const users = props.users;
  const router = useRouter();

  return (
    <MainLayout title="Users">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" sx={{ mb: 4 }} align="center">
            Users
          </Typography>
        </Grid>
        {users.map((user) => (
          <Grid item xs={12} md={6} key={user.id}>
            <Card
              sx={{
                minHeight: "200px",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Name:&nbsp;{user.name}
                </Typography>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Username:&nbsp;{user.username}
                </Typography>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Email:&nbsp;{user.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                  Detail User
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
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return { props: { users } };
};
