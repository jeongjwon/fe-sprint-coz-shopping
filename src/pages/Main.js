import * as M from "../style/Main.styled";
import ProductList from "../components/ProductList";
import BookmarkList from "../components/BookmarkList";
import { title } from "../constants/title";
const Main = () => {

    return(
        <M.MainContainer>
            <ProductList title={title.PRODUCT_LIST} />
            <ProductList title={title.BOOKMARK_LIST}/>
            {/* <BookmarkList /> */}
        </M.MainContainer>
    )
}

export default Main;