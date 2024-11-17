//Task6:Create the AddProductForm Component
import App from './App.jsx'
function AddProductForm(){
<form onSubmit={handleSubmit}>
<label>
Products:
<input type="product" value={product} onChange={handleChange} />
</label>
</form>
}