class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vec(x, y);
    }

    minus(vector) {
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        return new Vec(x, y);
    }

    get length() {
        return Math.hypot(this.x, this.y);
    }
}

console.log(`The length of the line between point1(2,4) and a new point that adds (1,2) to point1 is ${new Vec(2, 4).plus(new Vec(1, 2)).length}`);
console.log(`The length of the line between point1(2,4) and a new point that subtracts (1,2) from point1 is ${new Vec(2, 4).minus(new Vec(1, 2)).length}`);
