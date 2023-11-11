import APIURL from '../config';
import getCSRFToken from './getcsrf';

export const getMatchesAPI = async (query) => {
    if (query === '' || query === undefined) {
        alert('Please enter a query');
        return false;
    }
    const csrftoken = await getCSRFToken();
    const response = await fetch(`${APIURL}/embeddings/get_pet_matches/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
            // 'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify({ 
            query: query
        }),
        credentials: 'include',
        mode: 'cors'
    });
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return false;
    }
}

export default getMatchesAPI;