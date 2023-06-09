import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            STOR
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#products-index">
                  All Products
                </a>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/products/new">
                  New Product
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  <LogoutLink />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
