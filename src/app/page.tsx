import { Metadata } from "next/types";
import CurrentWeather from "./components/CurrentWeather";
import { DEFAULT_LOCATAION } from "./lib/config";
import { getWeatherData } from "./actions/getWeatherData";
import { notFound } from "next/navigation";
import { OpenWeatherData, TenDayForecastData } from "./lib/types";
import SearchBar from "./components/SearchBar";
import { getForecastData } from "./actions/getForecastData";

export const metadata: Metadata = {
	title: `${DEFAULT_LOCATAION.city} - Weather Forecast`,
	description: `Current weather in ${DEFAULT_LOCATAION.city}`,
};

export default async function Home() {
	const { lat, lon } = DEFAULT_LOCATAION.coord;

	const CurrentWeatherRequest: OpenWeatherData = await getWeatherData({ lat, lon });

	const WeatherForecastRequest: TenDayForecastData = await getForecastData({ lat, lon });

	const [current_weather_data, forecast_weather_data] = await Promise.all([CurrentWeatherRequest, WeatherForecastRequest]);

	if (!current_weather_data || !forecast_weather_data) return notFound();

	return (
		<>
			<div className="p-8 md:p-32 flex justify-center flex-col items-center gap-12">
				<SearchBar />
				<div className="flex flex-col gap-4 md:flex-row w-full justify-center">
					<CurrentWeather
						data={current_weather_data}
						city={forecast_weather_data.city}
					/>
				</div>
			</div>
		</>
	);
}
