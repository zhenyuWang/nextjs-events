import Link from 'next/link'

export default function EventItem({ id, title, description, location, date, image }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const exploreLink = `/events/${id}`
  return (
    <li>
      <img className='event-image' src={`/${image}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{location.replace(',', '\n')}</address>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}
