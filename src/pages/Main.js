import * as M from "../style/Main.styled";
import ProductList from "../components/ProductList";
import BookmarkList from "../components/BookmarkList";
const Main = () => {

    return(
        <M.MainContainer>
            <ProductList />
            <BookmarkList />
        </M.MainContainer>
    )
}

export default Main;