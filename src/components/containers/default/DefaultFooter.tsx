import { Box, Container, Grid, Link, Typography, BottomNavigation } from "@mui/material";

const DefaultFooter: React.FC = () => {
  return (   
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        marginTop: 'calc(10% + 60px)',
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="/">
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