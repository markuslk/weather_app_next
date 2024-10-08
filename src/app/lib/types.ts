type Coordinates = {
	lon: string;
	lat: string;
};

export type Location = {
	city: string;
	coord: Coordinates;
};

export type OpenWeatherData = {
	city: City;
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

export type ForecastData = {
	dt: number;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	clouds: {
		all: number;
	};
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	visibility: number;
	pop: number;
	rain?: {
		"1h": number;
	};
	sys: {
		pod: "d" | "n";
	};
	dt_txt: string;
};

export type ForecastDataResponse = {
	cod: string;
	message: number;
	cnt: number;
	list: ForecastData[];
	city: City;
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
