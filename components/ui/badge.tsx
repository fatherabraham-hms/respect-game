import * as React from "react";

export type BadgeProps = {
  color: 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'gray' | 'black' | 'white';
  className?: string;
  children?: React.ReactNode;
};

const classLookup = {
  default: 'bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
  dark: 'bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300',
  red: 'bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300',
  green: 'bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300',
  blue: 'bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
  yellow: 'bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300',
  indigo: 'bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300',
  purple: 'bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300',
  pink: 'bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300',
  gray: 'bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300',
  black: 'bg-black text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white',
  white: 'bg-white text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-black',
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        className={`${classLookup[props.color] || classLookup.default} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    )
  }
)
Badge.displayName = "Badge"
export { Badge }
