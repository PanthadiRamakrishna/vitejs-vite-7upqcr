import './App.css';
import { useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchTerm}`
      );
      setBooks(response.data.docs.slice(0, 20)); // Take the first 20 results
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Book Finder📚</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <BookList books={books} />
    </div>
  );
}
export default App;
