import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function Home() {
  // var db = "http://localhost:1337";
  var db = "https://sneakers-ecommerce.herokuapp.com";
  var [featuredCategory, setFeaturedCategory] = useState({});

	useEffect(
		function () {
			axios.get(`${db}/categories/?slug=air-jordan`)
      .then(response => { setFeaturedCategory(response.data?.[0]);
      });
		},
		[db, setFeaturedCategory]
	);


  var [products, setProducts] = useState({});
  useEffect(
    function () {
      axios.get(`${db}/products`)
        .then(response => { setProducts(response)});
      },
    [setProducts, db]
  );
    
  
  var [categories, setCategories] = useState({});
  useEffect(
		function () {
			axios.get(`${db}/categories?_sort=id:asc`)
      .then(response => { setCategories(response.data)});
		},
		[setCategories, db]
	);

  return (
    <>
      <Header banner={true} img={featuredCategory.banner?.name} model={featuredCategory.title} brand={"Nike"} slug={featuredCategory.slug} about={featuredCategory.description} />
      <section className="hot">
        <h2>Featured Sneakers</h2>
        <div className="products">
        {products?.data?.slice(0, 8).map(function (result) {
          return (
            <ProductCard key={result.id} id={result.id} slug={result.slug} title={result.title} price={result.price} brand={"Nike"} img={result.img[0].name} />
          );
        })}
        </div>
      </section>
      <section className="featuredCategory">
        <div className="featuredCategory__content">
          <p className="featuredCategory__brand">Nike</p>
          <Link to="/"><h2 className="featuredCategory__category">{categories?.[1]?.title}</h2></Link>
          <p className="featuredCategory__text">{categories?.[1]?.description}</p>
          <Link to={`/category/${categories?.[1]?.slug}`} className="featuredCategory__link">Explore {categories?.[1]?.title} &gt;</Link>
        </div>
        <div className="featuredCategory__img" style={{backgroundImage: `url(${categories?.[1]?.img?.name})`}}></div>
      </section>
      <section className="featuredCategory">
        <div className="featuredCategory__img" style={{backgroundImage: `url(${categories?.[3]?.img?.name})`}}></div>
        <div className="featuredCategory__content">
          <p className="featuredCategory__brand">Nike</p>
          <Link to="/"><h2 className="featuredCategory__category">{categories?.[3]?.title}</h2></Link>
          <p className="featuredCategory__text">{categories?.[3]?.description}</p>
          <Link to={`/category/${categories?.[3]?.slug}`} className="featuredCategory__link">Explore {categories?.[3]?.title} &gt;</Link>
        </div>
      </section>
      
      <footer>
        fooooooooooooooooooooter
      </footer>
    </>
  )
}
