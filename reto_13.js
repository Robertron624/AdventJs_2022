function getFilesToBackup(lastBackup, changes) {

    let myObject = {};

    let result = [];

    for(let change of changes){
      if(change[1] != lastBackup && result.indexOf(change[0]) == -1){
        result.push(change[0]);
      }
    }

    return result.sort((a, b) => a -b);
  
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