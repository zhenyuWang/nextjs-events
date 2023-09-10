import { useRouter } from 'next/router'
import { getEventById } from '@/dummy-data'
import classes from './eventId.module.css'
import Alert from '@/components/ui/Alert'
import Button from '@/components/ui/Button'
import IconDate from '@/components/icons/Date'
import IconAddress from '@/components/icons/Address'
import { getHumanReadableDate } from '@/utils'

export default function EventDetailPage() {
  const router = useRouter()
  const id = router.query.eventId
  const event = getEventById(id)

  if (!event) {
    return (
      <>
        <Alert>No event found!</Alert>
        <div className='t-center font-size-14'>
          <Button link='/events'>show all events</Button>
        </div>
      </>
    )
  }
  const humanReadableDate = getHumanReadableDate(event.date)
  return (
    <>
      <div className={classes.banner}>{event.title}</div>
      <div className={classes.content}>
        <div className={classes['img-box']}>
          <img src={`/${event.image}`} alt={event.title} />
        </div>
        <div className={classes['info-content']}>
          <IconDate color='rgb(58, 190, 159)' />
          <br />
          <time>{humanReadableDate}</time>
          <br />
          <IconAddress className={classes['icon-address']} color='rgb(58, 190, 159)' />
          <br />
          <address className={classes.address}>{event.location.replace(', ', '\n')}</address>
        </div>
      </div>
      <div className={classes.description}>{event.description}</div>
    </>
  )
}
