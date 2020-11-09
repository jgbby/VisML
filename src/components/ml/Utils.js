function getRandom(min, max) {
    /**
     * @param min
     * @param height
     * @return value
     */
    return Math.random() * (max - min) + min;
}

const map = (value, a1, a2, b1, b2) => (value - a1) * (b2 - b1) / (a2 - a1) + b1;