import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Product() {
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id")
  var [product, setProduct] = useState({});

	useEffect(
		function () {
			axios.get(`http://localhost:1337/products/${id}`)
      .then(response => { setProduct(response.data);
      });
		},
		[setProduct, id]
	);

  console.log(product);

  return (
    <main>
      <Header />
      <div>
        <h1>{product.title}</h1>
        <img src={"http://localhost:1337" + product.img?.[0].url} alt="" />
      </div>
    </main>
  )
}
