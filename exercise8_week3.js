function pasanganTerbesar(num) {
    var angkaString = num.toString();
    var minNumber = 0
    var maxNumber = 0;

    for (i=0; i < angkaString.length; i++) {
        minNumber = angkaString[i] + angkaString[i+1];
        if (minNumber > maxNumber) {
        maxNumber = minNumber;
    }
    
  } return maxNumber
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99