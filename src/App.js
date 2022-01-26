import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';

// import './App.css';

function App() {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({lat: 32.7157, lng: -117.1611});
	const [bounds, setBounds] = useState({});
	// lat: 32.7157, lng: -117.1611

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
			setCoordinates({lat: latitude, lng: longitude});
		})
	}, []);

	useEffect(() => {
		console.log(coordinates, bounds)

		getPlacesData(bounds.sw, bounds.ne)
			.then((data) => {
				console.log(data)
				setPlaces(data);
			})
	}, [coordinates, bounds]);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: '100%' }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map 
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
					/>
				</Grid>
			</Grid>

		</>
	)
}

export default App;
