// News.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('general'); // State to manage selected category

  // Replace with your actual API key from NewsAPI
  const apiKey = 'b9c719cb4efb42dc88c161ca3f378e4d';

  // Function to fetch news articles based on the selected category
  const fetchNews = async (category) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the news articles:", error);
      setLoading(false);
    }
  };

  // Fetch news articles whenever the category changes
  useEffect(() => {
    setLoading(true);  // Show loading when changing categories
    fetchNews(category);
  }, [category]);

  // Render loading message while data is being fetched
  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <div>
      <h2>Latest News</h2>

      {/* Category selection */}
      <div className="category-selector">
        <button onClick={() => setCategory('general')} className='bg-blue-600'>General</button>
        <button onClick={() => setCategory('business')}>Business</button>
        <button onClick={() => setCategory('sports')}>Sports</button>
        <button onClick={() => setCategory('technology')}>Technology</button>
        <button onClick={() => setCategory('health')}>Health</button>
        <button onClick={() => setCategory('entertainment')}>Entertainment</button>
      </div>

      {/* News articles */}
      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt={article.title} style={{ width: '100%' }} />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
