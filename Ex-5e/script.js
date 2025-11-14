// Very simple EMI calculator
function calculate(){
  var P = parseFloat(document.getElementById('principal').value) || 0;
  var annual = parseFloat(document.getElementById('annualRate').value) || 0;
  var years = parseFloat(document.getElementById('years').value) || 0;

  var N = Math.round(years * 12); // months
  var R = annual / 12 / 100;      // monthly rate

  var emi = 0;
  if (N <= 0 || P <= 0) {
    emi = 0;
  } else if (R === 0) {
    emi = P / N; // no interest
  } else {
    var x = Math.pow(1 + R, N);
    emi = (P * R * x) / (x - 1);
  }

  var total = emi * N;
  var interest = total - P;

  document.getElementById('emi').textContent = '₹ ' + emi.toFixed(2);
  document.getElementById('total').textContent = '₹ ' + total.toFixed(2);
  document.getElementById('interest').textContent = '₹ ' + interest.toFixed(2);
}

document.addEventListener('DOMContentLoaded', calculate);
