type Coordinates = {
	lon: string;
	lat: string;
};

export type Location = {
	city: string;
	coord: Coordinates;
};

export type OpenWeatherData = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: Weather[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
};

type Weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
};

export type City = {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
};
