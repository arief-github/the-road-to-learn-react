import React, { useState, useEffect } from 'react';

const Phrase = () => {
	const [ val, set ] = useState("");
	const [ phrase, setPhrase ] = useState("example phrase");

	const createPhrase = () => {
		setPhrase(val);
		set("");
	}

	// dijalankan hanya sekali
	useEffect(() => {
		console.log('only once after initial render');
	},[]);

	// dijalankan tiap kali ada perubahan state variabel val
	useEffect(() => {
		console.log(`typing "${val}"`);
	}, [val]);

	// dijalankan tiap kali ada perubahan state variabel phrase
	useEffect(() => {
		console.log(`saved phrase: ${phrase}`);
		document.querySelector('.savedPhrase').innerHTML = phrase;
	}, [phrase]);

	// dijalankan tiap kali ada perubahan baik itu dari val ataupun phrase
	useEffect(() => {
		console.log(` either val or phrase has changed `);
	}, [ val, phrase ] );

	return (
		<>
			<label>Favorite phrase:</label>
			<p className="savedPhrase"></p>
			<input value={val} placeholder={phrase} onChange={ e => set(e.target.value) } />
			<button onClick={ createPhrase } > Send </button>
		</>
	)
}

export default Phrase;