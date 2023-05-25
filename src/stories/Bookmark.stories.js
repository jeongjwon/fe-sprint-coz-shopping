import { Bookmark } from "./Bookmark";

export default {
    title: 'Atoms/BookmarkButton', // 스토리 분류 및 컴포넌트 이름
    component: Bookmark, // 테스트할 컴포넌트(Icon)
};

export const BookmarkButton = (args) => <Bookmark {...args} />
