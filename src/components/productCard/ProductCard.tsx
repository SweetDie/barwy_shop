import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IProductCardProps } from "../../pages/product/store/types";
import { IMAGES_FOLDER } from "../../constants/imagesFolderPath";

const ProductCard: React.FC<IProductCardProps> = ({
  product
}) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "fill" }}
        image={`${IMAGES_FOLDER}${product.image}`}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Розмір: {product.size}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Артикул: {product.article}
        </Typography>
        <Typography
          sx={{ mt: 2 }}
          variant="h6"
          align="right"
          color="error.main"
        >
          Ціна: {product.price} грн
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium" color="success">
          <AddShoppingCartIcon />
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="warning"
          sx={{ ml: 5 }}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
