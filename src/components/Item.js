import * as P from "../style/Item.styled";
import { useSelector, useDispatch } from "react-redux";
import {modalActions} from "../store/modal";
import { HiOutlineStar } from "react-icons/hi";
import { bookmarkActions } from "../store/bookmark";
import { types } from "../constants/types";
const Item = ({ data }) => {
    if(!data) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
   const isMarked = useSelector((state) => state.bookmark.includes(data.id));

    const handleOpenModal =() => {
        dispatch(modalActions.open());
        dispatch(modalActions.showModal(data));
    }
    const handleBookmark = (e) =>{
      e.stopPropagation();
      dispatch(bookmarkActions.toggleBookmark(data.id));
    }
   
  const showCard = (data) => {
    switch (data.type) {
      case types.PRODUCT:
        return (
          <>
            <P.ItemDesc_Up>
              <strong>{data.title}</strong>
              <div className="sale">{data.discountPercentage}%</div>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down>
              <div className="price">
                {Number(data.price).toLocaleString("ko-KR")}원
              </div>
            </P.ItemDesc_Down>
          </>
        );
      case types.CATEGORY:
        return (
          <>
            <P.ItemDesc_Up>
              <strong># {data.title}</strong>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down></P.ItemDesc_Down>
          </>
        );
      case types.EXHIBITION:
        return (
          <>
            <P.ItemDesc_Up>
              <strong>{data.title}</strong>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down>
              <div className="detail-desc">{data.sub_title} </div>
            </P.ItemDesc_Down>
          </>
        );
      case types.BRAND:
        return (
          <>
            <P.ItemDesc_Up>
              <strong>{data.brand_name}</strong>
              <div className="follower_up">관심고객수</div>
            </P.ItemDesc_Up>
            <P.ItemDesc_Down>
              <div className="follower_down">
                {Number(data.follower).toLocaleString("ko-KR")}
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
        url={`${data.image_url || data.brand_image_url}`}
      >
        <P.BookmarkBtn onClick={handleBookmark} className="item-bookmark" type="button">
          {/* <HiOutlineStar size={35} /> */}
          { isMarked ? <HiOutlineStar size={35} style={{fill:"#ffd361"}} /> : <HiOutlineStar size={35} /> }
        </P.BookmarkBtn>
      </P.ItemImage>

      <P.ItemDesc>{showCard(data)}</P.ItemDesc>
    </P.ItemWrapper>
  );
};
export default Item;
