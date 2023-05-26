import { FilterButton } from "./FilterButton";
import all from "../assets/productsNav/all.png";

export default {
    title: 'FilterButton',
    component: FilterButton,
};

export const Primary = {
    args: {
        primary: true,
        imgSrc: all,
        label: '전체',
    },
};