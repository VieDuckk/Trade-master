import clsx from "clsx";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  return (
    <button ref={ref} {...props} className={clsx("btn", props.className)}>
      <span className="relative z-[1] flex justify-center items-center h-10">{props.children}</span>
    </button>
  );
});


export const LearnButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  function LearnButton({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          "flex btn justify-between h-[40px] px-[16px] py-[8px] rounded-full bg-gray-800 text-white transition hover:bg-gray-700 active:scale-95",
          className
        )}
      >
        <span className="mr-2">Learn more</span>
        <span className="flex items-center justify-center w-[24px] h-[24px] rounded-full bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    );
  }
);

export interface ButtonLinkProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function Button(props, ref) {
  return (
    <a ref={ref} {...props} className={clsx("btn", props.className)}>
      {props.children}
    </a>
  );
});

export default Button;
