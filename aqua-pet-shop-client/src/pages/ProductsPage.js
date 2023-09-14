import { useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const apiURL = "mongodb://127.0.0.1:27017/aqua-pet-shop-server";

function ProductsPage () {
    const [allProducts, setAllProducts] = useState([]);

    const getAllProducts = () => {
      axios
        .get(apiURL)
        .then((response) => {
          setAllProducts(response.data);
        })
        .catch((err) => console.log(err));
    };
    return(
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {allProducts.imgURL}
        title={allProducts.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {allProducts.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {allProducts.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">More Info</Button>
      </CardActions>
    </Card>
  );
}



export default ProductsPage;