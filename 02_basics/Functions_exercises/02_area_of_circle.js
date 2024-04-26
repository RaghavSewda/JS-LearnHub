
// circle.radius = 2;
// console.log(circle.area); read-only

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
};

circle.radius = 10;
console.log(circle.area);