import { FilterButton } from "./FilterButton";

import all from "../assets/productsNav/all.png";
const imgPath = '../assets/productsNav/';
// src/assets/productsNav/all.png
export default {
    title: 'FilterButton',
    component: FilterButton,
};

export const Primary = {
    args: {
        primary: true,
        imgSrc: all,
        // '/Users/jeongjiwon/Documents/SEB/Section4/Unit2_Solo_Project/fe-sprint-coz-shopping/src/assets/productsNav/all.png',
        label: '전체',
    },
};