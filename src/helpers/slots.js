export const getSlots = () => {
  const myHeaders = new Headers({
    ApiKey: 'NzSvsHgWN80FXBUJ'
  })
  const slotUrl =
    'https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/20170612'
  return fetch(slotUrl, { headers: myHeaders })
}

export const saveSlot = data => {
  const myHeaders = new Headers({
    ApiKey: 'NzSvsHgWN80FXBUJ',
    'Content-Type': 'application/json'
  })
  const slotUrl =
    'https://draliatest.azurewebsites.net/api/availability/BookSlot'
  return fetch(slotUrl, {
    method: 'POST',
    headers: myHeaders,
    body: data
  })
}
