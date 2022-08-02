// Functional in React
import React, { useState, useEffect } from 'react';

// parent const App yang menghandle state
const App = () => {
    const stories = [{
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

    const [searchTerm, setSearchTerm] = useState( localStorage.getItem('search') || 'React');

    // useEffect : dijalankan hanya jika ada perubahan pada searchTerm
    useEffect(() => {
      localStorage.setItem('search', searchTerm)
    },[searchTerm]);

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
const Search = ({ onSearch, search }) => {
    return (
        <div>
      <label htmlFor="search"> Search : </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
    </div>
    );
};

const List = ({ list }) => (
    <ul>
    {list.map(({objectID,...item}) => (
      <Item key={item.objectID} {...item} />
    ))}
  </ul>
);

const Item = ({ title, url, author, num_comments, points }) => (
    <li>
    <span>
      <a href={url}> {title} </a>
    </span>
    <span> {author} </span>
    <span> {num_comments} </span>
    <span> {points} </span>
  </li>
);

export default App;