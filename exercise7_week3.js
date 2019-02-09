function hitungJumlahKata(kalimat) {
    var wordscount = kalimat.split(" ");
    return wordscount.length
    // you can only write your code here!
  }
  
  function hitungJumlahKata(kalimat) {
      var kalimatkosong = " ";
      var count = ""
      kalimat += kalimatkosong
      for (i=0; i < kalimat.length; i++) {
          if (kalimat[i] === kalimatkosong) {
              count++
          } 
      } return count
    // you can only write your code here!
  }

  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
