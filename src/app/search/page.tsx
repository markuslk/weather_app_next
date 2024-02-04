import SearchBar from "../components/SearchBar";
import { getForecastData } from "@/actions/getForecastData";
import { getWeatherData } from "@/actions/getWeatherData";
import { notFound } from "next/navigation";
import CurrentWeather from "../components/CurrentWeather";
import { OpenWeatherData, TenDayForecastData } from "../lib/types";

interface searchParamsProps {
	lat: string;
	lon: string;
}

export default async function SearchPage({ searchParams }: { searchParams: searchParamsProps }) {
	const { lat, lon } = searchParams;

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
