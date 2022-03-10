import apiUrls from '../../apiConfig'
import axios from 'axios'

// export const indexFolders = (user) => {
//   return axios.get(apiUrls + '/movies/', {
//     headers: {
//       Authorization: `Token ${user.token}`
//     }
//   })
// }

// export const showFolder = (id, user) => {
//   return axios.get(`${apiUrls}/movies/${id}/`, {
//     headers: {
//       Authorization: `Token ${user.token}`
//     }
//   })
// }

// export const deleteFolder = (id, user) => {
//   return axios.delete(`${apiUrls}/movies/${id}`, {
//     headers: {
//       Authorization: `Token ${user.token}`
//     }
//   })
// }

// export const updateFolder = (id, title, director, user) => {
//   return axios.patch(
//     `${apiUrls}/movies/${id}`,
//     { movie: { title, director } },
//     {
//       headers: {
//         Authorization: `Token ${user.token}`
//       }
//     }
//   )
// }

export const createFolder = (title, director, user) => {
  return axios.post(
    `${apiUrls}/folders/`,
    { movie: { title, director } },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}