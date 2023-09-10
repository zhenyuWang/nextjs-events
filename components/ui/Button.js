import classes from './Button.module.css'
import Link from 'next/link'

export default function Button({ link, onCLick, children }) {
  return link ? (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={onCLick}>
      {children}
    </button>
  )
}
