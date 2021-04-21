handleNumbers = () => {
    // "1 2 3 4 5"
    let listNumbers = document.getElementById('list-numbers').value.trim();
    if (listNumbers == '' ) {
      alert('Please enter the number');
      return
    }
  
    let arrNumbers = listNumbers.split(' ');//chuyển qua mảng
    // ['1', '2', '3']
    let minNumber = '';
    let averagepositivenumbers = 0;
    let firstnegativenumber = 0;
  
    let sortascending = 0;
  
    // convert new array
    newArrayNumbers = [];
    for (x of arrNumbers) {
        newArrayNumbers.push(parseInt(x));
    }
  // [1, 2,3]
    //  min number
    minNumber = Math.min(...newArrayNumbers); // spread

  
    // // total positive numbers
    // for (x of newArrayNumbers) {
    //   if (x > 0) {
    //     totalPositiveNumbers += x;
    //   }
    // }
  
    // first-negative-number
    for (x of newArrayNumbers) {
      if (x < 0) {
        firstnegativenumber = x;
        break;
      }
    }
  
    // sort-ascending
    // sortascending.sort(function(a, b){return a-b});
    
    
  
    document.getElementById('min-number').value = minNumber;
    // document.getElementById('total-positive-numbers').value = totalPositiveNumbers;
    document.getElementById('first-negative-number').value = firstnegativenumber;
    // document.getElementById('sort-ascending').value = sortascending;
  }