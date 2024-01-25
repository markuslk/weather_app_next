export async function GET() {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.43696079999999&lon=24.7535746&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`);
	if (!res.ok) {
		throw new Error("Failed to fetch");
	}

	const data = await res.json();

	return Response.json(data);
}
