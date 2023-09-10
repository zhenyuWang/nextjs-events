import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import EventSearch from '@/components/Events/EventSearch'
import EventList from '@/components/Events/EventList'
import { Fragment } from 'react'

export default function AllEventsPage() {
  const events = getAllEvents()
  const router = useRouter()
  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  )
}
