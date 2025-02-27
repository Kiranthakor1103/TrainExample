const racks = (height, listOfDevices, newDevicesSizeReq) => {
    height = Number(height);
    newDevicesSizeReq = Number(newDevicesSizeReq);

    let occupiedPositions = new Array(height).fill(false);

    // Mark occupied positions
    listOfDevices.forEach(device => {
        for (let i = device.position; i < device.position + device.size; i++) {
            occupiedPositions[i] = true;
        }
    });

    let listPossiblePositions = [];

    // Helper function to check if a given position can fit the new device
    const canFit = (start) => {
        if (start + newDevicesSizeReq > height) return false; // Prevent overflow
        for (let j = 0; j < newDevicesSizeReq; j++) {
            if (occupiedPositions[start + j]) return false;
        }
        return true;
    };

    // Iterate through the entire rack to find all possible positions
    for (let i = 0; i <= height - newDevicesSizeReq; i++) {
        if (canFit(i)) {
            listPossiblePositions.push(i);
        }
    }

    console.log("Rack Height:", height);
    console.log("List of Devices:", listOfDevices);
    console.log("New Device Size Requirement:", newDevicesSizeReq);
    console.log("All Possible Positions for New Device:", listPossiblePositions);
};

// Example usage
const listOfDevices = [
    { id: 1, position: 10, size: 2 },
    { id: 2, position: 20, size: 2 },
    { id: 3, position: 30, size: 2 }
];

const height = 50;
const newDevicesSizeReq = 3;

racks(height, listOfDevices, newDevicesSizeReq);
