const widget = new TimekitBooking()
  
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

client.getEntries({'sys.id': expertId}).then((response) => {
  const e = response.items[0].fields

  expertWidget.innerHTML=
  `
  <div class="row card hit">
    <div class="col-md-4">
        <div class="hit-image">
          <img style="height: 5em" src="${e.image.fields.file.url}" alt="${e.name}">
          <h2 class="hit-name">${e.name}</h2>
          <h2 class="hit-price">$<span id="priceTag">${e.price}</span></h2>
        </div>
    </div>
    <div class="col-md-8 start-xs">
        <div class="hit-content">
          <h4 class="hit-price">projects: ${e.projects} </h4>
          <p class="hit-description">${e.description}</p>
        </div>
    </div>
  </div>
  `

  const timekitConf = e.timekit

  widget.init({
      targetEl: '#bookingjs',
      app:      'nostalgia-4592',
      apiToken: timekitConf.apiToken,
      email:    timekitConf.email,
      calendar: timekitConf.calendar,
      name:     'Jane Doe',
      timekitFindTime: {
        length: '3 hours',
        start: 'tomorrow',
        filters: {
          and: [
            { specific_time: { start: '8', end: '17' }}
          ]
        }
      },
      fullCalendar: {
        defaultView: 'month'
      }
    })    

})
.catch((error) => {
  console.log(`\nError occurred while fetching Entries for Expert:`)
  console.error(error)
})
