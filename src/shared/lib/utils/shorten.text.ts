export const shortenText = (text: string): string => {
  if (text.length >= 12) {
    return `${text.split('').slice(0, 10).join('')}...`;
  } else {
    return text;
  }
};
