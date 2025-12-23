import { Crypto, KaspiBank, OzonBank, SBP, TBank } from "@/icons";

export const step0currencies = ["RUB", "KGZ", "AZN"];
export const step1methods = ["PayIN", "PayIN + PayOUT"];
export const step2sources = [
  { name: "SBP", bgcolor: "#E6E5F5", color: "#302E60", Icon: SBP },
  {
    name: "T-Bank",
    bgcolor: "#FFF8D6",
    color: "#333333",
    Icon: TBank,
  },
  {
    name: "Ozon",
    bgcolor: "#E8F1FF",
    color: "#002C78",
    Icon: OzonBank,
  },
  {
    name: "Kaspi",
    bgcolor: "#FFECEB",
    color: "#A32A1E",
    Icon: KaspiBank,
  },
  {
    name: "Crypto",
    bgcolor: "#F0FEED",
    color: "#259800",
    Icon: Crypto,
  },
];
