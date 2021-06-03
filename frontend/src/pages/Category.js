import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function Category(props) {
  // var db = `http://localhost:1337`;
  var db = `https://sneakers-ecommerce.herokuapp.com`;
  var [category, setCategory] = useState({});


	useEffect(
		function () {
			axios.get(`${db}/categories/?slug=${props?.slug}`)
      .then(response => { setCategory(response.data?.[0]);
      });
		},
		[db, props.slug, setCategory]
	);

  return (
    <>
			<Header banner={true} img={category.banner?.name} model={category.title} brand={"Nike"} about={category.description} slug={category.slug} />
			<div className="products">
        {category?.products?.map(function (result) {
          return (
            <ProductCard key={result.id} id={result.id} slug={result.slug} title={result.title} price={result.price} brand={"Nike"} img={result.img[0].name} />
          );
        })}
        </div>
    </>
  )
}
