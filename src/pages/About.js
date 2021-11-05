import { Card, Grid, CardContent } from "@material-ui/core";
import common from "../styles/common";
import about from "../styles/about";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const About = () => {
  const classesCommon = common();
  const classesAbout = about();
  return (
    <Grid container className={classesCommon.pageFlexColumnLayout}>
      <h1>O Nas</h1>
      <Grid item>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          bibendum eros. Aliquam nunc erat, hendrerit tincidunt mauris et,
          dapibus sodales nibh. Aliquam vitae diam ut velit mattis luctus. Fusce
          quis venenatis nibh. Integer eu metus erat. Sed sit amet dui sit amet
          libero varius accumsan et eu dolor. Suspendisse orci justo, consequat
          id commodo non, varius condimentum lacus. Cras viverra ex in
          vestibulum lacinia. Integer at egestas eros. Morbi suscipit convallis
          tempus.
        </p>
        <p>
          Donec id efficitur est. Donec molestie tempus lectus et eleifend. Duis
          dapibus orci nisl, volutpat finibus magna dapibus vel. Donec eget
          sollicitudin sem. Quisque eget turpis eget tellus gravida molestie.
          Vivamus vel massa vel est tincidunt ornare vel ut leo. Morbi rhoncus
          sem id nisl lacinia, sit amet convallis ex elementum. Phasellus ac
          pellentesque arcu, sit amet finibus justo. Praesent erat tellus,
          consectetur at vehicula non, consectetur a dolor. Suspendisse sit amet
          erat eros. Ut rhoncus ipsum urna, eu dignissim ante cursus a. Praesent
          lacinia erat sed elit sagittis hendrerit.
        </p>
        <p>
          Vivamus non tellus blandit, tincidunt nulla eget, imperdiet augue.
          Cras vel mi eu sapien ultrices tristique eu ac libero. Quisque et
          elementum erat. Aliquam erat volutpat. In dictum tincidunt risus. Sed
          vel tristique magna. Quisque quam libero, lacinia et justo at, gravida
          ornare velit. Suspendisse non lobortis felis.
        </p>
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <Card className={classesAbout.addressAndSocialCard}>
          <CardContent>
            <address>
              <h3>Beauty Clinic</h3>
              <p>ul.Przypadkowa 1/2</p>
              <p>30-612 Kraków</p>
              <p>+12 634 66 12 </p>
            </address>
          </CardContent>
          <CardContent>
            <div className={classesAbout.social}>
              <p>Odwiedź nasz profil na Instagramie</p>
              <a href="#instagram" style={{ color: "#8a3ab9" }}>
                <Instagram className={classesAbout.socialIcon} />
              </a>
            </div>
            <div className={classesAbout.social}>
              <p>Odwiedź nasz profil na Facebooku</p>
              <a href="#facebook" style={{ color: "#4267B2" }}>
                <Facebook className={classesAbout.socialIcon} />
              </a>
            </div>
            <div className={classesAbout.social}>
              <p>Sprawdź nasze najnowsze tweety</p>
              <a href="#twitter" style={{ color: "#1DA1F2" }}>
                <Twitter className={classesAbout.socialIcon} />
              </a>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default About;
