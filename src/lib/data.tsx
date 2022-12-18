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

export type bookingType = {
  text: string;
};

export const BookingItems: Array<checkList> = [
  { text: "<b>Maximize revenue</b>and increase operational efficiency " },
  { text: "<b>Reduce</b> Vehicle downtimes " },
  {
    text: "Get complete visibility on vehicle <b>lifecycle costs and expenses</b>",
  },
  { text: "<b></b>Automate manual time-consuming processes" },
  { text: "Empower your decisions with <b>Artificial Intelligence</b>" },
  {
    text: "<b>Reduce maintenance cost</b> by up to 48% with the AutoHyve’s Intelligence Capabilities",
  },
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

export const formatAmount = (amount: number) => new Intl.NumberFormat().format(amount);
