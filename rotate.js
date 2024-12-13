const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
let rotateX = 360;
let rotateY = 360;
const rotationValue = 360;
let rotations = [
    {transform: `rotate3d(1,0,0, 0deg) rotate3d(0,1,0, 0deg)`},
    {transform: `rotate3d(1,0,0, 360deg) rotate3d(0,1,0, 360deg)`}
];
let rotationTiming = {
    duration: 10000,
    iterations: Infinity
};
let animation = cube.animate(rotations, rotationTiming);

const handleMouseDown = () => {
    animation.cancel();
    window.addEventListener("mousemove", handleMouseMove);
}

const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
    rotateY = (mouseX / window.innerHeight - 0.5) * rotationValue;
    rotations = [
        {transform: `rotate3d(1,0,0, ${rotateX-360}deg) rotate3d(0,1,0, ${rotateY-360}deg)`},
        {transform: `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)` }
    ];
    cube.animate(rotations, rotationTiming);
}

const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    rotations = [
        {transform: `rotate3d(1,0,0, ${rotateX-360}deg) rotate3d(0,1,0, ${rotateY-360}deg)`},
        {transform: `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)` }
    ];
    cube.animate(rotations, rotationTiming);
}

window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mouseup", handleMouseUp);