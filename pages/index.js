import { getFeaturedEvents } from '@/dummy-data'
import ResultTitle from '@/components/Events/ResultTitle'
import EventList from '@/components/Events/EventList'

export default function HomePage() {
  const events = getFeaturedEvents()
  return (
    <>
      <ResultTitle title='Feature Events' />
      <EventList events={events} />
    </>
  )
}
