import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};
export const validatePhone = (phone: string) => {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone)
};

export const validateOtp = (otpValue: string) => {
  return otpValue.length === 6; 
};