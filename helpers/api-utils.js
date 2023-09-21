export async function getAllEvents() {
  const response = await fetch('http://114.115.235.59/dummy-data.json')
  const { events } = await response.json()
  return events
}

export async function getFeaturedEvents() {
  const DUMMY_EVENTS = await getAllEvents()
  return DUMMY_EVENTS && DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter
  const DUMMY_EVENTS = await getAllEvents()
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })

  return filteredEvents
}

export async function getEventById(id) {
  const DUMMY_EVENTS = await getAllEvents()
  return DUMMY_EVENTS.find((event) => event.id === id)
}
