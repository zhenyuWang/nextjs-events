import classes from './Button.module.css'
import Link from 'next/link'

export default function Button({ link, children }) {
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  )
}
