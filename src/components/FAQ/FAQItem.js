import { Card, CardContent, Typography } from "@material-ui/core";
import faq from "../../styles/faq";

const FAQItem = ({ questionText, answerText }) => {
  const classesFaq = faq();

  return (
    <Card className={classesFaq.cardItem}>
      <CardContent>
        <Typography gutterBottom variant="h5" className={classesFaq.header}>
          {questionText}
        </Typography>
        <Typography variant="body1" component="p">
          {answerText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FAQItem;
