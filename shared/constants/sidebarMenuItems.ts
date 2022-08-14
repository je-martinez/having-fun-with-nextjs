import dynamic from "next/dynamic";

export interface IMenuItem {
  text: string;
  path: string;
  icon?: any;
  additionalProps?: any;
}

export const getMenuItems = async () => {
  const IoMdSwitch = dynamic(
    async () => (await import("react-icons/io")).IoMdSwitch
  );
  const GoGraph = dynamic(async () => (await import("react-icons/go")).GoGraph);

  const MenuItems: IMenuItem[] = [
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
  return MenuItems;
};
