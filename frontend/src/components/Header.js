import { Link } from "@reach/router";
import "./Header.scss";

export default function Header() {
  return (
    <header className="siteHeader">
      <nav className="siteHeader__navigation">
        <ul className="siteHeader__navigationList">
          <li><Link to="/" className="logo">Sneks</Link></li>
        </ul>
        <ul className="siteHeader__navigationList">
          <li><Link to="/sneakers">Sneakers</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        <ul className="siteHeader__navigationList">
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  )
}
