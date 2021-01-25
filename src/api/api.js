import data from './mockData';

export default function apiRequests() {
    return new Promise(function promise(resolve, reject) {
        const receivedData = typeof data === 'string' ? JSON.parse(data) : data;
        setTimeout(() => { resolve(receivedData) }, 2000);
    });
};