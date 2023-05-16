import styled from "styled-components";
import { HiOutlineStar } from "react-icons/hi";
import bookmarkOff from "../assets/bookmark_off.png";

export const Item = styled.li`
  /* margin: 1rem; */
  /* overflow:hidden ; */

  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;

  > .item-img {
    width: 20vw;
    height: 30vh;
    min-height: 30vh;
    position: relative;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    > .item-bookmark {
      position: absolute;
      bottom: 12px;
      right: 12px;
    }
  }
  > .item-desc {
    display: flex;
    flex-direction: column;

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
export const ItemImg = styled.div`
  width: 20vw;
  height: 30vh;
  margin-bottom: 0.5rem;
  position: relative;
  > img.product_img {
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 0.5rem;
  }
  > img.bookmark {
    position: ;
    top: ;
  }
`;
export const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;
`;
const ProductsItem = ({ item }) => {
  console.log(item);

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
                <div className="price">{item.price}원</div>
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
            <div classNmae="detail-desc">{item.sub_title}    </div>
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
            <div className="follower_down">{item.follower}</div>
            </div>
          </>
        );
      default:
        return <></>;
    }
  };
  const handleBookmark = () => {};
  return (
    <Item>
      <div
        className="item-img"
        style={{
          background: `url(${item.image_url || item.brand_image_url})`,
          backgroundSize: "cover",
        }}
      >
        <label className="item-bookmark" onClick={handleBookmark}>
          <img src={bookmarkOff} />
        </label>
      </div>

      <div className="item-desc">
        {showCard(item)}   
      </div>
    
    </Item>
  );
};
export default ProductsItem;
