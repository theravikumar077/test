const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <span>⭐ {product.rating}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
