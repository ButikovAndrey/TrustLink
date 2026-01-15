import { Card, Person1, Person2, Person3, Person4, Sber, SBP } from "@/icons";
import { FunctionComponent, SVGProps } from "react";

interface IHeaderFaces {
  personIcon: string;
  paymentIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  paymentName: string;
  paymentTextColor: string;
  paymentBGcolor: string;
  comment: string;
  toggle: boolean;
}

export const headerFaces: IHeaderFaces[] = [
  {
    personIcon: Person1,
    paymentIcon: Card,
    paymentTextColor: "#259800",
    paymentBGcolor: "#F0FEED",
    paymentName: "Card",
    comment: "Received $90",
    toggle: true,
  },
  {
    personIcon: Person2,
    paymentIcon: SBP,
    paymentTextColor: "#259800",
    paymentBGcolor: "#F0FEED",
    paymentName: "SBP",
    comment: "Got paid $900",
    toggle: false,
  },
  {
    personIcon: Person3,
    paymentIcon: Sber,
    paymentTextColor: "#259800",
    paymentBGcolor: "#F0FEED",
    paymentName: "SberPay",
    comment: "₽300 to $36",
    toggle: true,
  },
  {
    personIcon: Person4,
    paymentIcon: Sber,
    paymentTextColor: "#333333",
    paymentBGcolor: "#FFF8D6",
    paymentName: "T-Bank",
    comment: "Received €75",
    toggle: false,
  },
];
