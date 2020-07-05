import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchEmployees, employeesSelector } from '../slices/employees'

import { Employee } from '../components/Employee'

const EmployeesPage = () => {
  const dispatch = useDispatch()
  const { employees, loading, hasErrors } = useSelector(employeesSelector)

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  const renderEmployees = () => {
    if (loading) return <p>Loading employees...</p>
    if (hasErrors) return <p>Unable to display employees.</p>

    // console.log(employees.employees.results.map(employee => employee.name))

    return posts.map(post => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <div>
      {renderEmployees()}
    </div>
  )
}

export default EmployeesPage
