import axios from 'axios'

export function fetchVariations () {
    // write code to do ajax call with axios to get variations from /api/variations
	return axios.get(`http://127.0.0.1:8000/api/variations`)
}
