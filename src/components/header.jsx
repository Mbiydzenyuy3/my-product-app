import Button from "./Button";

function Header() {
  return (
    <header>
        <span className="logo">
          COSMETICS <span className="brand">.M</span>
        </span>
        <nav>
          <li>Purchase</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
        <Button />
    </header>
  );
}

export default Header;
