import { makeStyles } from "@material-ui/core/styles";

const carousel = makeStyles((theme) => ({
  carousel: {
    height: "75vh",
    width: "100%",
  },
  carouselInner: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  },
  arrowContainer: {
    flex: "5%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  centerContainer: {
    flex: "90%",
    height: "100%",
    textAlign: "center",
  },
  backArrow: {
    transform: "rotate(180deg)",
  },
}));

export default carousel;
