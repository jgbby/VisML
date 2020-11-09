class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    px(factor) { return map(this.x, -1 * factor, 1 * factor, 0, canvas.width); }
    py(factor) { return map(this.y, -1 * factor, 1 * factor, canvas.height, 0); }
    format() { return [this.x, this.y] }

}