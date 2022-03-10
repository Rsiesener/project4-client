import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createFolder } from '../api/Folder'
const CreateFolder = ({ user, msgAlert }) => {
  const [folder, setFolder] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createFolder(folder, user)
      setCreatedId(res.data.folder._id)
      msgAlert({
        heading: 'Folder Created',
        message: `Created ${folder} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed To Create Folder',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    return <Navigate to={`/folders/${createdId}`} />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Create Folder</button>
        <label>
          Folder Name:
          <input
            type='text'
            name='folder_name'
            value={folder.folder_name}
            onChange={event => setFolder(event.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default CreateFolder
