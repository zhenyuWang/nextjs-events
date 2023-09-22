import { getEventById, getFeaturedEvents } from '@/helpers/api-utils'
import classes from './eventId.module.css'
// import Alert from '@/components/ui/Alert'
// import Button from '@/components/ui/Button'
import Head from 'next/head'
import IconDate from '@/components/icons/Date'
import IconAddress from '@/components/icons/Address'
import { getHumanReadableDate } from '@/utils'

export default function EventDetailPage({event}) {
  if (!event) {
    return (
      <>
        {/* <Alert>No event found!</Alert>
        <div className='t-center font-size-14'>
          <Button link='/events'>show all events</Button>
        </div> */}
        <div className='t-center font-size-14'>
          Loading...
        </div>
      </>
    )
  }
  const humanReadableDate = getHumanReadableDate(event.date)
  return (
    <>
      <Head>
        <title>{ event.title }</title>
        <meta name='description' content={event.description} />
      </Head>
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

export async function getStaticProps(context) {
  const { eventId } = context.params
  const event = await getEventById(eventId)
  return {
    props: {
      event,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))
  return {
    paths,
    fallback: true,
  }
}
