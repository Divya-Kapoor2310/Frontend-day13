const isConfig = {
    appId: 'N675AF3ESI',
    apiKey: '14b65c352deb9a505131d3d00cba2f6c',
    indexName: 'experts',
    urlSync: false
  }
  
isConfig.searchParameters = {
  filters: `technologies.name:"${selectedTechnology}"`
}

const search = instantsearch(isConfig)

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
)

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    },
    cssClasses: {
      root: 'row',
      item: 'col-md-4'
    }
  })
)

search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#price-refinement',
    attributeName: 'price',
    tooltips: {
      format: function(rawValue) {
        return '$' + Math.round(rawValue).toLocaleString();
      }
    }
  })
)

search.start()
