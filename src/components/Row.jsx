import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const Row = ({ title, fetchURL, rowID }) => {
	const [movies, setMovies] = useState([]);

	// using axios to make an api call whenever the page loads
	// fetchURL = requests.requestXXX = url defined in Requests.js
	// response.data.results = list of movies for each row (see results in console.log(movies))
	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

    // slider arrow functions
	const slideLeft = () => {
		var slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft - 1000;
	};

	const slideRight = () => {
		var slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft + 1000;
	};

    // slider + added icons for mouse clicking (left, right)
	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
				<div
					id={"slider" + rowID}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((item, id) => (

						<Movie key={id} item={item} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
			</div>
		</>
	);
};

export default Row;