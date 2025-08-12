import { cn } from "@/lib/cn";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border bg-white shadow-sm", className)} {...props} />;
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6 border-b" {...props} />;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6" {...props} />;
}
