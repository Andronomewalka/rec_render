/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useState } from 'react';

export const App = () => {
	const [done, setDone] = useState(false);
	const [counter, setCounter] = useState(0);

	useLayoutEffect(() => {
		if (counter < 20) {
			setCounter(counter + 1);	
		}
	}) // intentionally run on every render

	useEffect(() => {
		setDone(true);
	}) // intentionally run on every render

	console.log("render done", done);
	console.log("render counter", counter);
	console.log("render\n");

	return (
		<div>{counter} renders</div>
	);
}
