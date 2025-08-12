import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
  outline: "border border-gray-300 hover:bg-gray-50 text-gray-900",
};
const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

export default function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
