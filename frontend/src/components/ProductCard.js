import "./ProductCard.scss";
import { Link } from "@reach/router";

export default function Product({title, price, brand, img, slug, id}) {
  return (
    <article className="product">
      <Link to={`/product/${slug}`}>
        <img src={img} alt={"a pair of " + title} className="product__img" />
      </Link>
      <p className="product__brand">{brand}</p>
      <a href="/">
        <h3 className="product__title">{title}</h3>
      </a>
      <p className="product__price">${price}</p>
    </article>
  )
}
