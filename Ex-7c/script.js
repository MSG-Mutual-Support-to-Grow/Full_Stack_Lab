$(function(){
  function calculateAge(){
    var d = parseInt($('#day').val());
    var m = parseInt($('#month').val());
    var y = parseInt($('#year').val());
    var birth = new Date(y, m - 1, d);
    var today = new Date();
    var years = today.getFullYear() - birth.getFullYear();
    var months = today.getMonth() - birth.getMonth();
    var days = today.getDate() - birth.getDate();
    if (days < 0){ months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0){ years--; months += 12; }
    $('#age-result').text(years + ' Years ' + months + ' Months ' + days + ' Days');
  }
  $('#find-age-btn').click(calculateAge);
  calculateAge();
});