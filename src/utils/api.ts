import axios from 'axios';

export default axios.create({
	baseURL: 'http://139.162.147.107:3133/',
	headers: { 'Content-Type': 'application/json' },
});
