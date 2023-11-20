import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const searchMovies = (str) => {
		setLoading(true);
		fetch(`https://api.kinopoisk.dev/v1.2/movie/search?query=${str}`, {
			method: 'GET',
			headers: {
				accept: 'application/json',
				'X-API-KEY': `${API_KEY}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setMovies(data.docs);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetch('https://api.kinopoisk.dev/v1.2/movie/search?limit=20', {
			method: 'GET',
			headers: {
				accept: 'application/json',
				'X-API-KEY': `${API_KEY}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setMovies(data.docs);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	return (
		<main className='container content'>
			<Search searchMovies={searchMovies} />
			{loading ? <Preloader /> : <Movies movies={movies} />}
		</main>
	);
}

export { Main };
