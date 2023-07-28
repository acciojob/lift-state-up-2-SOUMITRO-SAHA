import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<h1>Parent Component</h1>
			<p>{inputValue}</p>
			<Child setInputValue={setInputValue} />
		</>
	);
};

export default Parent;
