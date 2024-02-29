function calculateNumber(type, a, b) {
  let total = 0;
  switch (type) {
    case 'SUM':
      total = Math.round(a) + Math.round(b);
      break;
    case 'SUBTRACT':
      total = Math.round(a) - Math.round(b);
      break;
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        total = "Error";
      } else {
        total = Math.round(a) / Math.round(b);
      }
      break;
  }
  return total;
}

module.exports = calculateNumber;
