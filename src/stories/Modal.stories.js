import { Modal } from "./Modal";
import rep from '../assets/productImg.png';
export default{
    title: 'Modal',
    component: Modal,
}

export const withDropBack = {
    args: {
        backdrop: true,
        label: '상품이미지',
        imgSrc: rep,
    }
}

