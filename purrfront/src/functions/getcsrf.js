import APIURL from "../config";

// get csrf token from the browser cookie
export const getCSRFToken = async () => {
    const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/);
    if (csrfToken) {
        return csrfToken[1];
    }
    else {
        // call API to get csrf token
        const response = await fetch(`${APIURL}/embeddings/get_csrf/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        });
        if (response.status === 200) {
            const data = await response.json();
            return data.csrfToken;
        }
        else {
            return '';
        }
    }
}

export default getCSRFToken;