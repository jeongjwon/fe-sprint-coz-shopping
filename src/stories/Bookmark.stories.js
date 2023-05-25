import { Bookmark } from "./Bookmark";

export default {
    title: 'Atoms/Bookmark', // 스토리 분류 및 컴포넌트 이름
    component: Bookmark, // 테스트할 컴포넌트(Icon)
};

export const Icon = (args) => <Bookmark {...args} />
Icon.args={
    
}