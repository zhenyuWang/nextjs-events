import { getFeaturedEvents } from '@/helpers/api-utils'
// import { useState, useEffect } from 'react'
// import useSWR from 'swr'
import ResultTitle from '@/components/Events/ResultTitle'
import EventList from '@/components/Events/EventList'

export default function HomePage(props) {
  // const [events, setEvents] = useState(props.events)
  // const { data, error, isLoading } = useSWR('http://114.115.235.59/dummy-data.json', fetch)
  // useEffect(() => {
  //   async function getEvents() {
  //     if (data) {
  //       try {
  //         const {events} = await data.json()
  //         setEvents(events.filter((event) => event.isFeatured))
  //       }catch(err) {
  //         console.log(err)
  //       }
  //     }
  //   }
  //   getEvents()
  // }, [data])
  // if (error) {
  //   return <p>Failed to load</p>
  // }
  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  // if (!events || events.length === 0) {
  //   return <p>No events found</p>
  // }
  return (
    <>
      <ResultTitle title='Feature Events' />
      <EventList events={props.events} />
    </>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}
