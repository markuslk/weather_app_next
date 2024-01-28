import { Metadata } from "next/types";
import CurrentWeather from "./components/CurrentWeather";
import { DEFAULT_LOCATAION } from "./lib/config";
import { getWeatherData } from "./actions/getWeatherData";
import { notFound } from "next/navigation";
import { OpenWeatherData } from "./lib/types";

export const metadata: Metadata = {
	title: `${DEFAULT_LOCATAION.city} - Weather Forecast`,
	description: `Current weather in ${DEFAULT_LOCATAION.city}`,
};

export default async function Home() {
	const { lat, lon } = DEFAULT_LOCATAION.coord;

	const CurrentWeatherRequest: OpenWeatherData = await getWeatherData({ lat, lon });

	const current_weather_data = await Promise.all([CurrentWeatherRequest]);

	console.log(current_weather_data);

	if (!current_weather_data) return notFound();

	return (
		<>
			<div className="flex flex-col gap-4 md:flex-row p-8 md:p-32 justify-center">
				<CurrentWeather data={current_weather_data?.[0]} />
			</div>
		</>
	);
}
