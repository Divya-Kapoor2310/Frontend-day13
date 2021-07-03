const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  })
    
  const techCards = document.querySelector('#cards');

  function fetchTechnologies () {
    return client.getEntries({
        content_type: "technology"
      })
    .then((response) => response.items)
    .catch((error) => {
      console.log(`\nError occurred while fetching Entries for Technology:`)
      console.error(error)
    })
  }

  fetchTechnologies().then((technologies) => {
    techCards.innerHTML += technologies.map(technology => 
      `<div class="col-md-4">
        <div class="card">
          <a href="${technology.fields.link}"><img src="${technology.fields.logo.fields.file.url}"/></a>
          <h2><a href="/experts.html?t=${technology.fields.name}">${technology.fields.name}</a></h2>
          <p>${technology.fields.description}</p>
        </div>
      </div>`).join('')
  })
