class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get factory() {
        return new PointFactory()
    }
}

class PointFactory {
    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta),
        )
    }
}

let p1 = Point.factory.newCartesianPoint(4, 5);
console.log(p1);

let p2 = Point.factory.newPolarPoint(4, 5);
console.log(p2);
