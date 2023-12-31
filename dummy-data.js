const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Everyone can learn to code! We are going to learn the basics of programming in JavaScript.',
    location: 'Somestreet 25, 9527 San Somewhereo',
    date: '2021-05-12',
    image: 'images/programming.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for everyone',
    description: 'We know: Networking is not fun for everyone. That is why we have created this event for you!',
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-10',
    image: 'images/networking-everyone.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2021-05-30',
    image: 'images/networking-extroverts.jpg',
    isFeatured: true,
  },
]

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })

  return filteredEvents
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id)
}
