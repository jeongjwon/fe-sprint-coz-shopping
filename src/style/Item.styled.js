import styled from "styled-components";
export const ItemWrapper = styled.li`
  /* margin: 1rem; */
  /* overflow:hidden ; */

  display: flex;
  flex-direction: column;
  width: calc((100% - 7.2rem) / 4);

  /* > .item-img {
    width: 18vw;
    height: 25vh;
    min-height: 25vh;
    position: relative;
    border-radius: 12px;
    > .item-bookmark {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      > svg {
        fill: rgba(223, 223, 223);
        color: transparent;
      }
    }
  } */
 
`;
export const ItemImage = styled.div`
   width: 18vw;
    height: 25vh;
    min-height: 25vh;
    position: relative;
    border-radius: 12px;
`;
export const BookmarkBtn = styled.button`
  position: absolute;
      bottom: 8px;
      right: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      > svg {
        fill: rgba(223, 223, 223);
        color: transparent;
      }
`;


export const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem 0;
  
`;
export const ItemDesc_Up = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > strong{
    font-weight: 800;
  }
  > .sale {
    margin-bottom: 0rem;
    color: #452cdd;
    font-weight: 800;
  }
  > .follower_up {
    text-align: right;
    font-weight: 700;
  }
`;
export const ItemDesc_Down = styled.div`
  > .price {
    text-align: right;
    font-weight: 500;
  }
  > .follower_down {
    text-align: right;
    font-weight: 400;
  }
  > .detail-desc {
    text-align: left;
  }
`;
// .item-desc {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 0.3rem;
//     > .item-desc-up{
//         display: flex;
//         justify-content: space-between;
//         font-weight: 800;

//     > .sale{
//         margin-bottom : 0rem;
//         color: #452CDD;
//         font-weight: 800;
//     }
//     > .follower_up{
//         text-align: right;
//         font-weight: 700;
//     }
// }
//     > .item-desc-down{

// > .price{
//     text-align: right;
//     font-weight: 500;
// }
// > .follower_down{
//     text-align: right;
//     font-weight: 400;
// }
// > .detail-desc{
//     text-align: left;
// }
//     }

//   }
