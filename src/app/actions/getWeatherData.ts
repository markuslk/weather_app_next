export const getWeatherData = async ({ lat, lon }: { lat: string; lon: string }) => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
	if (!data.ok) {
		throw new Error("Failed to fetch data weather data");
	}

	return data.json();
};
