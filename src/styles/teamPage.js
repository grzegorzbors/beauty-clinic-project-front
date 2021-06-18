import { makeStyles } from "@material-ui/core/styles";

const teamPage = makeStyles((theme) => ({
  TeamMember__mainWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TeamMember__contentWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 30%",
    paddingRight: "1em",
    alignItems: "center",
    fontWeight: "700",
  },
  TeamMember__name: {
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",
    margin: "0",
  },
  TeamMember__img: {
    maxWidth: "50%",
    height: "auto",
  },
}));

export default teamPage;