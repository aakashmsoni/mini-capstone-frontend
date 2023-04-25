export function ProductsShow(props) {
  // const container = document.getElementById("image_url");

  function imageUrls(each) {
    props.product.images.map((image) => {
      return '<img src="' + image.url + '">';
    });
  }

  // for (let i = 0; i < urls.length; i++) {
  //   var img = new Image();
  //   img.src = urls[i];
  //   container.appendChild(img);
  // }

  return (
    <div id="products-show">
      <h2>{props.product.name}</h2>
      <p>${imageUrls()}</p>
      {/* {urls.forEach((element) => {
        var image = `<img src="${element}" alt="#" />`;
        console.log(image);
        document.getElementById("avatar_div").innerHTML += image;
      })} */}
      {/* <img
        src={props.product.images.map((image) => {
          console.log(image.url);
          return image.url;
        })}
      /> */}
      <p>{props.product.description}</p>
      <p>Price: ${props.product.price}</p>
    </div>
  );
}
