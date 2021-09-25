import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import authService from '../../services/auth.service'
import userService from '../../services/user.service'
import Card from '../../components/Card/Card'

import './index.css'

function Home() {
  // TODO create state for (users, setUsers), (error, setError), (loading, setLoading)
  // try to understand which initial values required
  const [users, setUsers] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (authService.isAuthorized()) {
      setLoading(true)

      userService
        .getUsers()
        .then((data) => {
          setUsers(data)
        })
        .catch((error) => {
          setError('Some error happened:', error)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setUsers([])
    }
  }, [authService.isAuthorized()])

  return (
    <Layout layoutClassName="home">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users.map((user) => (
        <Card {...user} />
      ))}
    </Layout>
  )
}

export default Home
