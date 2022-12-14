function getFilesToBackup(lastBackup, changes) {

    let filteredArray = changes.filter((change) => change[1] > lastBackup)

    let idsOnly = filteredArray.map((change) => change[0])
    let sortedIds = idsOnly.sort((a, b) => a - b)
    let flatenedArray = [...new Set(sortedIds)];

    return flatenedArray;
  
}


const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup, changes))