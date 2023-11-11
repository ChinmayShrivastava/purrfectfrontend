import React from "react";
import { useState } from "react";
import QueryBar from "./components/QueryBar";
import PetCardsContainer from "./components/PetCardsContainer";

export default function Home() {

    const [pets, setPets] = useState([])

    return (
        <>
            <div className="w-full">
                <QueryBar
                setPets={setPets}
                />
                <PetCardsContainer
                pets={pets}
                />
            </div>
        </>
    )
}