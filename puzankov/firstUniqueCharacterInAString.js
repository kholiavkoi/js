let classPoints = [100, 40, 34, 57, 29, 72, 57, 88]
let myPoint = 75


function betterThanAverage(classPoints, yourPoints) {
    let avarage = 0;
    for (let i = 0; i < classPoints.length; i++) {
        avarage += classPoints[i]
    }
    return avarage/classPoints.length < yourPoints
}


console.log(betterThanAverage(classPoints, myPoint))