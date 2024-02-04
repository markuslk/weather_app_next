"use client";

import { getGeoLocation } from "@/actions/getGeoLocation";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchBar() {
	const router = useRouter();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const city = formData.get("city") as string;
		event.currentTarget.reset();
		const res = await getGeoLocation({ city });

		const newLat = res[0].lat;
		const newLon = res[0].lon;
		router.push(`/search?lat=${newLat}&lon=${newLon}`);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label
				htmlFor="search"
				className="sr-only">
				Search for city
			</label>
			<div className="relative mt-2 flex items-center">
				<input
					type="text"
					name="city"
					placeholder="Search for city..."
					className="block w-full rounded-md border-0 py-2 pr-14 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 bg-transparent sm:text-sm sm:leading-6"
				/>
				<div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
					<kbd className="inline-flex items-center rounded border border-gray-600 px-1.5 font-sans text-xs text-gray-400">⌘K</kbd>
				</div>
			</div>
		</form>
	);
}
