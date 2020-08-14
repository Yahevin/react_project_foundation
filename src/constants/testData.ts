import ITestData from "@/interfaces/ITestData";
import COLORS from "@/constants/colors";

const btnList: ITestData[] = [
    {
        id: 0,
        theme: COLORS.red,
        disabled: false,
        children: 'click 1',
        is_large: false,
    },
    {
        id: 1,
        theme: COLORS.blue,
        disabled: false,
        children: 'click 2',
        is_large: true,
    },
    {
        id: 2,
        theme: COLORS.green,
        disabled: false,
        children: 'click 3',
        is_large: false,
    },
    {
        id: 3,
        theme: COLORS.green,
        disabled: true,
        children: 'click 4',
        is_large: false,
    },
];

export default btnList;