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
    transition: "all 300ms ease",
    overflow: "hidden",
  },
  arrowContainer: {
    flex: "5%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#f5f5f5",
    transition: "all 300ms ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  centerContainer: {
    flex: "90%",
    height: "100%",
    textAlign: "center",
    display: "grid",
    placeItems: "start center",
  },
  backArrow: {
    transform: "rotate(180deg)",
  },
  carouselTitle: {
    backgroundColor: "rgba(245, 245, 245, 0.6)",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    lineHeight: "1.5",
  },
}));

export default carousel;
