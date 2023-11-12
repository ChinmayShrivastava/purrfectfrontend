export default function LandingInfoCard() {
    return (
        <div className="rounded-lg border-gray-300 border-[2px] p-8 w-3/5 h-2/5 flex flex-col justify-center items-center align-middle">
            <div className="text-2xl font-bold text-gray-500">
                Welcome to Fuzzylive!
            </div>
            <div className="text-xl text-gray-400">
                This is a semantic image search experiment that uses a machine learning model to find similar images. Use dog descriptions to search for similar dogs! Currently, the capabilities are limited to 1161 dogs from shelters within 25 mile radius of Providence, RI, USA.
            </div>
        </div>
    )
}