import {
  Bookmark,
  Calculator2,
  Courthouse,
  Dog,
  Global,
  MessageText,
  Moneys,
  Timer,
  UserSquare,
} from "@/icons";
import { FunctionComponent, SVGProps } from "react";

export interface IFieldConfig {
  title: string;
  IconElem: FunctionComponent<SVGProps<SVGSVGElement>>;
  values: string[] | string;
  placeholder: string;
}

export const fieldsConfig: IFieldConfig[] = [
  {
    title: "Experience in processing",
    IconElem: Timer,
    placeholder: "1 year, 3-5 years, 5+ years",
    values: ["1 year", "3-5 years", "5+ years"],
  },
  {
    title: "Platforms you have collaborated with",
    IconElem: Courthouse,
    placeholder: "Platform name",
    values: "",
  },
  {
    title: "Working capital (RUB)",
    IconElem: Moneys,
    placeholder: "10,000-50,000, 50,000-100,000, 50,000+",
    values: ["10,000-50,000", "50,000-100,000", "50,000+"],
  },
  {
    title: "Number of personal accounts available",
    IconElem: UserSquare,
    placeholder: "1-3, 3-5, 5+",
    values: ["1-3", " 3-5", "5+"],
  },
  {
    title: "Geo",
    IconElem: Global,
    placeholder: "Asia, EU, CIS",
    values: ["Asia", "EU", "CIS"],
  },
  {
    title: "Method of work",
    IconElem: Bookmark,
    placeholder: "Method goes here",
    values: "",
  },
  {
    title: "Telegram username*",
    IconElem: Dog,
    placeholder: "username",
    values: "",
  },
  {
    title: "Emergency phone number",
    IconElem: Calculator2,
    placeholder: "+7 1234567890",
    values: "",
  },
  {
    title: "Who can give a recommendation?",
    IconElem: MessageText,
    placeholder: "Recommendation contact person",
    values: "",
  },
];
