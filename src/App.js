// Functional in React
import React from 'react';

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
      <hr />
      <List list={stories} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}> {item.title} </a>
        </span>
        <span> {item.author} </span>
        <span> {item.num_comments} </span>
        <span> {item.points} </span>
      </li>
    ))}
  </ul>
);

export default App;
