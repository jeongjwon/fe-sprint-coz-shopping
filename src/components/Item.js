import * as P from "../style/Item.styled";
import { useSelector, useDispatch } from "react-redux";
import {modalActions} from "../store/modal";
import { HiOutlineStar } from "react-icons/hi";
import { bookmarkActions } from "../store/bookmark";

const Item = ({ item }) => {
    if(!item) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
   const isMarked = useSelector((state) => state.bookmark.includes(item.id));

    const handleOpenModal =() => {
        dispatch(modalActions.open());
        dispatch(modalActions.showModal(item));
    }
    const handleBookmark = (e) =>{
      e.stopPropagation();
      dispatch(bookmarkActions.toggleBookmark(item.id));
    }
   
  const showCard = (item) => {
    switch (item.type) {
      case "Product":
        return (
          <>
            <P.ItemDesc_Up>
              <strong>{item.title}</strong>
              <div className="sale">{item.discountPercentage}%</div>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down>
              <div className="price">
                {Number(item.price).toLocaleString("ko-KR")}원
              </div>
            </P.ItemDesc_Down>
          </>
        );
      case "Category":
        return (
          <>
            <P.ItemDesc_Up>
              <strong># {item.title}</strong>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down></P.ItemDesc_Down>
          </>
        );
      case "Exhibition":
        return (
          <>
            <P.ItemDesc_Up>
              <strong>{item.title}</strong>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down>
              <div className="detail-desc">{item.sub_title} </div>
            </P.ItemDesc_Down>
          </>
        );
      case "Brand":
        return (
          <>
            <P.ItemDesc_Up>
              <strong>{item.brand_name}</strong>
              <div className="follower_up">관심고객수</div>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down>
              <div className="follower_down">
                {Number(item.follower).toLocaleString("ko-KR")}
              </div>
            </P.ItemDesc_Down>
          </>
        );
      default:
        return <></>;
    }
  };
  return (
    <P.ItemWrapper>
      <P.ItemImage
      onClick={handleOpenModal}
        className="item-img"
        style={{
          background: `url(${item.image_url || item.brand_image_url})`,
          backgroundSize: "cover",
        }}
      >
        <P.BookmarkBtn onClick={handleBookmark} className="item-bookmark" type="button">
          {/* <HiOutlineStar size={35} /> */}
          { isMarked ? <HiOutlineStar size={35} style={{fill:"#ffd361"}} /> : <HiOutlineStar size={35} /> }
        </P.BookmarkBtn>
      </P.ItemImage>

      <P.ItemDesc>{showCard(item)}</P.ItemDesc>
    </P.ItemWrapper>
  );
};
export default Item;
