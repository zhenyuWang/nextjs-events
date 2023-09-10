import { useRef } from 'react'
import classes from './EventSearch.module.css'
import Button from '@/components/ui/Button'

export default function EventSearch({ onSearch }) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()
  const years = ['2021', '2022']
  const months = [
    {
      name: 'January',
      value: '1',
    },
    {
      name: 'February',
      value: '2',
    },
    {
      name: 'March',
      value: '3',
    },
    {
      name: 'April',
      value: '4',
    },
    {
      name: 'May',
      value: '5',
    },
    {
      name: 'June',
      value: '6',
    },
    {
      name: 'July',
      value: '7',
    },
    {
      name: 'August',
      value: '8',
    },
    {
      name: 'September',
      value: '9',
    },
    {
      name: 'October',
      value: '10',
    },
    {
      name: 'November',
      value: '11',
    },
    {
      name: 'December',
      value: '12',
    },
  ]
  function submitHandler(event) {
    event.preventDefault()
    onSearch(yearInputRef.current.value, monthInputRef.current.value)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label className={classes.label} htmlFor='year'>
            Year:
          </label>
          <select className={classes.select} id='year' ref={yearInputRef}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label className={classes.label} htmlFor='month'>
            Month:
          </label>
          <select className={classes.select} id='month' ref={monthInputRef}>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  )
}
