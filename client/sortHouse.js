const sortHouse = (answers) => {
  // For now, we're all Gryffindors.
  // Replace this with your own logic to really sort things out!
  let count = 0;
  let house;
  let sort = answers.reduce((houseCount,house)=>{
  	if(houseCount[house]===undefined) {
  	  houseCount[house] = 1
  	} else {houseCount[house]+=1}
  	return houseCount
  },{})
  for(var key in sort){
  	if(sort[key]>count){
  	  house=key
  	}
  }
  return house

}

export default sortHouse
