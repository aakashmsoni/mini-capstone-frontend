export function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.images[0].url} />
          <br />
          <button type="button">More Info</button>
        </div>
      ))}
    </div>
  );
}
