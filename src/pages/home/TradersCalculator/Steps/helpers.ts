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

export const calculateComission = ({
  paymentMethods,
  range,
  transactionsAmount = 35,
  isPayOUT,
}: {
  paymentMethods: TPaymentMethod[];
  range: [number, number];
  transactionsAmount?: number;
  isPayOUT?: boolean;
}): {
  paymentMethod: string;
  midRange: number;
  percent: number;
  income: number;
  totalIncome: number;
}[] => {
  const midRange = (range[0] + range[1]) / 2;
  const result = [];
  let percent = 2;
  let totalIncome = 0;

  if (isPayOUT) {
    const income = Math.round(
      midRange * transactionsAmount * paymentMethods.length * (percent / 100)
    );
    result.push({
      paymentMethod: "Total turnover",
      midRange: Math.round(
        midRange * transactionsAmount * paymentMethods.length
      ),
      income,
      percent,
      totalIncome: income,
    });
  } else {
    paymentMethods.forEach((method) => {
      let paymentMethod: string = method;
      switch (method) {
        case "Kaspi":
          percent = 8;
          break;
        case "Ozon":
          percent = 7.5;
          break;
        case "SBP Counterparty":
          percent = 7.5;
          paymentMethod = "SBP Counterparties";
          break;
        case "T-Bank":
          percent = 8;
          break;
        case "SBP": {
          const limit = midRange * transactionsAmount;
          if (limit > 10000) percent = 7;
          else if (limit > 5000) percent = 8;
          else if (limit > 1000) percent = 9;
          else percent = 13;
          break;
        }
        default:
          percent = 7;
          break;
      }
      const income = Math.round(
        midRange * transactionsAmount * (percent / 100)
      );
      totalIncome += income;

      result.push({
        paymentMethod,
        midRange: Math.round(midRange * transactionsAmount),
        percent,
        income,
        totalIncome,
      });
    });
  }
  return result;
};
