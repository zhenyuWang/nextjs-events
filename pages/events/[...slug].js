import {useRouter} from 'next/router'
import { getFilteredEvents } from '@/dummy-data'
import Button from '@/components/ui/Button'
import ResultTitle from '@/components/Events/ResultTitle'
import EventList from '@/components/Events/EventList'
import Alert from '@/components/ui/Alert'
import { getHumanReadableDate } from '@/utils'

export default function FilteredEventsPage() {
  const router = useRouter()
  const filterData = router.query?.slug || [0, 0]
  const numYear = filterData[0] * 1
  const numMonth = filterData[1] * 1
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <>
        <Alert>Invalid filter. Please adjust your values!</Alert>
        <div className='t-center font-size-14'>
          <Button link='/events'>show all events</Button>
        </div>
      </>
    )
  }
  const events = getFilteredEvents({ year: numYear, month: numMonth })
  return events.length ? (
    <>
      <ResultTitle title={`Events in ${getHumanReadableDate(`2021/${filterData[1]}/1`).split(' ')[0]} ${numYear}`} />
      <EventList events={events} />
    </>
  ) : (
    <>
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
