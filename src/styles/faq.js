import { makeStyles } from "@material-ui/core/styles";

const faq = makeStyles((theme) => ({
  faqContainerDesktop: {
    width: "70%",
  },
  cardItem: {
    "&:not(:last-child)": {
      marginBottom: "1rem",
    },
  },
  header: {
    fontStyle: "italic",
  },
}));

export default faq;
