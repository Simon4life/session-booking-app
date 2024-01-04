import { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

type Anchor = ComponentPropsWithoutRef<typeof Link> & {
    to?: string
}

type Button = ComponentPropsWithoutRef<"button"> & {
    to?: never
}

const isLink = (props: Anchor | Button): props is Anchor => {
    return "to" in props
}

const Button = (props: Anchor | Button) => {
    if(isLink(props)) {
        return <Link className="button" {...props}></Link>
    }
    return <button className="button">Click me</button>
}

export default Button