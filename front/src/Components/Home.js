import React from 'react'
import ListTodos from './ListTodo'

function Home() {

const handleSignout = () => {
  localStorage.removeItem('token')
  window.location = '/'
}

  return (
    <div className="container">
        <ListTodos />
        <p>
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleSignout}
           style={{position:"relative", top: "41vh",  right:"0px" }} >Sign out</button>
        </p>
    </div>
  )
}

export default Home
