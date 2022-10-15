import styles from "./Accordion.module.css";
import Dropdown from "./ui/Dropdown";
import Image from "./ui/Image";
import { faqData } from "../../data/faq-data";

const Accordion = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <div className="pt-[40px] pb-[60px] mx-auto">
          <Image />
        </div>
        <div className={styles["text-container"]}>
          <h1 className={styles["title"]}>FAQ</h1>
          <div>
            {faqData.map(({ title, description }) => (
              <Dropdown title={title} description={description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
