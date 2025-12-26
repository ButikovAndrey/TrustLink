import {
  TCurrency,
  TPaymentMethod,
} from "@/pages/home/TradersCalculator/Steps/types";
import { step2methods } from "./constats";

export const getSourcesByCurrency = (currency: TCurrency) =>
  step2methods.filter((s) => s.currencies.includes(currency));

export const getCurrencySymbol = (currency: string | null): string => {
  if (!currency) return "";
  const value = currency.toUpperCase();
  switch (value) {
    case "RUB":
      return "₽";
    case "KGZ":
      return "с";
    case "AZN":
      return "₼";

    default:
      return currency;
  }
};

export const isPayOUT = (operationType: string | null): boolean => {
  if (!operationType) return false;
  return operationType.length > 10;
};

export const persentRate = (
  paymentMethod: TPaymentMethod,
  range: number[]
): number => {
  if (range.length < 2) return 0;
  switch (paymentMethod) {
    case "SBP":
      return 0;
    case "Crypto":
      return 0;
    case "Kaspi":
      return 0;
    case "Ozon":
      return 0;
    case "T-Bank":
      return 0;
    case "SBP Counterparty":
      return 0;

    default:
      return 0;
  }
};
