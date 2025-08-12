import { cn } from "@/lib/cn";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";

type CardProps<C extends ElementType = "div"> = {
  as?: C;
  className?: string;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "className">;

const CardInner = <C extends ElementType = "div">(
  { as, className, children, ...props }: CardProps<C>,
  ref: React.Ref<any>
): ReactElement => {
  const Comp = (as ?? "div") as ElementType;
  return (
    <Comp ref={ref} className={cn("rounded-lg border bg-white shadow-sm", className)} {...props}>
      {children}
    </Comp>
  );
};

export const Card = forwardRef(CardInner) as <
  C extends ElementType = "div"
>(
  p: CardProps<C> & { ref?: React.Ref<any> }
) => ReactElement;

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6 border-b" {...props} />;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6" {...props} />;
}
