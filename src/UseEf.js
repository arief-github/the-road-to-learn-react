import React, { useState, useEffect } from 'react';

// Praktik useEffect untuk menangani DOM API diluar Component
const UseEf = () => {
	// initial state is true
	const [toggle, setToggle] = useState(true);

	// when handleToggle trigger. state is false
	const handleToggle = () => {
		setToggle(!toggle);
	}	

	// registering initial state and handleToggle Function on props.
	return <Toggler toggle={toggle} onToggle={handleToggle}/>
}


const Toggler = ({ toggle, onToggle }) => {
	// useEffect Always : this function will render on every render
	// useEffect(() => {
	// 	console.log('I run on every render: mount+update.');
	// });

	// useEffect Mount : this functions will run render one time. add the second argument with empty array
	// useEffect(() => {
	// 	console.log('I run only on the first render: mount.');
	// }, []);	

	// useEffect Update : this functions will runs only when the variable in the dependency array changes
	useEffect(() => {
		console.log('I run only if toggle changes (and on mount)');
	}, [toggle]);


	return (
		<div>
			<button type="button" onClick={onToggle}>
				Toggle
			</button>
			{toggle && <div>Hello React</div>}
		</div>
	)
}

export default UseEf;
