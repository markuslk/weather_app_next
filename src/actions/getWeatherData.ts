export const getWeatherData = async ({ lat, lon }: { lat: string; lon: string }) => {
	const data = await fetch(`${process.env.LOCAL_DEV_SERVER_URL}/api/weather?lat=${lat}&lon=${lon}`);
	if (!data.ok) {
		throw new Error("Failed to fetch data weather data");
	}

	return data.json();
};
