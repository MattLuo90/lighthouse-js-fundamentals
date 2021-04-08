
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
];
function chooseStations(stations){
  const goodStations = []
  for (let station of stations){
    const capacity = station[1]
    const typeOfBuilding = station[2]
    if(capacity >= 20 && typeOfBuilding === 'school' || typeOfBuilding === 'community centre'){
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));