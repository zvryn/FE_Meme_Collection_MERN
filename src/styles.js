import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  heading: {
    color: "#cc0000",
    fontWeight: "600",
    textAlign: "start",
  },
  image: {
    marginRight: "10px",
    marginLeft: "20px",
  },
}));
