import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Product.scss";

export default function Product(props) {
  // var db = `http://localhost:1337`;
  var db = `https://sneakers-ecommerce.herokuapp.com`;
  var [product, setProduct] = useState({});


	useEffect(
		function () {
			axios.get(`${db}/products/?slug=${props?.slug}`)
      .then(response => { setProduct(response.data?.[0]);
      });
		},
		[db, props.slug, setProduct]
	);

  console.log(product);

  return (
    <main>
      <Header img={""} model={""} brand={""} />
      <div className="productView">
        <img src={product.img?.[0]?.name} alt="" />
        <div className="productView__info">
          <h1>{product?.title}</h1>
        </div>
      </div>
    </main>
  )
}
