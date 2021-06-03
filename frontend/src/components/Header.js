import { Link } from "@reach/router";
import "./Header.scss";

export default function Header({ banner, img, brand, model, about, slug }) {
  return (
    <>
      <header className="siteHeader">
        <nav className="siteHeader__navigation">
          <ul className="siteHeader__navigationList">
            <li><Link to="/" className="logo">Sneks</Link></li>
          </ul>
          <ul className="siteHeader__navigationList">
            <li className="sneakers">
              <Link to="/sneakers">Sneakers</Link>
              <div className="siteHeader__dropdown">
                <ul>
                  <li><Link to="/explore">Explore</Link></li>
                  <li><Link to="">Sneakers under $200</Link></li>
                  <li><Link to="">Sneakers under $300</Link></li>
                  <li><Link to="">Sneakers under $400</Link></li>
                  <li><Link to="">Sneakers under $500</Link></li>
                </ul>
                <ul>
                  <li><Link to="/category/air-jordan">Air Jordan</Link></li>
                  <li><Link to="/category/air-jordan-1-low">Air Jordan 1 Low</Link></li>
                  <li><Link to="/category/air-jordan-1-mid">Air Jordan 1 Mid</Link></li>
                  <li><Link to="/category/air-jordan-1-high">Air Jordan 1 High</Link></li>
                  <li><Link to="/category/air-jordan-2-plus">Air Jordan 2+</Link></li>
                </ul>
                <ul>
                  <li><Link to="">Nike</Link></li>
                  <li><Link to="">Air Max</Link></li>
                  <li><Link to="">Air Force 1</Link></li>
                  <li><Link to="/category/dunk">Dunk</Link></li>
                  <li><Link to="">Off-White</Link></li>
                  <li><Link to="">Sacai</Link></li>
                  <li><Link to="">Travis Scott</Link></li>
                </ul>
                <ul>
                  <li><Link to="/category/yeezy">Yeezy</Link></li>
                  <li><Link to="">Yeezy 350</Link></li>
                  <li><Link to="">Yeezy 380</Link></li>
                  <li><Link to="">Yeezy 500</Link></li>
                  <li><Link to="/category/yeezy-700">Yeezy 700</Link></li>
                  <li><Link to="">Yeezy Slide</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
          <ul className="siteHeader__navigationList">
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
      </header>
      {banner === true ?
        <section className="heroBanner">
          <img src={img} alt={brand + ' ' + model} className="heroBanner__img" />
          <div className="heroBanner__content">
            <p className="heroBanner__brand">{brand}</p>
            <Link to={`/category/${slug}`}>
              <h2 className="heroBanner__model">{model}</h2>
            </Link>
          </div>
        </section> : ""}
      <section className="aboutShoes">
        <p>{about}</p>
      </section>

    </>
  )
}
