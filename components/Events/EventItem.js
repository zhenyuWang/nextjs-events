import classes from './EventItem.module.css'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import IconDate from '@/components/icons/Date'
import IconAddress from '@/components/icons/Address'

export default function EventItem({ id, title, location, date, image }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
      <div className={classes['img-box']}>
        {/* https://nextjs.org/docs/pages/api-reference/components/image */}
        <Image
          src={`/${image}`}
          alt={title}
          width={300}
          height={140}
          priority={false}
        />
      </div>
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
