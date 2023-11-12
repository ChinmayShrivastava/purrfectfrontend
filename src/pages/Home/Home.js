import React from "react";
import { useState } from "react";
import QueryBar from "./components/QueryBar";
import PetCardsContainer from "./components/PetCardsContainer";
import PetOverlay from "./components/PetOverlay";

export default function Home() {

    const [pets, setPets] = useState([])
    const [selectedPet, setSelectedPet] = useState(null)

    return (
        <>
            <div className="w-full h-full">
                <QueryBar
                setPets={setPets}
                />
                <PetCardsContainer
                pets={pets}
                setSelectedPet={setSelectedPet}
                />
                { selectedPet !== null &&
                <div className="fixed z-10 inset-0 overflow-y-auto">
                <PetOverlay
                pet={pets[selectedPet]}
                setSelectedPet={setSelectedPet}
                />
                </div>}
            </div>
        </>
    )
}