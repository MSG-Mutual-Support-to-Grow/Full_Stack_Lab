// Very small jQuery script: validate percentages sum to 100 and calculate allocations
$(function(){
  $('#evaluate').on('click', function(){
    var amount = parseFloat($('#amount').val());
    var rent = parseFloat($('#rent').val());
    var access = parseFloat($('#access').val());
    var emergency = parseFloat($('#emergency').val());
    var saving = parseFloat($('#saving').val());

    var sum = rent + access + emergency + saving;
    if (Math.abs(sum - 100) > 0.0001) {
      alert('Percentages must add up to 100 (current: ' + sum + ')');
      return;
    }

    $('#out-rent').text((amount * rent / 100).toFixed(2));
    $('#out-access').text((amount * access / 100).toFixed(2));
    $('#out-emergency').text((amount * emergency / 100).toFixed(2));
    $('#out-saving').text((amount * saving / 100).toFixed(2));
  });
});
