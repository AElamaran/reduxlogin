import React from 'react'
import{useSelector} from 'react-redux'

const Profile = () => {
    const user = useSelector(state=>state.user.value)
    const theme = useSelector(state=>state.theme.value)
    if(!user.name){
        return
    }
  return (
<div style={{
        color: theme,
        border: '1px solid #ccc', // Adds a light gray border
        borderRadius: '8px', // Rounds the corners of the border
        padding: '20px', // Adds space inside the border
        margin: '20px', // Adds space outside the border
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow
        backgroundColor: '#f9f9f9' // Light background color
    }}>
        <h1 style={{ marginBottom: '10px' }}>Profile Info</h1>
        <h2 style={{ margin: '5px 0' }}>Name: {user.name}</h2>
        <h2 style={{ margin: '5px 0' }}>Age: {user.age}</h2>
        <h2 style={{ margin: '5px 0' }}>Email: {user.email}</h2>
    </div>
  )
}



export default Profile