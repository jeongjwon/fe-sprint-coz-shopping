import styled from "styled-components";
export const CardContainer = styled.div`
`;
const BgContainer = styled.div`
`;
// type : Products, Category, Exhibition, Brand
// Products 일 때 세일률 + 가격
// Exhibition 일 때 title, sub_title
// Category 일 때는 # 추가
// Brand 일 때는 
const Card = ({ cards }) => {
  console.log(cards);
  const showCard = (card) => {
    switch (card.type) {
      case "Product":
        return (
            <BgContainer style={{
                backgroundImage: `url(${card.image_url})`,
                cursor: "pointer",
            }}>
                
            </BgContainer>
        );

      case "Category":
        return <></>;
      case "Exhibition":
        return <></>;
      case "Brand":
        return <></>;
      default:
        return <></>;
    }
  };
  return (
    <CardContainer>
      {cards.map((e, idx) => {
        return showCard(e);
      })}
    </CardContainer>
  );
};
export default Card;
