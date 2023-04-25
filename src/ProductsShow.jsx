export function ProductsShow(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <img src={props.product.images[0].url} />
    </div>
  );
}
