import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	const { user } = UserAuth();

	// movie refference (specific movie based on user email saved in db under users collection)
	const movie = doc(db, "users", `${user?.email}`);

	// if user is logged in update firestore cloud doc (database) with saved movies once that user saves anything
	const saveMovie = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movie, {
				savedMovies: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert("You have to Log in to save a movie!");
		}
	};

	// movie item content imported in Row slider + heart icons for saving movies
	return (
		<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
			<img
				className="w-full h-auto block"
				src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
				alt={item?.title}
			/>
			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
				<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
					{item?.title}
				</p>
				<p onClick={saveMovie}>
					{like ? (
						<FaHeart className="absolute top-4 right-4 text-gray-300" />
					) : (
						<FaRegHeart className="absolute top-4 right-4 text-gray-300" />
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
