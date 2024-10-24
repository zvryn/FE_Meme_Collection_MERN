import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./images/logo.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{
          borderRadius: 5,
          margin: "30px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "10px",
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
          variant="h3"
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
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
