import COLORS from "@/constants/colors";

export default interface ISimpleBtnProps {
    theme: COLORS,
    children: string,
    disabled: boolean,
    is_large: boolean,
    callback: (...args:any | undefined) => any | void,
}