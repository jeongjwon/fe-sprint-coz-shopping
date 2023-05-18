
import { useState } from "react";
import { HiOutlineStar } from "react-icons/hi";
import Modal from "./Modal";
import Toast from "./Toast";
import * as P from "../style/ProductsItem.styled";



const ProductsItem = ({ item , setItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState([]);
  //북마크 버튼 클릭시 속성 추가
  const [bookmark, setBookmark] = useState(item.bookmark);
  const [showToast, setShowToast] = useState(false);
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
  const activeToast = () => {
    setShowToast(true);
    let timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    }
  }
  const handleBookmark = () => {
    
    setBookmark(!bookmark);
    setItems((prevState) =>
      prevState.map((e) => e.id === item.id ? {...e, bookmark: !e.bookmark} : e)); 
    activeToast();
  };
  const openModal = () => {
    setIsOpen(!isOpen);
    console.log(item);
   setInfo({title: item.title || item.brand_name , url: item.image_url || item.brand_image_url, bookmark: item.bookmark});

  }
  return (
    <>
    <P.Item >
      <P.ImgDiv
        onClick={openModal}
        className="item-img"
        style={{
          background: `url(${item.image_url || item.brand_image_url})`,
          backgroundSize: "cover",
        }}
      >
        
        <P.BookmarkBtn 
          className="item-bookmark" 
          type="button" 
          onClick={(e) => {
            e.stopPropagation();
            handleBookmark();
          }}>
          { bookmark ? <HiOutlineStar size={35} style={{fill:"#ffd361"}} /> : <HiOutlineStar size={35} /> }
        </P.BookmarkBtn>
        </P.ImgDiv>

      <div className="item-desc">
        {showCard(item)}   
      </div>
    </P.Item>
    { isOpen ?  <Modal openModal={openModal} info={info}/> : null}
     { showToast &&<Toast bookmark={bookmark}/> }
    </>
  );
};
export default ProductsItem;
