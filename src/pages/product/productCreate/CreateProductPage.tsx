import {
  Box,
  Button,
  Container,
  CssBaseline,
  Input,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { IProductCreate } from "../store/types";
import { useFormik } from "formik";
import { useActions } from "../../../hooks/useActions";
import { toast } from "react-toastify";

const CreateProductPage = () => {
  const { CreateProduct } = useActions();

  const createInitialValues: IProductCreate = {
    name: "",
    size: "",
    article: "",
    price: 0,
    image: null
  };

  const handlerCreateProductSubmit = async (newProduct: IProductCreate) => {
    try {
      const image = newProduct.image === undefined ? null : newProduct.image;
      const data = new FormData();
      const blob = new Blob([image as BlobPart]);
      data.append("name", newProduct.name);
      data.append("price", newProduct.price.toString());
      data.append("article", newProduct.article);
      data.append("size", newProduct.size);
      console.log("good");
      data.append("image", blob, newProduct.image?.name);
      const message: any = await CreateProduct(data);
      toast.success(message);
    } catch (error: any) {
      toast.error(error);
    }
  };

  const formik = useFormik({
    initialValues: createInitialValues,
    onSubmit: handlerCreateProductSubmit,
  });

  const { handleSubmit, values, handleChange, setFieldValue } = formik;
  
  const uploadImageChangeHandler = (event: any) => {
    const image = event.target.files[0];
    setFieldValue("image", image);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Створення продукту
        </Typography>
        <Box
          component="form"
          encType="multipart/form-data"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ім'я"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="article"
            label="Артикул"
            type="text"
            id="article"
            onChange={handleChange}
            value={values.article}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="size"
            label="Розмір"
            type="text"
            id="size"
            onChange={handleChange}
            value={values.size}
          />
          <TextField
            id="price"
            label="Ціна"
            type="number"
            name="price"
            fullWidth
            required
            margin="normal"
            onChange={handleChange}
            value={values.price}
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
          />
           <TextField
            fullWidth
            id="image"
            name="image"
            margin="normal"
            label="Зображення"
            type="file"
            onChange={uploadImageChangeHandler}
            defaultValue={null}
            InputLabelProps={{
              shrink: true,
            }}
          /> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Створити
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateProductPage;
