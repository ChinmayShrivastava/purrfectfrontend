import React, { useState } from "react";
import getMatchesAPI from "../../../functions/queryfunctions";
// import getCSRFToken from "../../../functions/getcsrf";

export default function QueryBar( { setPets } ) {

    const [query, setQuery] = useState('');
    const [inputFocused, setInputFocused] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        if (loading) {
            return (e) => {
                e.preventDefault();
            }
        }
        if (query === '' || query === undefined) {
            return (e) => {
                e.preventDefault();
                alert('Please enter a query');
            }
        }
        return async (e) => {
            e.preventDefault();
            setLoading(true);
            getMatchesAPI(query).then((matches) => {
                setPets(matches);
                console.log(matches)
                setQuery('');
                setLoading(false);
            }
            ).catch((err) => {
                console.log(err);
                setLoading(false);
            }
            );
        }
    }

    const handleFocus = () => {
        setInputFocused(true);
    }

    const handleBlur = () => {
        setInputFocused(false);
    }

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <form className={`flex flex-row w-full border-[2px] rounded-2xl p-2 ${inputFocused ? 'border-gray-500' : 'border-gray-300'}`} onSubmit={handleSubmit()}>
            <input className="bg-transparent w-full focus:outline-none p-[3px]" value={query} maxLength={75} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="describe your favorite pet doggo"/>
            { loading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div> :
            <button type="submit" className="bg-blue-500 rounded-md px-2 py-1 text-white font-bold">Search</button> }
        </form>
    )
}