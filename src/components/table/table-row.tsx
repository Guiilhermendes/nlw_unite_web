import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProp extends ComponentProps<"tr"> {}

export function TableRow(props: TableRowProp) {
    return (
        <tr {...props} className={twMerge("border-b border-white/10", props.className)} />
    )
}