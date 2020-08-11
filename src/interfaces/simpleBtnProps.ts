import COLORS from "@/constants/colors";

export default interface SimpleBtnProps {
    theme: COLORS,
    children: string,
    disabled: boolean,
    is_large: boolean,
}