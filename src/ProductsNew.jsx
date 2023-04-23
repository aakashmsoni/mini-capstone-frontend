export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreateProduct(params);
    event.target.reset();
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Description: <input type="text" name="description" />
          </label>
        </div>
        <div>
          <label>
            Category: <input type="text" name="categories" />
          </label>
        </div>
        <div>
          <label>
            Price: <input type="number" name="price" />
          </label>
        </div>
        <div>
          <label>
            Supplier: <input type="text" name="supplier" />
          </label>
        </div>
        <div>
          <label>
            Inventory: <input type="number" name="inventory" />
          </label>
        </div>
        <div>
          <label>
            Image: <input type="url" name="images" />
          </label>
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
