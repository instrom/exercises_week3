
// Diberikan sebuah function targetTerdekat(arr) yang menerima 
// satu parameter berupa array yang terdiri dari karakter. F
// unction akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' 
// yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'],
//  maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' 
// sama sekali, function akan me-return nilai 0.



function targetTerdekat(arr) {
    var arrX = [];
    var arr0 = [];
    for (var i=0;i < arr.length; i++) {
        if(arr[i]==='o'){
            arr0.push(i)
        } else if (arr[i]==='x'){
            arrX.push(i)
        }
    }

    if(arrX===[]){
        return 0;
      } else {
        var arrF = [];
        for(var j = 0; j<arr0.length; j++){
          for(var k = 0; k<arrX.length; k++){
            var kurang = Math.abs(arrX[k]-arr0[j]);
            arrF.push(kurang);
          }
        }
        return arrF.sort(function(a,b){return a-b})[0];
      }
    }

    // you can only write your code here!
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2