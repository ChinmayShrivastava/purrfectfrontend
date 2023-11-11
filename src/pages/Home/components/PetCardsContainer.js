import React from "react";
import PetCard from "./PetCard";

export default function PetCardsContainer({ pets }) {
    return (
        <div className="flex flex-row flex-wrap justify-center h-full">
            {pets.map((pet, index) => (
                <div key={index}>
                    <PetCard pet={pet} />
                </div>
            ))}
        </div>
    )
}