import React from 'react';
import News from './news';



const App = () => {
  return (
    <div>
      <header className='items-center w-full'>
        <h1>Daily News</h1>
      </header>
      <main>
        <News />
      </main>
      <footer>
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;