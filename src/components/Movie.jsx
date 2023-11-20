function Movie(props) {
	const {
		id,
		name,
		type,
		year,
		shortDescription,
		poster,
		rating,
		genres,
		countries,
	} = props;

	return (
		<div
			id={id}
			className='card movie'
		>
			<div className='card-image waves-effect waves-block waves-light'>
				<img
					className='activator'
					src={poster}
				/>
			</div>
			<div className='card-content'>
				<p className='card-title activator grey-text text-darken-4'>
					{name}
					<i className='material-icons right'>+</i>
				</p>
				<p>
					{rating.toFixed(1)} <span className='right'>{year}</span>
				</p>
			</div>
			<div className='card-reveal'>
				<p className='card-title grey-text text-darken-4'>
					{name}
					<i className='material-icons right'>X</i>
				</p>
				<div className='descr'>
					<p className=''> Описание</p>
					<p>{shortDescription}</p>
				</div>
				<div className='country'>
					<p className=''>
						Страна
						<span className='right'>{countries[0]}</span>
					</p>
				</div>
				<div className='genres'>
					<p className=''>
						Жанр
						<span className='right'>{genres[0]}</span>
					</p>
				</div>
				<div className='type'>
					<p className=''>
						Тип
						<span className='right'>{type}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export { Movie };
