// Functional in React
import React, { useState } from 'react';

// props
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

  return (
    <div>
      <h1> My Hackrz Stories </h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <div>
      <label htmlFor="search"> Search : </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
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
