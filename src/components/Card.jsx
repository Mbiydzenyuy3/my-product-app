function CardItem(product, onAddProduct) {
  return (
    <div className="item-list">
      <img src={product.image} alt={product.name} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <div className="buttons">
        <button className="add" onClick={() => onAddProduct(product.id, 1)}>
          +
        </button>
        <button className="remove" onClick={() => onAddProduct(product.id, -1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default CardItem;
