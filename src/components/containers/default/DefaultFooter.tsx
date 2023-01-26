import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";

const DefaultFooter = () => {
  return (
    <Box
      sx={{
        marginTop: "calc(10% + 60px)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://mui.com/">
                Barwy shop
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`React | Material UI | React Router`}
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default DefaultFooter;
