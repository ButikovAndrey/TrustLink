import {
  Crypto,
  KaspiBank,
  OzonBank,
  SBP,
  SBPCounterparty,
  TBank,
} from "@/icons";
import { Tstep2methods } from "@/pages/home/TradersCalculator/Steps/types";

export const step0currencies = ["RUB", "KGZ", "AZN"] as const;

export const step1operationTypes = ["PayIN", "PayIN + PayOUT"];

export const paymentMethods = [
  "SBP",
  "T-Bank",
  "Ozon",
  "Kaspi",
  "Crypto",
  "SBP Counterparty",
] as const;

export const step2methods: Tstep2methods = [
  {
    name: "SBP",
    bgcolor: "#E6E5F5",
    color: "#302E60",
    Icon: SBP,
    currencies: ["RUB"],
  },
  {
    name: "SBP Counterparty",
    bgcolor: "#E6E5F5",
    color: "#302E60",
    Icon: SBPCounterparty,
    currencies: ["RUB"],
  },
  {
    name: "T-Bank",
    bgcolor: "#FFF8D6",
    color: "#333333",
    Icon: TBank,
    currencies: ["RUB"],
  },
  {
    name: "Ozon",
    bgcolor: "#E8F1FF",
    color: "#002C78",
    Icon: OzonBank,
    currencies: ["RUB", "KGZ"],
  },
  {
    name: "Kaspi",
    bgcolor: "#FFECEB",
    color: "#A32A1E",
    Icon: KaspiBank,
    currencies: ["AZN", "KGZ"],
  },
  {
    name: "Crypto",
    bgcolor: "#F0FEED",
    color: "#259800",
    Icon: Crypto,
    currencies: ["RUB", "KGZ", "AZN"],
  },
];
