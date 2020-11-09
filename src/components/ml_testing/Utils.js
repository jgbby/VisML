function getRandomArbitrary(min, max) {
    /**
     * @param min
     * @param height
     * @return value
     */
    return Math.random() * (max - min) + min;
}

function f(x){
    /**
     * @param x
     * @return y
     */
    return -0.2 * x + 0.5;
}

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;


function generateDataPoint(width, height, factor){
/**
 * @param width
 * @param height
 * @return [inputs, label] where inputs = [x, y, bias=1]
 */
    
    let x = getRandomArbitrary(-1, 1) * factor; 
    let y = getRandomArbitrary(-1, 1) * factor; 
    let y2 = f(x);
    let label = y > f(x) ? 1 : -1;
    return [[x, y], label];
}



function generateMultipleDataPoints(width, height, quantity){
    /**
     * @param width
     * @param height
     * @return [rows_of_inputs, labels]
     */

    let inputRows = [];
    let labels = [];
    for (let i=0; i < quantity; i++){
        let dataPoint = generateDataPoint(width, height);
        let inputs = dataPoint[0];
        let label = dataPoint[1];
        inputRows.push(inputs);
        labels.push(label);
    }
    return [inputRows, labels];
}

function processData(data){
    let inputs = data[0];
    let labels = data[1];
}