import ProductsList from "../features/products/ProductsList";
import Footer from "./Footer";
import Header from "./Header";

const Menu = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <ProductsList />
            </main>
            <Footer />
        </div>
    );
}

export default Menu;