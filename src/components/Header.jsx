import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="flex justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
