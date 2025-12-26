import {
  paymentMethods,
  step0currencies,
} from "@/pages/home/TradersCalculator/Steps/constats";
import { FunctionComponent, SVGProps } from "react";

export type TCurrency = (typeof step0currencies)[number];

export type TPaymentMethod = (typeof paymentMethods)[number];

export type Tstep2methods = {
  name: TPaymentMethod;
  bgcolor: string;
  color: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  currencies: TCurrency[];
}[];
