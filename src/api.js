import axios from 'axios'

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  })

  instance.interceptors.request.use((config) => {
    return config
  })

  return instance
}

const api = createInstance()

export default api
