import axios from 'axios';

//doe een delete met token parameter naar de backend http://localhost:3000/api/subscriptions/:token

export default {
    async deleteSubscription(token) {
        try {
            const response = await axios.delete(`http://localhost:3000/api/subscriptions/${token}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};
