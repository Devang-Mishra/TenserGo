"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const page = () => {
 
 const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response);
        const currentUserId=response.data.userid;
        const currentUser=response.data.users.filter((user)=> user.id===currentUserId)
        const User=currentUser[0].profile;
        console.log(User)
        setUserData(User);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts

  return (
    <>
      <h2>User Information</h2>
          
          <h2>User Data</h2>
          {userData && 
            <>
            <p>UserId: {userData.id}</p>
            <p>DisplayName: {userData.displayName}</p>
            {/* Other Info */}
            </>
          }
      </>
  )
}

export default page




