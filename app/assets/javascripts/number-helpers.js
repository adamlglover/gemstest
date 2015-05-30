function numberToCurrency(x) {
  return "$" + numberWithCommas(x);
}

function numberToPercentage(x) {
  if (x) {
    return parseFloat(x * 100).toFixed(2) + '%';
  }
}

function numberWithCommas(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
