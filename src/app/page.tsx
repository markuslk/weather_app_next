import { Metadata } from "next/types";
import CurrentWeather from "./components/CurrentWeather";
import { DEFAULT_LOCATAION } from "./lib/config";
import { getWeatherData } from "@/actions/getWeatherData";
import { notFound } from "next/navigation";
import { ForecastDataResponse, OpenWeatherData } from "./lib/types";
import SearchBar from "./components/SearchBar";
import { getForecastData } from "@/actions/getForecastData";
import ForecastWeather from "./components/ForecastWeather";

export const metadata: Metadata = {
	title: `${DEFAULT_LOCATAION.city} - Weather Forecast`,
	description: `Current weather in ${DEFAULT_LOCATAION.city}`,
};

export default async function Home() {
	const { lat, lon } = DEFAULT_LOCATAION.coord;

	const CurrentWeatherRequest: OpenWeatherData = await getWeatherData({ lat, lon });

	const WeatherForecastRequest: ForecastDataResponse = await getForecastData({ lat, lon });

	const [current_weather_data, forecast_weather_data] = await Promise.all([CurrentWeatherRequest, WeatherForecastRequest]);

	if (!current_weather_data || !forecast_weather_data) return notFound();

	return (
		<>
			<div className="p-8 md:p-32 flex justify-center flex-col items-center gap-12">
				<SearchBar />
				<div className="flex gap-4 flex-col w-full items-center">
					<CurrentWeather
						data={current_weather_data}
						city={forecast_weather_data.city}
					/>
					<ForecastWeather data={forecast_weather_data.list} />
				</div>
			</div>
		</>
	);
}
