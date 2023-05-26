import { Dropdown } from "./Dropdown";

export default {
    title: 'Dropdown',
    component: Dropdown,
    parameters: {
        backgrounds: {
          default: { value: 'dark' },
        },
      },
}

export const Default = {
    args:{
        list: [
            'ooo님, 안녕하세요!',
            '상품리스트 페이지',
            '북마크 페이지'
        ],
    }
} 