// import apiUrl from '../apiConfig'
// import axios from 'axios'

// export const indexMovies = (user) => {
//   return axios.get(apiUrl + '/movies/', {
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// export const showMovie = (id, user) => {
//   return axios.get(`${apiUrl}/movies/${id}/`, {
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// export const deleteMovie = (id, user) => {
//   return axios.delete(`${apiUrl}/movies/${id}`, {
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// export const updateMovie = (id, title, director, user) => {
//   return axios.patch(
//     `${apiUrl}/movies/${id}`,
//     { movie: { title, director } },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     }
//   )
// }

// export const createMovie = (title, director, user) => {
//   return axios.post(
//     `${apiUrl}/movies`,
//     { movie: { title, director } },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     }
//   )
// }
