export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const city = searchParams.get("q");

	if (!city) {
		return Response.json({ message: "Missing params" }, { status: 400 });
	}

	const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch location data");
	}

	const data = await res.json();

	return Response.json(data);
}
