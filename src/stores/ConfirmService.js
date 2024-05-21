import axios from 'axios';

async function deleteSubscription(token) {
    try {
        const response = await axios.delete(`http://localhost:3000/api/subscriptions/${token}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function postSubscription(name, email) {
    try {
        const response = await axios.post('http://localhost:3000/api/subscriptions', {
            name,
            email,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default { deleteSubscription, postSubscription };