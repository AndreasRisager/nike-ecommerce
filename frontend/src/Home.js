import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function Home() {
  var [products, setProducts] = useState({});
  useEffect(
    function () {
      axios.get('http://localhost:1337/products')
        .then(response => { setProducts(response)});
      },
    [setProducts]
  );
    
  
  var [categories, setCategories] = useState({});
  useEffect(
		function () {
			axios.get('http://localhost:1337/categories')
      .then(response => { setCategories(response.data)});
		},
		[setCategories]
	);

  console.log(categories);


  return (
    <>
      <Header />
      <section className="heroBanner">
        <img src="./images/airjordan.jpg" alt="air jordans" className="heroBanner__img" />
        <div className="heroBanner__content">
          <p className="heroBanner__brand">Nike</p>
          <h2 className="heroBanner__model">Air Jordan</h2>
        </div>
      </section>
      <section className="aboutShoes">
        <p>Air Jordan is an American brand of basketball shoes, athletic, casual, and style clothing produced by Nike. Founded in Chicago, Air Jordan was created for Hall of Fame basketball player and six-time NBA Finals MVP Michael Jordan during his time with the Chicago Bulls. The original Air Jordan sneakers were produced exclusively for Michael Jordan in late 1984, and released to the public on April 1, 1985.</p>
      </section>
      <section className="hot">
        <h2>Featured Sneakers</h2>
        <div className="products">
        {products?.data?.map(function (result) {
          return (
            <ProductCard key={result.id} id={result.id} slug={result.slug} title={result.title} price={result.price} brand={"Nike"} img={"http://localhost:1337" + result.img[0].url} />
          );
        })}
        {products?.data?.map(function (result) {
          return (
            <ProductCard key={result.id} id={result.id} slug={result.slug} title={result.title} price={result.price} brand={"Nike"} img={"http://localhost:1337" + result.img[0].url} />
          );
        })}
        </div>
      </section>
      <section className="featuredCategory">
        <div className="featuredCategory__content">
          <p className="featuredCategory__brand">Nike</p>
          <Link to="/"><h2 className="featuredCategory__category">{categories?.[1]?.title}</h2></Link>
          <p className="featuredCategory__text">{categories?.[1]?.description}</p>
          <Link to={`/category/${categories?.[1]?.id}`} className="featuredCategory__link">Explore {categories?.[1]?.title} &gt;</Link>
        </div>
        <div className="featuredCategory__img" style={{backgroundImage: `url(http://localhost:1337${categories?.[1]?.img?.url})`}}></div>
      </section>
      <section className="featuredCategory">
        <div className="featuredCategory__img" style={{backgroundImage: `url(http://localhost:1337${categories?.[3]?.img?.url})`}}></div>
        <div className="featuredCategory__content">
          <p className="featuredCategory__brand">Nike</p>
          <Link to="/"><h2 className="featuredCategory__category">{categories?.[3]?.title}</h2></Link>
          <p className="featuredCategory__text">{categories?.[3]?.description}</p>
          <Link to={`/category/${categories?.[3]?.id}`} className="featuredCategory__link">Explore {categories?.[3]?.title} &gt;</Link>
        </div>
      </section>
      
      <footer>
        fooooooooooooooooooooter
      </footer>
    </>
  )
}
