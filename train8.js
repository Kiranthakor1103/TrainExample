function calculateTrainRounds(list, maxCapacity) {
    let rounds = [];
    let currentRound = [];
    let currentRoundPeople = 0;
    let emptySeats = [];
  

    for (let i = 0; i < list.length; i++) {
        let group = list[i];

        // If the group size is greater than maxCapacity, split it into two parts
        if (group > maxCapacity) {
            // Split into two parts such that neither part is smaller than 2
            let firstPart = Math.min(maxCapacity, group - 2);
            let secondPart = group - firstPart;

            rounds.push([firstPart]);
            emptySeats.push(maxCapacity - firstPart);

            group = secondPart; // Handle the remaining part of the group
        }

        // Add the remaining group to the current round
        if (group > 0) {
            if (currentRoundPeople + group > maxCapacity) {
                rounds.push(currentRound);
                emptySeats.push(maxCapacity - currentRoundPeople);
                currentRound = [group];
                currentRoundPeople = group;
            } else {
                currentRound.push(group);
                currentRoundPeople += group;
            }
        }
    }

    // Push the final round if there's any leftover
    if (currentRound.length > 0) {
        rounds.push(currentRound);
        emptySeats.push(maxCapacity - currentRoundPeople);
    }

    console.log("Groups in each round:", rounds);
    console.log("Empty seats in each round:", emptySeats);
    console.log("Total train rounds:", rounds.length);
   
}

let list = [3, 5, 7, 2, 3, 9, 1, 2, 12, 8, 3, 4, 1, 1, 9, 10]; // Groups of people
let maxCapacity = 8; // Maximum capacity per round
calculateTrainRounds(list, maxCapacity);
