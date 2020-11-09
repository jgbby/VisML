const getRandom = (min, max) => Math.random() * (max - min) + min;


class Perceptron {

    constructor(size) {
    /**
     * Initializes weights with random values for as many as 'size'
     */
        this.learning_rate = 0.001;
        this.weights = []
        for (let i=0; i < size; i++){
            this.weights.push(getRandom(-1, 1));
        }
        this.bias = getRandom(-1, 1);
    }

    predict = (inputs) => {
        /**
         * @param inputs
         * @return activation of dot product
         */
        let sum = this.bias;
        for (let i=0; i < this.weights.length; i++){
            sum += inputs[i] * this.weights[i];
        }
        return this.activate(sum);
    }


    activate = (sum) => {
        /**
         * @param dot product
         * @return activation
         */
        return (sum > 0) ? 1: -1;
    }

    train = (inputs, label) => {
        /**
         * @param inputs
         * @param labels
         * @return void
         */
        let prediction = this.predict(inputs);
        let error = label - prediction;
        for (let i=0; i < this.weights.length; i++){
            this.weights[i] += error * this.learning_rate * inputs[i];
        }
        this.bias += error * this.learning_rate;
    }

    getLineSepEquation = () => {
        /**
         * @param void
         * @return {slope, intercept}
         */
        let w0 = this.bias;
        let w1 = this.weights[0];
        let w2 = this.weights[1];
        let m = -(w0 / w2) / (w0 / w1);
        let b = -w0 / w2
        return {"slope": m, "intercept" : b}
    }

    predictY = (x) => {
        /**
         * @param x
         * @return predicted y
         */
        let equation = this.getLineSepEquation();
        let m = equation.slope;
        let b = equation.intercept;
        return (m * x) + b
    }

}
export default Perceptron;