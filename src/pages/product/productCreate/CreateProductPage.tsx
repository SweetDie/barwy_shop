import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { IProductCreate } from "../store/types";
import { useFormik } from "formik";

const CreateProductPage = () => {
  const createInitialValues: IProductCreate = {
    name: "",
    size: "",
    article: "",
    price: 0
  };

  const handlerCreateProductSubmit = (values: IProductCreate) => {
    console.log('values', values);
    };

  const formik = useFormik({
    initialValues: createInitialValues,
    onSubmit: handlerCreateProductSubmit,
  });

  const {handleSubmit, values, handleChange, setFieldValue} = formik;

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
            margin="normal"
            id="image"
            name="image"
            label="Зображення"
            type="file"
            defaultValue={null}
            onChange={handleChange}
            value={values.image}
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
