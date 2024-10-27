import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSessionStatusLabel(sessionStatus: number | null): string {
  if (typeof sessionStatus !== 'number') {
    return ''
  }
  const sessionStatusmap = [
    'Not Started',
    'In Progress',
    'Finished'
  ];
  return sessionStatusmap[sessionStatus];
}
