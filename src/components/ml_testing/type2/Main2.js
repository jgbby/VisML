// Initialize canvas settings
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext(contextId="2d");



var brain = new Perceptron(3);

let dataPoints = [];
let count = 0;
let progressionRate = 5;
canvas.addEventListener("click", event => {

    // Clear the board
    c.clearRect(0, 0, canvas.width, canvas.height);



    // Initial line
    let x1_actual = 0;
    let y1_actual = f(x1_actual);
    let x2_actual = canvas.width;
    let y2_actual = f(x2_actual);
    drawLine(x1_actual, y1_actual, x2_actual, y2_actual, "red");




    // Display all trained points visual effect
    dataPoints.forEach(point => {

        let pointInputs = point[0];
        let x = pointInputs[0];
        let y = pointInputs[1];
        let prediction = brain.guess(pointInputs);
        let color = (prediction == 1) ? "red" : "blue";
        drawPoint(x, y, 5, color);
    })


    // Display new line
    let x1_predict = 0;
    let y1_predict = brain.guessY(x1_predict);
    let x2_predict = canvas.width;
    let y2_predict = brain.guessY(x2_predict);
    drawLine(x1_predict, y1_predict, x2_predict, y2_predict, "blue");






    // Training
    for (let nextInterval = count + progressionRate; count < nextInterval; count++){
        
        // Train perceptron
        let dataPoint = generateDataPoint(canvas.width, canvas.height);
        let inputs = dataPoint[0];
        let label = dataPoint[1];
        brain.train(inputs, label);
        
        
        // Remember we trained this dataPoint
        dataPoints.push(dataPoint);
    }
    console.log("Trained " + dataPoints.length + " points");
    count += progressionRate; // Increments by progressionRate
})