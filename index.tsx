import React from 'react';
import Head from 'next/head';
import styles from './styles.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Webpage-0</title>
      </Head>
      <h1>You can enter a key, to find the associated image</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Enter your search term" />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default HomePage;
