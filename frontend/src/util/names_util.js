import axios from 'axios'

export const fetchNames = (userIds) => {
  return axios.post('/api/users/getnames', { userIds });
}
