import React from 'react'
import Navbar from '../component/Navbar'
import Books from '../component/Books'
import Users from './Users'
import AddBooks from './AddBooks'
import AddUser from './AddUser'
import Home from '../component/Home'
import ReadBook from '../component/ReadBook'

import { Routes, Route } from 'react-router-dom'

const AdminPortal = () => {
  return (
    <div>
      {/* <h1>Welcome To Admin Portal</h1> */}
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Books />} path="/books" />
        <Route element={<Users />} path="/users" />
        <Route element={<AddUser />} path="/addusers" />
        <Route element={<AddBooks />} path="/addbooks" />
        <Route element={<ReadBook />} path="/books/:id" />
      </Routes>


    </div>
  )
}

export default AdminPortal