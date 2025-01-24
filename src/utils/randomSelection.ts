// src/utils/randomSelection.ts

/**
 * Selects a specified number of unique random items from an array.
 *
 * @param array - The array to select items from.
 * @param count - The number of items to select.
 * @returns An array containing the selected items.
 */
export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = array.slice(); // Create a shallow copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
