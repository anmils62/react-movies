import React, { useState } from 'react';

const Search = (props) => {
	const { searchMovies = Function.prototype } = props;

	const [search, setSearch] = useState('');

	const handleKey = (event) => {
		if (event.key === 'Enter') {
			searchMovies(search);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='row'>
			<form
				onSubmit={handleSubmit}
				className='col s12'
			>
				<div className='row'>
					<div className='input-field col s12'>
						<input
							className='validate'
							placeholder='search'
							type='text'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={handleKey}
						/>
						<button
							className='waves-effect waves-light btn search-btn'
							type='submit'
							onClick={() => searchMovies(search)}
						>
							SEARCH
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export { Search };
