import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./images/logo.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{
          borderRadius: 10,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
        position="static"
        color="inherit"
      >
        <img
          src={logo}
          alt="logo"
          height={60}
          style={{
            marginRight: 20,
            marginLeft: 20,
          }}
        />
        <Typography
          sx={{
            color: "#cc0000",
            fontWeight: "600",
            textAlign: "start",
          }}
          variant="h2"
        >
          Positive Negativity
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
