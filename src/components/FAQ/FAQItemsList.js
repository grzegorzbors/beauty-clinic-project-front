import faqItemsConfig from "./faqItemsConfig";
import FAQItem from "./FAQItem";
import { useMediaQuery, useTheme } from "@material-ui/core";

import faq from "../../styles/faq";

const FAQItemsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classesFaq = faq();

  const containerClass = !isMobile ? classesFaq.faqContainerDesktop : "";
  return (
    <div className={containerClass}>
      {faqItemsConfig.map(({ questionText, answerText }) => (
        <FAQItem
          key={questionText}
          questionText={questionText}
          answerText={answerText}
        />
      ))}
    </div>
  );
};

export default FAQItemsList;
