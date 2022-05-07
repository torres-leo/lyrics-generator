import React, { useState } from 'react';
import useLetras from '../hooks/useLetras';

const Formulario = () => {
	const { setAlerta, busquedaLetra, setCargando } = useLetras();
	const [busqueda, setBusqueda] = useState({
		artista: '',
		cancion: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.values(busqueda).includes('')) {
			setAlerta('Ingresa un Nombre de Artista y su Canción');

			setTimeout(() => {
				setAlerta('');
			}, 4500);
			return;
		}
		busquedaLetra(busqueda);
	};

	return (
		<form onSubmit={handleSubmit}>
			<legend>Busca por artistas y canción</legend>
			<div className='form-grid'>
				<div>
					<label htmlFor='artista'>Artista</label>
					<input
						type='text'
						id='artista'
						name='artista'
						placeholder='Nombre del artista'
						value={busqueda.artista}
						onChange={(e) =>
							setBusqueda({
								...busqueda,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<label htmlFor='cancion'>Canción</label>
					<input
						type='text'
						id='cancion'
						name='cancion'
						placeholder='Nombre de la cancion'
						value={busqueda.cancion}
						onChange={(e) =>
							setBusqueda({
								...busqueda,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<input type='submit' value='Buscar' />
			</div>
		</form>
	);
};

export default Formulario;
