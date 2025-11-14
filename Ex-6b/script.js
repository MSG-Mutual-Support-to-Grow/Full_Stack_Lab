let car, interval, position = 0;

window.onload = function(){
  car = document.getElementById("car");
};

function startCar(){
  clearInterval(interval);
  interval = setInterval(moveCar, 5);
  document.getElementById("dangerBox").style.display = "none";
}

function stopCar(){
  clearInterval(interval);
}

function resetCar(){
  clearInterval(interval);
  position = 0;
  car.style.left = "0px";
  document.getElementById("dangerBox").style.display = "none";
}

function moveCar(){
  if (position < window.innerWidth - 150){
    position += 5;
    car.style.left = position + "px";
  } else {
    clearInterval(interval);
    document.getElementById("dangerBox").style.display = "block";
  }
}
