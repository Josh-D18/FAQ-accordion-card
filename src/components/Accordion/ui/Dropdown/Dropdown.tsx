import { Menu, Transition } from "@headlessui/react";
import Image from "../../../Global/Image/Image"
import {ReactComponent as DropDownIcon} from "../../../../assets/images/icon-arrow-down.svg"
import styles from "./Dropdown.module.css"

interface IDropdown {
  title: string;
  description: string;
}

const Dropdown = (props: IDropdown) => {
  const { title, description } = props;

  return (
    <Menu>
        <div className={styles["dropdown-title-container"]}>
            <Menu.Button><span className={styles["dropdown-title"]}>{title}</span></Menu.Button>
            <Image imgClass={styles} Image={DropDownIcon} classname={"dropdown-icon"} alt={"dropdown icon"}/>
        </div>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items>
          <Menu.Item>
            <p>{description}</p>
          </Menu.Item>
        </Menu.Items>
      </Transition>
      <div className=""></div>
    </Menu>
  );
};

export default Dropdown;
