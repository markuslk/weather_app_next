export default function SearchBar() {
	return (
		<div>
			<label
				htmlFor="search"
				className="sr-only">
				Search for city
			</label>
			<div className="relative mt-2 flex items-center">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search for city..."
					className="block w-full rounded-md border-0 py-2 pr-14 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 bg-transparent sm:text-sm sm:leading-6"
				/>
				<div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
					<kbd className="inline-flex items-center rounded border border-gray-600 px-1.5 font-sans text-xs text-gray-400">⌘K</kbd>
				</div>
			</div>
		</div>
	);
}
