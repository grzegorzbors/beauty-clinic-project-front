import { Grid } from "@material-ui/core";
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
          Bardzo istotnym dla Beauty Clinic jest propagowanie zabiegów
          anti-aging, zapobiegających procesom starzenia. W sposób skuteczny
          usuwamy też oznaki starzenia i niedoskonałości na naszej twarzy i
          ciele, wspomagając się nowoczesnymi technologiami. Najnowsze
          technologie nr 1 na świecie, posiadające międzynarodowe certyfikaty
          medyczne zapewniają skuteczne zabiegi. Profesjonalny Zespół lekarzy,
          licencjonowanych kosmetologów i fizjoterapeutów zapewnia naturalność i
          bezpieczeństwo.
        </p>
        <p>
          Oczyszczamy, pielęgnujemy i odmładzamy, ale zanim to nastąpi zawsze
          konsultujemy, rozmawiamy i diagnozujemy komputerowo, tak by każdy
          zabieg był skrojony na miarę i dopasowany indywidualnie do potrzeb
          Twojej skóry. W naszej ofercie znajdziesz szeroki wachlarz zabiegów,
          tak by sprostać nawet najbardziej wymagającym potrzebom skóry. Prócz
          zabiegów zawsze planujemy także pielęgnację domową dopasowaną do stylu
          życia, możliwości i typu cery.
        </p>
        <p>
          Uwielbiamy rozwijać nasze umiejętności i ciągle się szkolimy o czym
          świadczy mnóstwo certyfikatów zdobiących nasze ściany. Wierzymy, że
          aby zachować młodość prócz pielęgnacji cery należy wciąż się rozwijać
          i ćwiczyć…umysł! Dlatego gdy pojawia się jakaś nowość my już się
          szkolimy. Równie mocno co uczyć się lubimy też dzielić się naszą
          wiedzą, dlatego zawsze możecie liczyć na nasze doradztwo, konsultacje
          i wsparcie w dążeniu do upragnionej sylwetki czy pięknej cery.
        </p>
      </Grid>
      <Grid item className={classesAbout.addressAndSocialArea}>
        <address className={classesAbout.address}>
          <h3 style={{ marginTop: 0 }}>Beauty Clinic</h3>
          <p>ul.Przypadkowa 1/2</p>
          <p>30-612 Kraków</p>
          <p>+12 634 66 12 </p>
        </address>
        <div className={classesAbout.socialItem}>
          <p>Odwiedź nasz profil na Instagramie</p>
          <a href="#instagram" style={{ color: "#8a3ab9" }}>
            <Instagram className={classesAbout.socialIcon} />
          </a>
        </div>
        <div className={classesAbout.socialItem}>
          <p>Odwiedź nasz profil na Facebooku</p>
          <a href="#facebook" style={{ color: "#4267B2" }}>
            <Facebook className={classesAbout.socialIcon} />
          </a>
        </div>
        <div className={classesAbout.socialItem}>
          <p>Sprawdź nasze najnowsze tweety</p>
          <a href="#twitter" style={{ color: "#1DA1F2" }}>
            <Twitter className={classesAbout.socialIcon} />
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
