import React from "react";
import PetCard from "./PetCard";
import LandingInfoCard from "./LandingInfoCard";

export default function PetCardsContainer({ pets , setSelectedPet }) {
    return (
        <div className="flex flex-row flex-wrap justify-center h-full">
            {pets.map((pet, index) => (
                <div key={index} onClick={() => setSelectedPet(index)}>
                    <PetCard pet={pet} />
                </div>
            ))}
            {pets.length === 0 &&
                <div className="flex flex-col mt-8 justify-start items-center h-full">
                    <LandingInfoCard />
                </div>
            }
        </div>
    )
}