import React from "react";

export default function PetCard( { pet } ) {
    return (
        <div className="flex flex-col items-center justify-center w-[300px] h-[300px] border-2 rounded-2xl p-2 m-2 cursor-pointer">
            <img className="h-[200px] rounded-full" src={pet.images[0].url} alt={pet.name}/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{pet.name}</h1>
                <h2 className="text-xl font-semibold">{pet.breed.name}</h2>
            </div>
        </div>
    )
}