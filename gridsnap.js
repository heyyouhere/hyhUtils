const MAP = {
    x : 100,
    y : 100,
}

const squares_amount = {
    x : 3,
    y : 3,
}

let sqaure_size = {
    x : MAP.x / squares_amount.x,
    y : MAP.y / squares_amount.y,
}

let snap_points = [];
for (let i = sqaure_size.x/2; i < MAP.x; i+= sqaure_size.x/2){
    for (let j = sqaure_size.y/2; j < MAP.y; j+= sqaure_size.y/2){
        if (j % sqaure_size.y != 0 && i % sqaure_size.x != 0){
            snap_points.push([i,j])
        } 
    }
}
function assert_eq(value_a, value_b){
    if (value_a != value_b){
        console.error("ERROR: Assertion failed:", value_a, value_b)
    }
}

function snapToGrid(posx, posy){
    let distance = Number.MAX_VALUE;
    let snapPoint;
    snap_points.forEach((point) =>{
        let current_distance = Math.abs(point[0] - posx) + Math.abs(point[1] - posy)
        if (current_distance < distance){
            distance = current_distance;
            snapPoint = [point[0], point[1]] 
        }
    });
    return snapPoint;
}

console.log(snapToGrid(10, 10), [10, 10]); 
console.log(snapToGrid(60, 43), [60, 43]); 
console.log(snapToGrid(50, 50), [50, 50]);
console.log(snapToGrid(50, 56), [50, 56]);
console.log(snapToGrid(88, 93), [88, 93]);
