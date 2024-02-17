import { apiInstance } from './apiInstance';

export const postRequestAsync = async (url, params = {}) => {
    try {
        const response = await apiInstance.post(url, params);

        if (response.status === 201 || response.status === 200) {
            return response.data;
        } else {
            console.error('Unexpected status code:', response.status);
        }
    } catch (error) {
        console.error('Error making POST request:', error);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
            return error.response.data;
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
        }

        return error;
    }
};

export const getRequestAsync = async (url) => {
    try {
        const response = await apiInstance.get(url);

        if (response.status === 200) {
            return response.data;
        } else {
            console.error('Unexpected status code:', response.status);
        }
    } catch (error) {
        console.error('Error making GET request:', error);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
        }

        return error;
    }
};

export const deleteRequestAsync = async (url) => {
    try {
        const response = await apiInstance.delete(url);

        if (response.status === 200 || response.status === 204) {
            // 200 OK or 204 No Content status indicates a successful DELETE
            return response.data;
        } else {
            console.error('Unexpected status code:', response.status);
        }
    } catch (error) {
        console.error('Error making DELETE request:', error);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
            return error.response;
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
        }

        return error;
    }
};