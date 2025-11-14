const rates = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.5 };

function id(n){ return document.getElementById(n); }

function convert(){
  const from = id('from-currency').value;
  const to = id('to-currency').value;
  const amount = parseFloat(id('amount').value);
  const out = id('result');
  if (!isFinite(amount) || amount < 0){ out.textContent = 'Enter a valid amount'; return; }
  const converted = (amount / rates[from]) * rates[to];
  out.textContent = amount + ' ' + from + ' = ' + converted.toFixed(2) + ' ' + to;
}

function swapCurrencies(){
  const a = id('from-currency'), b = id('to-currency');
  [a.value, b.value] = [b.value, a.value];
  convert();
}

window.addEventListener('DOMContentLoaded', convert);
