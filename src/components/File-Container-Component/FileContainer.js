import React from 'react'
import { Link } from 'react-router-dom'

const FileContainer = () => {
  return (
    <div>
      <Link to='create-folder'>
        <button>New Folder</button>
      </Link>
      <Link to='create-file'>
        <button>New File</button>
      </Link>
    </div>
  )
}

export default FileContainer
