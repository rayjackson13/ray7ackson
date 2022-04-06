import * as React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Music } from 'components/Music';

const IndexPage = (): JSX.Element => (
  <div>
    <Hero />
    <Header />
    <Music />
    <Footer />
  </div>
);

export default IndexPage;
