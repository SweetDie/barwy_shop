import { Grid } from "@mui/material";
import ProductCard from "../../components/productCard";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProductItem } from "./store/types";

const HomePage: React.FC = () => {
  const { GetProductList } = useActions();
  const { list } = useTypedSelector((store) => store.product);

  useEffect(() => {
    GetProductList();
  }, []);

  return (
    <Grid container rowSpacing={2}>
      {list.map((product: IProductItem) => (
        <Grid key={product.id} item xs={3}>
          <ProductCard product={product}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
