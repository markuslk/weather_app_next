export default function CurrentWeather() {
	return (
		<>
			<div className="border border-gray-600 p-6 flex flex-col w-full min-w-80 md:w-1/2 rounded-lg gap-6 text-center text-gray-300">
				{/* Date & Time */}
				<div className="flex flex-row justify-between font-semibold text-lg">
					<p>Friday</p>
					<p className="tabular-nums">10:58:11</p>
				</div>
				{/* Location */}
				<div>
					<p className="font-light tracking-wider text-gray-400">Nõo, Estonia</p>
				</div>
				{/* Degrees & Feels like? */}
				<div className="flex flex-col gap-2">
					<div className="text-7xl">8&deg;</div>
					<div className="text-sm tracking-wider font-light text-gray-500">
						Feels like <span className="text-base">9&deg;</span>
					</div>
				</div>
				{/* Conditions, high and low */}
				<div className="flex flex-col gap-1">
					{/* Icon? */}
					<p className="font-light">Snowy</p>
					<p className="font-extralight text-gray-500">H: 10&deg; L: 5&deg;</p>
				</div>
			</div>
		</>
	);
}
