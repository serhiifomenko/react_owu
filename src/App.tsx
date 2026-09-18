import './App.css';
import { products } from './components/data/productsList';
import MyProduct from './components/my-product/MyProduct';

function App() {
    return (
        <>
            {products.map((product) => (
                <MyProduct key={product.title} product={product} />
            ))};
        </>
    );
}

export default App;
