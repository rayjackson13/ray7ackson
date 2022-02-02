import React from 'react';

export const Header = (): JSX.Element => (
  <aside className="header-follow">
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="accent">Ray</span> 7ackson
        </a>
        <button
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarsExampleDefault"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <nav className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="social ml-auto">
            <li className="social-link">
              <a
                className="social-link_item"
                data-link="bandcamp"
                href="https://rayjackson.bandcamp.com/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <i className="fab fa-bandcamp" />
              </a>
            </li>
            <li className="social-link">
              <a
                className="social-link_item"
                data-link="soundcloud"
                href="https://soundcloud.com/rayjackson13"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <i className="fab fa-soundcloud" />
              </a>
            </li>
            <li className="social-link">
              <a
                className="social-link_item"
                data-link="vk"
                href="https://vk.com/jakeminor"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <i className="fab fa-vk" />
              </a>
            </li>
            <li className="social-link">
              <a
                className="social-link_item"
                data-link="twitter"
                href="https://twitter.com/RayJackson132"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="social-link">
              <a
                className="social-link_item"
                data-link="instagram"
                href="https://www.instagram.com/rayjackson132"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
);
