import BASE_URL from "./url";

class Http {
    static instance = new Http();

    //It gets all the badges.
    get_all = async () => {
        try {
            let request = await fetch(`${BASE_URL}/all_posts/`);
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http get error', err);
            throw Error(err);
        }
    };

    //It makes a request for a single badge.
    get = async post_id => { 
        try {
            let request = await fetch(`${BASE_URL}/_id:${post_id}/`);
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http get method err', err);
            throw Error(err);
        }
    };

    //Method to create a new badge.
    post = async emergen => { 
        try {
            let request = await fetch(`${BASE_URL}/new_post/`, {
                method: 'POST',
                body: JSON.stringify(emergen),
            });
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http post method err', err);
            throw Error(err);
        }
    };

    //Method to edit a badge.
    put = async (post_id, body) => { 
        try {
            let request = await fetch(`${BASE_URL}/_id:${post_id}/`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http put method err', err);
            throw Error(err);
        }
    };

    //Method to get rid of a badge.
    remove = async post_id => { 
        try {
            let request = await fetch(`${BASE_URL}/_id:${post_id}/`, {
                method: 'DELETE',
            });
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http delete method err', err);
            throw Error(err);
        }
    };
}

export default Http;