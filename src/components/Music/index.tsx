import React from 'react';

export const Music = (): JSX.Element => (
  <section className="music">
    <div className="container">
      <h1 className="music-title">Play my music</h1>
      <div className="row">
        <div className="offset-0 offset-lg-2 col-12 col-lg-8 no_padding-xs">
          <div className="music-player">
            <audio id="audioPlayer" />
            <div className="row height-full">
              <div className="col-12 col-sm-4 px-0">
                <div className="music-player-albums">
                  <h5 className="music-player-albums--title">Albums</h5>
                  <span className="music-player-albums--item" data-album="0">
                    Something Special
                  </span>
                  <span className="music-player-albums--item" data-album="1">
                    Home - Single
                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-8 px-0 music-player-rewind">
                <div className="music-player-controls">
                  <span className="music-player-controls-wrap">
                    <button className="music-player-controls--button" id="audioPlay" type="button">
                      <i className="fas fa-play-circle" />
                    </button>
                    <button
                      className="music-player-controls--button small"
                      id="audioPrev"
                      type="button"
                    >
                      <i className="fas fa-step-backward" />
                    </button>
                    <button
                      className="music-player-controls--button small mr-0"
                      id="audioNext"
                      type="button"
                    >
                      <i className="fas fa-step-forward" />
                    </button>
                  </span>
                  <span className="music-player-controls-buy">
                    <span className="music-player-controls-buy--price" id="audioPrice">
                      7$
                    </span>
                    <a
                      className="music-player-controls-buy--link media-button"
                      href="temp"
                      id="audioBuy"
                      target="_blank"
                    >
                      <i className="fas fa-shopping-cart" />
                      <span className="music-player-controls-buy--text">Buy</span>
                    </a>
                  </span>
                </div>
                <div className="music-player-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
