import App from '/app.jsx'
//Task3:Create the ProductList Component
function ProductList(){
return (
<div>
    <ul>
        <h2>Product List</h2>
        (products.map(product = (
            <li key={ProductList.id}>
{ProductList.name} - $(product.price)
            </li>
        )))
    </ul>
</div>
)
};
//Task4:Implement keys for each ProductItem in ProductList
export default ProdutList;