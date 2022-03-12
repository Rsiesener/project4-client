import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createFolder } from '../api/Folder'
const CreateFolder = ({ user, msgAlert, setRequestData }) => {
  const [folder, setFolder] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()
    const newFolder = { folder_name: folder }
    try {
      const res = await createFolder(newFolder, user)
      setCreatedId(res.data.folder.id)
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
    return <Navigate to='/home/' />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Folder Name:
          <input
            type='text'
            name='folder_name'
            value={folder.folder_name}
            onChange={event => setFolder(event.target.value)}
          />
          <button>Create Folder</button>
        </label>
      </form>
    </div>
  )
}

export default CreateFolder
