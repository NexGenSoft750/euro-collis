export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?:
    | "solid"
    | "outline"
    | "ghost"
    | "link"
    ;
    size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    ;
    rounded?:
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    ;
}