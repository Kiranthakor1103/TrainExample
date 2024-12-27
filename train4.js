function calculateTrainRounds(list, maxCapacity) {
    let rounds = []; 
    let currentRound = []; 
    let currentRoundPeople = 0;
    let emptySeats = [];
    let leftBehind = [];
  
    for (let i = 0; i < list.length; i++) {
  
      let group = list[i];
  
      // While the group size greater than  max capacity, split it
      while (group > maxCapacity) {
        rounds.push([maxCapacity]);
        emptySeats.push(0); 
        group -= maxCapacity; 
  
        if (group === 1) {
          // remeanig group size is 1
          leftBehind.push(group);
          group = 0; 
        }
      }
  
       // Now the remaining group fits into the current round
      if (currentRoundPeople + group > maxCapacity) {
        rounds.push(currentRound); 
        emptySeats.push(maxCapacity - currentRoundPeople);
        currentRound = [group]; // Start a new round with the current group
        currentRoundPeople = group; 
      } else {
        currentRound.push(group); 
        currentRoundPeople += group; 
      }
    }
  
    // Push the final round if there's any leftover in current round 
    if (currentRound.length > 0) {
      rounds.push(currentRound);
      emptySeats.push(maxCapacity - currentRoundPeople); 
    }
  
    
    console.log("Groups in each round:", rounds);
    console.log("Empty seats in each round:", emptySeats);
    console.log("Total train rounds:", rounds.length);
    console.log("Reameanig of split group people :", leftBehind);
  }
  
  
  let list = [3, 5, 7, 2, 3, 9, 1, 2, 9, 8, 3, 4, 1, 1, 9,10]; // Groups of people
  let maxCapacity = 8; // Maximum capacity per round
  calculateTrainRounds(list, maxCapacity);