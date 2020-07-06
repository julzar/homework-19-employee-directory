import React from 'react'


export const Employee = ({ employee }) => { return (
    <tr>
      <td>
        {employee.name.first}
      </td>
      <td>
        {employee.name.last}
      </td>
      <td>
        {employee.phone}
      </td>
      <td>
        {employee.email}
      </td>
    </tr>
)}