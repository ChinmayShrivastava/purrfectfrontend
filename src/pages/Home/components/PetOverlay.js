import React from 'react'

export default function PetOverlay({ pet , setSelectedPet }) {

    return (
        <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                            onClick={() => setSelectedPet(null)}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                                Close
                            </button>
                        </div>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div className="mt-2">
                                        {/* image grid */}
                                        {pet.images.map((image, index) => {
                                            return (
                                                <img
                                                key={index}
                                                className="inline-block h-48 rounded-full ring-2 ring-white p-2"
                                                src={image.url}
                                                alt="pet"
                                                />
                                            )
                                        }
                                        )}
                                        <div className="text-[2rem] font-bold text-gray-900">
                                            {pet.name}
                                        </div>
                                        { pet.breed &&
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            {pet.breed.name}
                                            </p>
                                        </div>
                                        }
                                        { pet.shelter &&
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            <b>Shelter Name:</b> {pet.shelter.name}
                                            </p>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}