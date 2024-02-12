export default function Loading() {
	return (
		<>
			<div className="p-8 md:p-32 flex justify-center flex-col items-center gap-12">
				<div className="relative mt-2 flex items-center">
					<div className="block h-10 w-64 bg-gray-700 animate-pulse rounded-md" />
				</div>
				<div className="flex flex-col gap-4 md:flex-row w-full justify-center">
					<div className="p-6 flex flex-col w-full min-w-80 md:w-1/2 h-96 border rounded-md border-opacity-60 border-gray-500 animate-pulse">
						<div className="flex flex-row justify-between mb-2">
							<div className="w-10 h-6 animate-pulse bg-gray-600 rounded-md" />
							<div className="w-16 h-7 animate-pulse bg-gray-600 rounded-md" />
						</div>
						<div>
							<div className="bg-gray-600 animate-pulse h-6 w-20 rounded-md mx-auto" />
						</div>
						<div className="flex flex-col gap-2 mx-auto my-4">
							<div className="bg-gray-600 animate-pulse w-28 h-20 rounded-md" />
							<div className="bg-gray-600 animate-pulse w-28 h-5 rounded-md" />
						</div>
						<div className="flex flex-col gap-4 items-center">
							<div className="bg-gray-600 animate-pulse h-9 w-9 rounded-md" />
							<div className="bg-gray-600 animate-pulse h-5 w-12 rounded-md" />
							<div className="flex gap-2">
								<div className="bg-gray-600 animate-pulse h-6 w-11 rounded-md" />
								<div className="bg-gray-600 animate-pulse h-6 w-11 rounded-md" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full max-w-lg min-w-80 mx-auto rounded-md animate-pu h-40 bg-gray-600"></div>
		</>
	);
}
