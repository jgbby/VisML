const drawPoint = (x, y, radius, color) => {
    c.strokeStyle = color;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.stroke();
}

const drawLine = (x1, y1, x2, y2, color) => {
    c.strokeStyle = color;
    c.beginPath();
    c.moveTo(x1, y1)
    c.lineTo(x2, y2);
    c.stroke();
}

const display = (points, mag, mode) => {
    points.forEach(point => {
        console.log(point[0], point[1])
        drawPoint(point[0] * mag, point[1] * mag, 5, mode);
    });
}