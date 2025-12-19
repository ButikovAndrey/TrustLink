export const formatAmount = (amount: number | string): string => {
  if (!amount) return "";
  amount = amount.toString().replace(/[^0-9.,]/g, "");

  // eslint-disable-next-line prefer-const, no-useless-escape
  let [integerPart, decimalPart] = amount.split(/[,\.]/);
  const parts: string[] = [];
  if (integerPart) {
    while (integerPart.length > 0) {
      parts.unshift(integerPart.slice(-3));
      integerPart = integerPart.slice(0, -3);
    }
  }
  return decimalPart
    ? `${parts.join(" ")}${amount.includes(".") ? "." : ","}${decimalPart}`
    : parts.join(" ");
};

export const formatPhoneNumber = (value: string): string => {
  if (!value) return "";
  let formatted = value.replace(/[^+\d\s]/g, "");
  formatted = formatted.replace(/(?!^)\+/g, "");
  formatted = formatted.replace(/\s{2,}/g, " ");
  if (formatted[0] !== "+") {
    formatted = "+" + formatted.replace(/^\+/, "");
  }

  return formatted.trim();
};

export const formatTelegramInput = (input: string): string => {
  if (!input) return "";

  const telegram = input
    .replace(/[^A-Za-z0-9_@]/g, "")
    .replace(/(?!^@)@/g, "")
    .slice(0, 32)
    .trim();

  return telegram;
};
