import { Metadata } from "next/types";
import CurrentWeather from "./components/currentWeather";
import { DEFAULT_LOCATAION } from "./lib/config";

// async function getData() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/weather`);
// 	const data = await res.json();
// 	return data;
// }

export const metadata: Metadata = {
	title: `${DEFAULT_LOCATAION.city} - Weather Forecast`,
	description: `Current weather in ${DEFAULT_LOCATAION.city}`,
};

export default async function Home() {
	// const { lat, lon } = DEFAULT_LOCATAION.coord;

	// const WeatherData = await getData();

	// console.log(WeatherData);

	return (
		<>
			<div className="flex flex-col gap-4 md:flex-row p-8 md:p-32 justify-center">
				<CurrentWeather />
			</div>
		</>
	);
}
