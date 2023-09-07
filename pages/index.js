import { getFeaturedEvents } from '@/dummy-data'
import EventList from '@/components/Events/EventList'

export default function HomePage() {
  const events = getFeaturedEvents()
  return (
    <>
      <h1>home page</h1>
      <EventList events={events} />
    </>
  )
}
