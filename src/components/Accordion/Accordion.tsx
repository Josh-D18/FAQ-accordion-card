import styles from "./Accordion.module.css";
import Dropdown from "./ui/Dropdown";
import Image from "../Global/Image";
import { faqData } from "../../data/faq-data";
import { ReactComponent as WomenOnlineMobile } from "../../assets/images/illustration-woman-online-mobile.svg";



const Accordion = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <div className="pt-[40px] pb-[60px] mx-auto">
          <Image Image={WomenOnlineMobile} imgClass={styles} classname={"women-mobile-img"} alt={"women-online"}/>
        </div>
        <div className={styles["text-container"]}>
          <h1 className={styles["title"]}>FAQ</h1>
          <div>
            {faqData.map(({ id, title, description }) => (
              <Dropdown title={title} description={description} key={id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
