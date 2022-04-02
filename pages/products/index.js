import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import MainLayout from "../../components/MainLayout";

export default function Products(props) {
  const products = props.products;

  return (
    <MainLayout title="Products">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" component="h1" sx={{ mb: 4 }}>
            All Products
          </Typography>
        </Grid>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                height="350"
              />
              <CardContent>
                <Typography variant="body" component="p" sx={{ mb: 2 }}>
                  {product.title}
                </Typography>
                <Typography variant="body" component="p" sx={{ mb: 2 }}>
                  $&nbsp;{product.price}
                </Typography>
                <Typography
                  variant="body"
                  component="p"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating defaultValue={product.rating.rate} />
                  &nbsp; ({product.rating.count})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
