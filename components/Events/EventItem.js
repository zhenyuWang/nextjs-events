import classes from './EventItem.module.css'
import Button from '../ui/Button'
import IconDate from '../icons/Date'
import IconAddress from '../icons/Address'

export default function EventItem({ id, title, description, location, date, image }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
      <img className={classes.banner} src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.date}>
          <IconDate />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <IconAddress />
          <address className={classes.address}>{location.replace(', ', '\n')}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  )
}
