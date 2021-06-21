import { makeStyles } from "@material-ui/core/styles";

const header = makeStyles((theme) => ({
header: {
  height: "20vh",
  width: "100%",
},
logo: {
  minHeight: "60%",
},
navbar: {
  minHeight: "40%",
  textTransform: "uppercase",
},
}));

export default header;