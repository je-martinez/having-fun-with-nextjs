import { IoMdSwitch } from "react-icons/io";
import { GoGraph } from "react-icons/go";

export interface IMenuItem {
  text: string;
  path: string;
  icon: any;
  additionalProps?: any;
}

export const MenuItems: IMenuItem[] = [
  {
    icon: GoGraph,
    path: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: IoMdSwitch,
    path: "/",
    text: "Home",
  },
];
