import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data'
import { Fragment } from 'react'
import Button from '@/components/ui/Button'
import ResultTitle from '@/components/Events/ResultTitle'
import EventList from '@/components/Events/EventList'
import { getHumanReadableDate } from '@/utils'

export default function FilteredEventsPage() {
  const router = useRouter()
  const filterData = router.query.slug
  if (!filterData) {
    return <p className='font-size-16 t-center'>Loading...</p>
  }
  const numYear = filterData[0] * 1
  const numMonth = filterData[1] * 1
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <p className='mt-20 t-center font-size-16'>Invalid filter. Please adjust your values!</p>
        <div className='mt-10 t-center font-size-14'>
          <Button link='/events'>show all events</Button>
        </div>
      </Fragment>
    )
  }
  const events = getFilteredEvents({ year: numYear, month: numMonth })
  return events.length ? (
    <Fragment>
      <ResultTitle month={getHumanReadableDate(`2021/${filterData[1]}/1`).split(' ')[0]} year={numYear} />
      <EventList events={events} />
    </Fragment>
  ) : (
    <Fragment>
      <div className='mt-20 t-center font-size-16'>No events found for the chosen filter!</div>
      <div className='mt-10 t-center font-size-14'>
        <Button link='/events'>show all events</Button>
      </div>
    </Fragment>
  )
}
