import { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch?: (searchTerm: string, webRef: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [webRef, setWebRef] = useState('');
  const [propertyType, setPropertyType] = useState('Any');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm, webRef);
    }
    console.log('Search:', { searchTerm, webRef, propertyType });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-row">
        <div className="search-type-wrapper">
          <label className="search-label">Type</label>
          <select 
            className="search-type-select"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option>Any</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Townhouse</option>
            <option>Land</option>
            <option>Commercial</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search for a City, Suburb or Web Ref..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter web reference"
          className="search-webref"
          value={webRef}
          onChange={(e) => setWebRef(e.target.value)}
        />

        <button type="submit" className="search-button">
          Go
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
