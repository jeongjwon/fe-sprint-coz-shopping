import styled from "styled-components";
import { useState } from "react";
import { HiOutlineStar } from "react-icons/hi";
import bookmarkOff from "../assets/bookmark_off.png";
import bookmarkOn from "../assets/bookmark_on.png";

export const Item = styled.li`
  /* margin: 1rem; */
  /* overflow:hidden ; */
    
  display: flex;
  flex-direction: column;
  width: calc((100% - 7.2rem) / 4);
  margin-right: 0.8em;
  
  > .item-img {
    width: 20vw;
    height: 25vh;
    min-height: 25vh;
    position: relative;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    > .item-bookmark {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      >svg {
        fill: rgba(223, 223, 223);
        color: transparent;
      }
    }
  }
  > .item-desc {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    > .item-desc-up{
        display: flex;
        justify-content: space-between;
        font-weight: 800;

        > .sale{
            margin-bottom : 0.2rem;
            color: #452CDD;
            font-weight: 800;
        }
        > .follower_up{
            text-align: right;
            font-weight: 700;
        }
    }
    > .item-desc-down{
        
        > .price{
            text-align: right;
            font-weight: 500;
        }
        > .follower_down{
            text-align: right;
            font-weight: 400;
        }
        > .detail-desc{
            text-align: left;
        }
    }
    
  }
`;
// export const ItemImg = styled.div`
//   width: 20vw;
//   height: 30vh;
//   margin-bottom: 0.5rem;
//   position: relative;
//   > img.product_img {
//     background-image: url(${(props) => props.src});
//     background-size: cover;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 12px;
//     margin-bottom: 0.5rem;
//   }
//   > img.bookmark {
//     position: ;
//     top: ;
//   }
// `;
// export const ItemDesc = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 1.2rem;
//   font-weight: 500;
// `;
const ProductsItem = ({ item , setItems}) => {

  //북마크 버튼 클릭시 속성 추가
   const [bookmark, setBookmark] = useState(item.bookmark);

  const showCard = (item) => {
    // type : Products, Category, Exhibition, Brand
       switch (item.type) {
      case "Product":  // Products 일 때 세일률 + 가격
        return (
          <>
            <div className="item-desc-up">
                <h3>{item.title}</h3>
                <div className="sale">{item.discountPercentage}%</div>
            </div>
                
            <div className="item-desc-down">
                <div className="price">{Number(item.price).toLocaleString("ko-KR")}원</div>
            </div>
          </>
        );

      case "Category":  // Category 일 때는 # 추가
        return (
          <>
            <div className="item-desc-up"><h3># {item.title}</h3></div>
            <div className="item-desc-down"></div>
          </>
        );
      case "Exhibition":  // Exhibition 일 때 title, sub_title
        return (
          <>
          
            <div className="item-desc-up">
               <h3>{item.title}</h3>
            </div>
            <div className="item-desc-down" >
            <div className="detail-desc">{item.sub_title}    </div>
            </div>
          </>
        );
      case "Brand": // Brand 일 때는 관심고객수 , 고객수
        return (
          <>
            <div className="item-desc-up">
                <h3>{item.brand_name}</h3> 
                <div className="follower_up">관심고객수</div>
            </div>
            <div className="item-desc-down">
            <div className="follower_down">{Number(item.follower).toLocaleString("ko-KR")}</div>
            </div>
          </>
        );
      default:
        return <></>;
    }
  };
  const handleBookmark = () => {
    setBookmark(!bookmark);
    setItems((prevState) =>
      prevState.map((e) => e.id === item.id ? {...e, bookmark: !e.bookmark} : e)); 
  };
  return (
    <Item>
      <div
        className="item-img"
        style={{
          background: `url(${item.image_url || item.brand_image_url})`,
          backgroundSize: "cover",
        }}
      >
        <button className="item-bookmark" type="button" onClick={handleBookmark}>
          {/* <img src={bookmarkOff} /> */}
          { bookmark ? <HiOutlineStar size={35} style={{fill:"#ffd361"}} /> : <HiOutlineStar size={35} /> }
        </button>
      </div>

      <div className="item-desc">
        {showCard(item)}   
      </div>
    
    </Item>
  );
};
export default ProductsItem;
