import { weatherIconMappings } from "../lib/iconMap";
import Image from "next/image";

interface WeatherIconProps {
	weatherCode: any;
}

export default function WeatherIcon({ weatherCode }: WeatherIconProps) {
	const iconNameKey = weatherCode;
	const iconName = weatherIconMappings[iconNameKey];

	return (
		<div className="relative invert h-9 w-9">
			<Image
				fill
				alt={weatherCode}
				src={`/icons/${iconName}.svg`}
				className="select-none"
			/>
		</div>
	);
}
