import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { deleteFolder, showFolder } from '../api/Folder'

const Folder = ({ user, msgAlert }) => {
  const [folder, setFolder] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showFolder(id, user)
        setFolder(res.data.folder)
      } catch (error) {
        msgAlert({
          heading: 'Folder failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])
  console.log(folder)
  const handleDeleteClick = async () => {
    try {
      await deleteFolder(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete folder',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (deleted) {
    return <Navigate to='/home/' />
  } else {
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{folder.folder_name}</h3>
          <Button variant='danger' onClick={handleDeleteClick}>
            Delete Folder
          </Button>
          <Link to={`/folders/${id}/edit/`}>
            <Button variant='primary' type='submit'>
              Update Folder
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Folder
