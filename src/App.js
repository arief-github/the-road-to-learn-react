// Functional in React
import React, { useState } from 'react';

// parent const App yang menghandle state
const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.includes(searchTerm)
  );

  return (
    <div>
      <h1> My Hackrz Stories </h1>
      <Search onSearch={handleSearch} search={searchTerm} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};


// method list, search, item hanya passing props dan return view
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Search = (props) => {
  const { search, onSearch } = props;
  return (
    <div>
      <label htmlFor="search"> Search : </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
    </div>
  );
};

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}> {item.title} </a>
    </span>
    <span> {item.author} </span>
    <span> {item.num_comments} </span>
    <span> {item.points} </span>
  </li>
);

export default App;
