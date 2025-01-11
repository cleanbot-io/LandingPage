export const truncateString = (str, maxVisibleLength = 12) => {
  if (!str || str.length <= maxVisibleLength) return str;

  const visibleLength = Math.floor(maxVisibleLength / 2);
  const start = str.slice(0, visibleLength);
  const end = str.slice(-visibleLength);

  return `${start}...${end}`;
};
