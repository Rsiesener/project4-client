import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { indexFolders } from '../api/Folder'

const ShowFolders = ({ user }) => {
  const [folders, setFolders] = useState([])

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await indexFolders(user)
        setFolders(res.data.folders)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  if (folders.length === 0) {
    return <Link to='create-folder/'><button>New Folder</button></Link>
  } else {
    const foldersList = folders.map((folder) => (
      <li key={folder._id}>
        <Link to={`folders/${folder._id}`}>{folder.folder_name}</Link>
      </li>
    ))

    return (
      <div>
        <ul>{foldersList}</ul>
      </div>
    )
  }
}

export default ShowFolders
