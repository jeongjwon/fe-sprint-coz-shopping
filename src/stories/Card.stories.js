import { Card } from "./Card";
import rep from '../assets/productImg.png';

export default {
    title: 'Card',
    component: Card,
};

export const Item = {
    args: {
        label: '상품 이미지',
        imgSrc: rep,
    }
}