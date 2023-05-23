import * as M from "../style/Main.styled";
import ProductList from "../components/ProductList";
import { title } from "../constants/title";
const Main = () => {

    return(
        <M.MainContainer>
            <ProductList titleList={title.PRODUCT_LIST} />
            <ProductList titleList={title.BOOKMARK_LIST}/>
        </M.MainContainer>
    )
}

export default Main;