import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPosts } from "../../actions/posts";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPosts(postData));
  };
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const clear = () => {};
  return (
    <Paper
      sx={{
        padding: "16px",
      }}
    >
      <form
        autoComplete="off"
        noValidate
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& .MuiTextFieldRoot": {
            margin: "8px",
          },
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating A Post</Typography>
        <TextField
          sx={{ marginTop: 2 }}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 2 }}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={{ marginTop: 2 }}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 2 }}
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div
          style={{
            width: "97%",
            margin: "20px 0",
          }}
        >
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          sx={{
            marginBottom: 1,
            backgroundColor: "#cc0000",
            color: "white",
            ":hover": {
              backgroundColor: "red",
            },
          }}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          sx={{
            backgroundColor: "black",
            ":hover": {
              backgroundColor: "gray",
            },
          }}
          variant="contained"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
