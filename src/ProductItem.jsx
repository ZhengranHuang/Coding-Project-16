import App from '/app.jsx'
import ProductList from '/ProductList'
//Task4:Create the ProductItem Component
function ProductItem(){
    return (
    <div>
    <ul>
    <h2>{product.name}</h2>
    <p>Price: ${product.price}</p>
    <p>{product.description}</p>
    </ul>
    </div>
    )
    };
    export default ProdutItem;
