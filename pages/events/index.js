import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { getAllEvents } from '@/helpers/api-utils'
import { useRouter } from 'next/router'
import Head from 'next/head'
import EventSearch from '@/components/Events/EventSearch'
import EventList from '@/components/Events/EventList'

export default function AllEventsPage(props) {
  const [events, setEvents] = useState(props.events)
  const { data, error, isLoading } = useSWR('http://114.115.235.59/dummy-data.json', fetch)
  useEffect(() => {
    async function getEvents() {
      if (data) {
        try {
          const {events} = await data.json()
          setEvents(events)
        }catch(err) {
          console.log(err)
        }
      }
    }
    getEvents()
  }, [data])
  const router = useRouter()
  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`)
  }
  
  if (error) {
    return <p className='t-center font-size-14'>Failed to load</p>
  }
  if (isLoading) {
    return <p className='t-center font-size-14'>Loading...</p>
  }
  if (!events || events.length === 0) {
    return <p className='t-center font-size-14'>No events found</p>
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()
  return { props: { events } }
}
