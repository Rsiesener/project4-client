import React from 'react'
import { Link } from 'react-router-dom'
import ShowFolders from '../Folder-Components/ShowFolders'

const FileContainer = ({ user }) => {
  return (
    <>
      <div>
        <Link to='folders/create/'>
          <button>New Folder</button>
        </Link>
        <Link to='create-file/'>
          <button>New File</button>
        </Link>
      </div>
      <div>
        <ShowFolders user={user} />
      </div>
    </>
  )
}

export default FileContainer
