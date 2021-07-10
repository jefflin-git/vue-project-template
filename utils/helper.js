import axios from 'axios'
import Swal from 'sweetalert2'
import store from '../src/store'

// const baseURL = 'https://forum-express-api.herokuapp.com/api'
const baseURL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
  next()
}

export { axiosInstance as apiHelper, Toast, authorizeIsAdmin }