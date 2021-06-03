import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Product(props) {
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id")
  var [product, setProduct] = useState({});

	useEffect(
		function () {
			axios.get(`http://localhost:1337/products/?slug=${props.slug}`)
      .then(response => { setProduct(response.data?.[0]);
      });
		},
		[setProduct, id, props.slug]
	);

  return (
    <main>
      <Header />
      <div>
        <h1>{product?.title}</h1>
        <img src={"http://localhost:1337" + product?.img?.[0]?.url} alt="" />
      </div>
    </main>
  )
}
