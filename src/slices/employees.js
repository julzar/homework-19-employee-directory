import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  employees: [],
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    getEmployees: state => {
      state.loading = true
    },
    getEmployeesSuccess: (state, { payload }) => {
      state.employees = payload.results
      state.loading = false
      state.hasErrors = false
    },
    getEmployeesFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getEmployees, getEmployeesSuccess, getEmployeesFailure } = employeesSlice.actions
export const employeesSelector = state => state.employees
export default employeesSlice.reducer

export function fetchEmployees() {
  return async dispatch => {
    dispatch(getEmployees())

    try {
      const response = await fetch('https://randomuser.me/api/?results=200&nat=us')
      const data = await response.json()

      dispatch(getEmployeesSuccess(data))
    } catch (error) {
      dispatch(getEmployeesFailure())
    }
  }
}
