import Alert from '@/components/ui/Alert'
import Button from '@/components/ui/Button'

export default function Custom404Page() {
  return (
    <>
      <Alert>404 - Page Not Found</Alert>
      <div className='t-center font-size-14'>
        <Button link='/events'>back home</Button>
      </div>
    </>
  )
}
