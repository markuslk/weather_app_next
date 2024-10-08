import { City, OpenWeatherData } from "../lib/types";
import { convertToDate } from "../lib/dateUtils";
import Clock from "./Clock";
import WeatherIcon from "./WeatherIcon";

interface CurrentWeatherProps {
	data: OpenWeatherData;
	city: City;
}

export default function CurrentWeather({ data, city }: CurrentWeatherProps) {
	const initial = new Date();

	return (
		<>
			<div className="px-6 py-8 flex flex-col w-full min-w-80 max-w-lg rounded-xl gap-6 text-center text-gray-300 border border-gray-600 border-opacity-60 bg-zinc-950">
				{/* Date & Time */}
				<div className="flex flex-row justify-between font-semibold text-lg">
					<p>{convertToDate(city.timezone, data.dt, "long")}</p>
					<Clock
						initial={initial}
						timezone={city.timezone}
					/>
				</div>
				{/* Location */}
				<div>
					<p className="font-light tracking-wider text-gray-400">{city.name}</p>
				</div>
				{/* Degrees & Feels like? */}
				<div className="flex flex-col gap-2">
					<div className="text-7xl font-medium">{Math.round(data.main.temp)}&deg;</div>
					<div className="text-sm tracking-wider font-light text-gray-500">Feels like {Math.round(data.main.feels_like)}&deg;</div>
				</div>
				{/* Conditions, high and low */}
				<div className="flex flex-col gap-4 items-center">
					{/* Icon */}
					<WeatherIcon weatherCode={data.weather[0].id} />
					<div className="font-light">{data.weather[0].main}</div>
					<div className="font-extralight text-gray-500 flex gap-2">
						<span>H: {Math.round(data.main.temp_max)}&deg;</span>
						<span>L: {Math.round(data.main.temp_min)}&deg;</span>
					</div>
				</div>
			</div>
		</>
	);
}
