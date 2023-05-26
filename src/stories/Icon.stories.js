import { Icon } from "./Icon";
import { iconNames } from "./Icon";

export default {
    title: 'Atoms/Icon',
    component: Icon,
};
export const All = () => (
    <div
      style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}
    >
      {iconNames.map((icon) => (
        <Icon icon={icon} key={icon} />
      ))}
    </div>
  );

  export const Item = (args) => <Icon {...args} />; 
  Item.argTypes = {
    icon: {
      options: iconNames, // 아이콘 이름 옵션 설정
      control: { type: 'select' }, // 컨트롤 타입을 select로 설정
    },
  }

  Item.args ={
    icon:'Menu',
  }