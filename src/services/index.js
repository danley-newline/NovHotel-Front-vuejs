import axios from 'axios'
const getUrl = "http://127.0.0.1:8000/api";
export default axios.create({
    baseURL: `${getUrl}`,
    
});
