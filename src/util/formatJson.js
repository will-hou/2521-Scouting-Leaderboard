import toTitleCase from '../util/utils.js'
import { configuration } from '../util/configuration.js'


function formatJson(json_data) {
    var scout_count = {}
    // The name of the metric corresponding to the scout's name
    const metric_name = configuration.metricName
    var metric_key = null
  
    // Find the key corresponding to the "Scout Name" metric
    Object.entries(json_data.teams[Object.keys(json_data.teams)[0]][0].metrics).forEach(obj => {
      if(obj[1].name.trim() === metric_name) {
        metric_key = obj[0]
      }
    }) 
    
    for (var team in json_data.teams) {
      // Loop through each team 
      json_data.teams[team].forEach((obj) => {
        // Don't include scouts that didn't change the name of the scout
        if (obj.name != null && (obj.name).length < 5 && Object.keys(obj.metrics).length > 0) {
        // Make sure the scouter name field isn't empty
          if(obj.metrics[metric_key].value != null) {
            var scouterName = (obj.metrics[metric_key].value).trim().toUpperCase()
            // Count the number of times a scouter scouted
            if (scout_count[scouterName] == null) {
              scout_count[scouterName] = 1
            } else {
              scout_count[scouterName] += 1
            }
          }
        }
      })
    }

    var sorted = []
    for (var scoutName in scout_count) {
      sorted.push([toTitleCase(scoutName), scout_count[scoutName]])
    }
  
    sorted = sorted.sort(function(a, b) {
      return b[1] - a[1];
    })
  
    return sorted
}

export default formatJson