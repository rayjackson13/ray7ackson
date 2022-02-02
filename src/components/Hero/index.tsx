import React from 'react';

import BackgroundImage from 'assets/img/bg-new.jpeg';
import './styles.scss';

export const Hero = (): JSX.Element => {
  const gradient = 'linear-gradient(90deg, rgba(55,55,55,.25) 0%, rgba(55,55,55,0) 100%)';
  const backgroundImage = `${gradient}, url(${BackgroundImage})`;
  return (
    <header className="topper">
      <div className="landscape" style={{ backgroundImage }}>
        <canvas id="snow"></canvas>
      </div>
      <nav className="header navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="accent">Ray</span> 7ackson
          </a>

          <div>
            <ul className="social ml-auto">
              <li className="social-link">
                <a
                  className="social-link_item"
                  data-link="soundcloud"
                  href="https://music.apple.com/cz/artist/ray-7ackson/1487964868"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-apple"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  className="social-link_item"
                  data-link="spotify"
                  href="https://open.spotify.com/artist/7rVhEJQCPnrhgXUFsctd20"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-spotify"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  className="social-link_item"
                  data-link="soundcloud"
                  href="https://soundcloud.com/ray7ackson"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-soundcloud"></i>
                </a>
              </li>
              <li className="social-divider"></li>
              <li className="social-link">
                <a
                  className="social-link_item"
                  data-link="vk"
                  href="https://vk.com/jakeminor"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-vk"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  className="social-link_item"
                  data-link="instagram"
                  href="https://www.instagram.com/ray7ackson"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="topper-content">
        <span className="attribution">
          Photo by
          <a href="https://unsplash.com/photos/_TuI8tZHlk4" rel="noreferrer" target="_blank">
            Josh Hild
          </a>
          on
          <a href="https://unsplash.com" rel="noreferrer" target="_blank">
            Unsplash
          </a>
        </span>
      </div>
    </header>
  );
};
