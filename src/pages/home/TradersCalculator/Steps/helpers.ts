import {
  CalulatorResults,
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
}): CalulatorResults[] => {
  const midRange = ((range[0] + range[1]) / 2) * transactionsAmount;

  const getPercent = (method: TPaymentMethod): number => {
    const map: Partial<Record<TPaymentMethod, number>> = {
      Kaspi: 8,
      Ozon: 7.5,
      "SBP Counterparty": 7.5,
      "T-Bank": 8,
    };

    if (method === "SBP") {
      if (midRange > 10000) return 7;
      if (midRange > 5000) return 8;
      if (midRange > 1000) return 9;
      return 13;
    }

    return map[method] ?? 7;
  };

  if (isPayOUT) {
    const percent = 2;
    const income = Math.round(
      midRange * paymentMethods.length * (percent / 100)
    );

    return [
      {
        paymentMethod: "Total turnover",
        midRange: Math.round(midRange * paymentMethods.length),
        percent,
        income,
        totalIncome: income,
      },
    ];
  }

  let totalIncome = 0;

  return paymentMethods.map((method) => {
    const percent = getPercent(method);
    const income = Math.round(midRange * (percent / 100));
    totalIncome += income;

    return {
      paymentMethod:
        method === "SBP Counterparty" ? "SBP Counterparties" : method,
      midRange: Math.round(midRange),
      percent,
      income,
      totalIncome,
    };
  });
};
