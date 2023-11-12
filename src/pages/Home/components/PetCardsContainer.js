import React from "react";
import PetCard from "./PetCard";

export default function PetCardsContainer({ pets , setSelectedPet }) {
    return (
        <div className="flex flex-row flex-wrap justify-center h-full">
            {pets.map((pet, index) => (
                <div key={index} onClick={() => setSelectedPet(index)}>
                    <PetCard pet={pet} />
                </div>
            ))}
        </div>
    )
}