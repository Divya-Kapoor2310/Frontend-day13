client.getEntries({ content_type: "expert" })
  .then((response) => {

    const denormalized = [].concat(...response.items.map(item => {
      let arr = []
      
      item.fields.contentfulID = item.sys.id
      delete item.sys

      item.fields.technologies.forEach(tech => {
        const i = JSON.parse(JSON.stringify(item))
        i.fields.technologies = tech.fields
        i.fields.image = item.fields.image.fields
        arr.push(i.fields)
      })
      return arr
    }))
    console.log(JSON.stringify(denormalized))
  })
  .catch((error) => {
    console.log(`\nError occurred while fetching Entries for Expert:`)
    console.error(error)
  })
