function angkaPalindrome(num) {
    
    for (var i=0; i < num; i ++) {
        num++;
        var numString = num.toString();
        var tampung = "";
        for (var j = numString.length - 1; j >= 0; j--) {
            tampung += numString[j];
        } if (numString === tampung) {
            return num
        }
    } 
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  