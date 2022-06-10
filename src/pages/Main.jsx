import React, { useEffect } from 'react'
import { useState } from 'react';
import requests from '../Requests';
import axios from 'axios';

const Main = () => {
      const [movies, setMovies] = useState([]);

      useEffect(() => {
				axios.get(requests.requestPopular).then((response) => {
					setMovies(response.data.results);
				});
			}, []);

  return (
    <div>Main</div>
  )
}

export default Main