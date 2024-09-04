import * as React from "react";
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
        role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"
export { Spinner }
