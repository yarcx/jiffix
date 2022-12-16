import { BicycleIcon, BusIcon, CarIcon, Declinemark, Checkmark } from "../components/Atoms/Icons";

export type autoTypes = {
  title: string;
  icon: JSX.Element | (() => JSX.Element);
};

export const sideBarItems: Array<autoTypes> = [
  {
    title: "Car",
    icon: CarIcon({}),
  },
  {
    title: "Bus",
    icon: BusIcon({}),
  },
  {
    title: "Tractor",
    icon: BusIcon({}),
  },
  {
    title: "Bus",
    icon: BusIcon({}),
  },
  {
    title: "Bicycle",
    icon: BicycleIcon({}),
  },
];

export type checkList = {
  text: string;
};

export const checkListItems: Array<checkList> = [
  { text: "Better <b>targeted visibility</b> than google SEO " },
  { text: "Access to <b>vehicle history</b>" },
  { text: "Increased <b>revenue</b> " },
  { text: "<b>Easy </b>to use " },
  { text: "Improved <b>customer trust</b> and loyalty " },
  { text: "<b>AI-powered</b> support " },
];

export type tableDataType = {
  text: string;
  icon: JSX.Element;
  colTwoicon: JSX.Element;
};

export const WorkShopItems: Array<tableDataType> = [
  { text: "FREE to use!", icon: Checkmark({}), colTwoicon: Checkmark({}) },
  {
    text: "Receive estimates/invoices instantly",
    icon: Checkmark({}),
    colTwoicon: Checkmark({}),
  },
  {
    text: "Organize all your estimates/invoices neatly",
    icon: Checkmark({}),
    colTwoicon: Declinemark({}),
  },
  {
    text: "Easy to find repair history or record in seconds",
    icon: Checkmark({}),
    colTwoicon: Declinemark({}),
  },
  {
    text: "Seamless payment options",
    icon: Checkmark({}),
    colTwoicon: Declinemark({}),
  },
  {
    text: "Self-service real-time analytics",
    icon: Checkmark({}),
    colTwoicon: Declinemark({}),
  },
  {
    text: "AI-Powered service reminders",
    icon: Checkmark({}),
    colTwoicon: Declinemark({}),
  },
];

export const formatAmount = (number: number) => {
  return Number(
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
      style: "decimal",
    }).format(number)
  ).toFixed();
};
