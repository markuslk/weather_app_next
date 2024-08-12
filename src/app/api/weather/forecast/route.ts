export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const lat = searchParams.get("lat");
	const lon = searchParams.get("lon");
	const TIMESTAMPS = 10;

	if (!lat || !lon) {
		return Response.json({ message: "Missing params" }, { status: 400 });
	}

	const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=${TIMESTAMPS}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
		next: { revalidate: 900 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch weather data");
	}

	const data = await res.json();

	return Response.json(data);
}
