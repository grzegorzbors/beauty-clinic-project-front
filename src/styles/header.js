import { makeStyles } from "@material-ui/core/styles";

const header = makeStyles((theme) => ({
  header: {
    height: "20vh",
  },
  logo: {
    maxHeight: "60%",
  },
  navbar: {
    minHeight: "40%",
    textTransform: "uppercase",
  },
}));

export default header;
