import React from "react";

const Child = ({ setInputValue }) => {
	return (
		<div className='child'>
			<h1>Child Component</h1>
			<input type='text' onChange={(e) => setInputValue(e.target.value)} />
		</div>
	);
};

export default Child;
