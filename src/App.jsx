import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
	const getResponse = async () => {
		const response = await axios.get("http://localhost:8080");
		console.log(response.data);
		setdata(response.data);
	};
	const [data, setdata] = useState({});
	useEffect(() => {
		getResponse();
	}, []);

	return <div>{data.message}</div>;
};

export default App;
