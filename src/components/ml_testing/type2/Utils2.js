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
    return 500;
}


function generateDataPoint(width, height){
/**
 * @param width
 * @param height
 * @return [inputs, label] where inputs = [x, y, bias=1]
 */
    
    let x = getRandomArbitrary(0, width);
    let y = getRandomArbitrary(0, height);
    let y2 = f(x);
    let label = y > f(x) ? 1 : -1;
    return [[x, y, 1], label];
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

function processData(){

}