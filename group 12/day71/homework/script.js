// Prompt for the color of the traffic light
const trafficLightColor = prompt("Enter the color of the traffic light (red, yellow, green):").toLowerCase();

// Determine action based on the traffic light color
if (trafficLightColor === "red") {
    console.log("Stop!");
} else if (trafficLightColor === "yellow") {
    console.log("Prepare to stop.");
} else if (trafficLightColor === "green") {
    console.log("Go!");
} else {
    console.log("Invalid color. Please enter red, yellow, or green.");
}
