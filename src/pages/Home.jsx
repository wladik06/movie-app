import React from 'react';
import Main from './Main';
import Row from '../components/Row';
import Navbar from "../components/Navbar";
import requests from '../Requests';


const Home = () => {

	// added unique row IDs to determine which row we refer to when using sliders
	return (
		<>
			<Navbar />
			<Main />
			<Row rowID="1" title="Coming up" fetchURL={requests.requestUpcoming} />
			<Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
			<Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
			<Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
			<Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
		</>
	);
};

export default Home;