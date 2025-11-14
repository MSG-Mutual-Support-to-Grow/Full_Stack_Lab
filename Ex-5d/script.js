(function(){
  const prices = {
    chocolate: 500,
    vanilla: 450,
    redvelvet: 600,
    blackforest: 550
  };

  const images = {
    chocolate: 'https://via.placeholder.com/160?text=Chocolate+Cake',
    vanilla: 'https://via.placeholder.com/160?text=Vanilla+Cake',
    redvelvet: 'https://via.placeholder.com/160?text=Red+Velvet',
    blackforest: 'https://via.placeholder.com/160?text=Black+Forest'
  };

  window.update = function(){
    const cake = document.getElementById('cake').value;
    const qty = parseInt(document.getElementById('qty').value, 10) || 0;
    const price = prices[cake] || 0;
    const total = price * qty;

    // update total in Rupees, simple formatting
    document.getElementById('total').textContent = '₹ ' + total.toFixed(2);

    // update image
    const img = document.getElementById('cake-img');
    img.src = images[cake] || images['chocolate'];
  };

  // initial update
  document.addEventListener('DOMContentLoaded', update);
})();
