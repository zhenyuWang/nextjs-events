import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data'
import Head from 'next/head'
import Button from '@/components/ui/Button'
import ResultTitle from '@/components/Events/ResultTitle'
import EventList from '@/components/Events/EventList'
import Alert from '@/components/ui/Alert'
import { getHumanReadableDate } from '@/utils'

export default function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState()
  const router = useRouter()
  const filterData = router.query.slug
  useEffect(() => {
    if (!filterData) return
    const events = getFilteredEvents({ year: filterData[0] * 1, month: filterData[1] * 1 })
    setLoadedEvents(events)
  }, [filterData])
  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name='description'
        content='A list of filtered events.'></meta>
    </Head>
  )
  if (!loadedEvents || !filterData) {
    return (
      <>
        {pageHeadData}
        <div className='t-center font-size-14'>Loading...</div>
      </>
    )
  }
  const numYear = filterData[0] * 1
  const numMonth = filterData[1] * 1
  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name='description'
        content={`All Events for ${numMonth}/${numYear}`}
      />
    </Head>
  )
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <>
        {pageHeadData}
        <Alert>Invalid filter. Please adjust your values!</Alert>
        <div className='t-center font-size-14'>
          <Button link='/events'>show all events</Button>
        </div>
      </>
    )
  }
  return loadedEvents.length ? (
    <>
      {pageHeadData}
      <ResultTitle title={`Events in ${getHumanReadableDate(`2021/${filterData[1]}/1`).split(' ')[0]} ${numYear}`} />
      <EventList events={loadedEvents} />
    </>
  ) : (
    <>
      {pageHeadData}
      <Alert>No events found for the chosen filter!</Alert>
      <div className='t-center font-size-14'>
        <Button link='/events'>show all events</Button>
      </div>
    </>
  )
}

// export async function getServerSideProps({ params }) {
//   const filterData = params.slug
//   const numYear = filterData[0] * 1
//   const numMonth = filterData[1] * 1
//   if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//     return {
//       props: {hasError: true},
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     }
//   }
// }
