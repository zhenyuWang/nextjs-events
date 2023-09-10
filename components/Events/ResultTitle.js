import classes from './ResultTitle.module.css'
import Button from '@/components/ui/Button'

export default function ResultTitle({ title }) {
  return (
    <div className={classes.container}>
      <time className={classes.date}>{title}</time>
      <div className='t-center font-size-14'>
        <Button link='/events'>show all events</Button>
      </div>
    </div>
  )
}
