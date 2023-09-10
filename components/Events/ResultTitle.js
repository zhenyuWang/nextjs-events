import Button from '@/components/ui/Button'

export default function ResultTitle({ month, year }) {
  return (
    <div className='mt-20'>
      <h2 className='t-center'>
        Events in {month} {year}
      </h2>
      <div className='mt-10 t-center font-size-14'>
        <Button link='/events'>show all events</Button>
      </div>
    </div>
  )
}
