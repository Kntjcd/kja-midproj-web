import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Requirement #4: Clean Code Practices
 * This utility merges Tailwind classes and handles conditional logic
 * for the KJA Digital Marketing site.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}