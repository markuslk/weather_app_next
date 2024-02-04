export const getGeoLocation = async ({ city }: { city: string }) => {
	const data = await fetch(`/api/location?q=${city}`);
	if (!data.ok) {
		throw new Error("Failed to fetch data weather data");
	}

	return data.json();
};
