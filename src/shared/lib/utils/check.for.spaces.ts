export function CheckForSpaces<T extends Record<string, string>>(data: T) {
  for (const key in data) {
    if (!data[key].trim()) {
      return false;
    }
  }
  return true;
}
