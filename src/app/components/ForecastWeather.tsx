import { ForecastData } from "../lib/types";
import WeatherIcon from "./WeatherIcon";

interface ForecastWeatherProps {
	data: ForecastData[];
}

export default function ForecastWeather({ data }: ForecastWeatherProps) {
	function getHoursFromDate(dt: number): number {
		const date = new Date(dt * 1000);
		return date.getHours();
	}
	return (
		<>
			<div className="forecast-scrollbar p-6 flex justify-between w-full max-w-lg min-w-80 rounded-xl gap-16 text-center text-gray-300 border border-gray-600 border-opacity-60 bg-zinc-950 overflow-x-scroll">
				{data.slice(0, 30).map((item: ForecastData, i) => (
					<div
						key={item.dt}
						className="flex h-full flex-col justify-between gap-6">
						<div className="flex justify-center text-sm">{getHoursFromDate(item.dt)}</div>
						<div className="flex items-center justify-center h-7 w-7">
							<WeatherIcon weatherCode={item.weather[0].id} />
						</div>
						<div className="flex justify-center">{Math.round(item.main.temp)}&deg;</div>
					</div>
				))}
			</div>
		</>
	);
}
