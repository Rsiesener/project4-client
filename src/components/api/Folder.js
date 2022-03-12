import apiUrls from '../../apiConfig'
import axios from 'axios'

export const indexFolders = (user) => {
  return axios.get(apiUrls + '/folders/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showFolder = (id, user) => {
  return axios.get(`${apiUrls}/folders/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const deleteFolder = (id, user) => {
  return axios.delete(`${apiUrls}/folders/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const updateFolder = (folder, id, user) => {
  return axios.patch(
    `${apiUrls}/folders/${id}/`,
    { folder },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const createFolder = (folder, user) => {
  return axios.post(
    `${apiUrls}/folders/`,
    { folder },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}
