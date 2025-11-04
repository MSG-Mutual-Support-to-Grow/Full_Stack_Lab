function updateStyle() {
    var div = document.getElementById("myDiv");
  
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var fontSize = document.getElementById("fontSize").value;
    var boxWidth = document.getElementById("boxWidth").value;
    var boxHeight = document.getElementById("boxHeight").value;
    var borderRadius = document.getElementById("borderRadius").value;
    var opacity = document.getElementById("opacity").value;
  
    if (bgColor) div.style.backgroundColor = bgColor;
    if (textColor) div.style.color = textColor;
    if (fontSize) div.style.fontSize = fontSize + "px";
    if (boxWidth) div.style.width = boxWidth + "px";
    if (boxHeight) div.style.height = boxHeight + "px";
    if (borderRadius) div.style.borderRadius = borderRadius + "px";
    if (opacity) div.style.opacity = opacity;
  }
  