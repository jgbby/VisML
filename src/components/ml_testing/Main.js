// Initialize canvas settings
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext(contextId="2d");


var factor = 30;
var brain = new Perceptron(2);

let dataPoints = [];
let count = 0;
let progressionRate = 50;
canvas.addEventListener("click", event => {

    // Clear the board
    c.clearRect(0, 0, canvas.width, canvas.height);



    // Initial line
    let p1_actual = new Point(-1 * factor, f(-1 * factor));
    let p2_actual = new Point(1 * factor, f(1 * factor));
    drawLine(p1_actual.px(factor), p1_actual.py(factor), p2_actual.px(factor), p2_actual.py(factor), "red");




    // Display all trained points visual effect
    dataPoints.forEach(point => {

        let pointInputs = point[0];
        let label = point[1];
        let x = pointInputs[0];
        let y = pointInputs[1];
        let prediction = brain.predict(pointInputs);

        let color;
        if (prediction != label) color = "green";
        else if (prediction == 1) color = "red";
        else color = "blue";
        //color = (label > 0) ? "red" : "blue";

        p = new Point(x, y);
        drawPoint(p.px(factor), p.py(factor), 5, color, true);
    })


    // Display new line
    let p1_predict = new Point(-1 * factor, brain.predictY(-1 * factor));
    let p2_predict = new Point(1 * factor, brain.predictY(1 * factor)); 
    drawLine(p1_predict.px(factor), p1_predict.py(factor), p2_predict.px(factor), p2_predict.py(factor), "blue");



/*     console.log(brain.getLineSepEquation());
    console.log(brain.weights, brain.bias); */



    // Training
    for (let nextInterval = count + progressionRate; count < nextInterval; count++){
        
        // Train perceptron
        let dataPoint = generateDataPoint(canvas.width, canvas.height, factor);
        let inputs = dataPoint[0];
        let label = dataPoint[1];
        brain.train(inputs, label);
        
        
        // Remember we trained this dataPoint
        dataPoints.push(dataPoint);
    }
    console.log("Trained " + dataPoints.length + " points");
    count += progressionRate; // Increments by progressionRate
})