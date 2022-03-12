import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { updateFolder } from '../api/Folder'
const UpdateFolder = ({ user, msgAlert }) => {
  const [folder, setFolder] = useState('')
  const [createdId, setCreatedId] = useState(null)
  const { id } = useParams()

  const handleSubmit = async (event, id) => {
    event.preventDefault()
    const updatedFolder = { folder_name: folder }
    try {
      const res = await updateFolder(updatedFolder, id, user)
      setCreatedId(res.data.folder.id)
      msgAlert({
        heading: 'Folder Updated',
        message: `Updated ${folder} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed To Update Folder',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    return <Navigate to='/home/' />
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, id)}>
        <label>
          Folder Name:
          <input
            type='text'
            name='folder_name'
            value={folder.folder_name}
            onChange={(event) => setFolder(event.target.value)}
          />
          <button>Update Folder</button>
        </label>
      </form>
    </div>
  )
}

export default UpdateFolder
