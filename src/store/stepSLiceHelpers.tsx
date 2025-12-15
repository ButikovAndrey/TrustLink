export const multiSelect = <T extends string | number>(
  newValue: T,
  stateValue: T[]
): T[] => {
  const hasValue = stateValue.includes(newValue);

  if (hasValue) {
    return stateValue.filter((value) => value !== newValue);
  }

  return [...stateValue, newValue];
};
