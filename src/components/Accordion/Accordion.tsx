import styles from "./Accordion.module.css";
import Dropdown from "./ui/Dropdown";
import Image from "../Global/Image";
import { faqData } from "../../data/faq-data";
import { ReactComponent as WomenOnlineMobile } from "../../assets/images/illustration-woman-online-mobile.svg";
import {ReactComponent as BGPattern} from "../../assets/images/bg-pattern-mobile.svg"


const Accordion = () => {
  return (
    <div className={styles["container"]}>
       <div className="mx-auto">
          <Image Image={WomenOnlineMobile} imgClass={styles} classname={"women-mobile-img"}/>
          <Image Image={BGPattern} imgClass={styles} classname={"bg-mobile-pattern-img"}/>
        </div>
      <div className={styles["content-container"]}>
        <div className={styles["text-container"]}>
          <h1 className={styles["title"]}>FAQ</h1>
          <div className="mt-[38px]">
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
