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
      rounds.push([maxCapacity]); // Add a full round of max capacity
      emptySeats.push(0); // No empty seats in a full round
      group -= maxCapacity; // Decrease the group size by max capacity

      if (group === 1) {
        // remeanig group size is 1
        leftBehind.push(group);
        group = 0; // Prevent further processing for this group
      }
    }

    // Now the remaining group fits into the current round
    if (currentRoundPeople + group > maxCapacity) {
      rounds.push(currentRound); // Add the current round to rounds
      emptySeats.push(maxCapacity - currentRoundPeople); // Calculate empty seats for the current round
      currentRound = [group]; // Start a new round with the current group
      currentRoundPeople = group; // Set current round people count to the current group size
    } else {
      currentRound.push(group); // Add the group to the current round
      currentRoundPeople += group; // Increase the current round people count
    }
  }

  // Push the final round if there's any leftover in current round people
  if (currentRound.length > 0) {
    rounds.push(currentRound);
    emptySeats.push(maxCapacity - currentRoundPeople); // Empty seats in the last round
  }

  
  console.log("Groups in each round:", rounds);
  console.log("Empty seats in each round:", emptySeats);
  console.log("Total train rounds:", rounds.length);
  console.log("Reameanig of split group people :", leftBehind);
}


let list = [3, 5, 7, 2, 3, 9, 1, 2, 9, 8, 3, 4, 1, 1, 9,10]; // Groups of people
let maxCapacity = 8; // Maximum capacity per round
calculateTrainRounds(list, maxCapacity);
