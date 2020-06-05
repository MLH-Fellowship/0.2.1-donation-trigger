// Libraries
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../graphql/queries'

const User = ({ children }) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem('user_id')

      // Fetching all users from our database
      const userData = await API.graphql(graphqlOperation(listUsers))

      // Filtering users based on the twitter id and setting is as the data
      setUserData(
        userData.data.listUsers.items.filter(
          (user) => user.twitterId === userId
        )
      )

      console.log(userData.data.listUsers.items)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <React.Fragment>{userData ? children(userData) : children}</React.Fragment>
  )
}

export default User
