//Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter 
//berupa array yang berisi string. 
//Function akan me-return array multidimensi dimana array tersebut 
//berisikan kategori/kelompok array yang dikumpulkan sesuai dengan 
//abjad depannya. Abjad harus berurut dari a-z (jika ada). 
//Untuk kasus ini, anggap saja semua text lowercase.
//Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
//maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
//Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

//1. Buat tampungan array multidimensi yg kosong.
//2. buat var a = 0.
//3. sort animals nya biar ayam dan anoa di alphabet pertama
//4. masukan binatang pertama yaitu anoa ke tampungan.
//5. buat looping untuk 
//6. bikin if kondisi kalau huruf pertama animals(animals[i[0]]) 
//outputnya adalah a,a,c,k,k sama dengan huruf pertama 
//tampung yaitu anua berarti 'a'

//7. else 


function groupAnimals(animals) {
    var tampung = [[]];
    var count = 0;
    animals.sort();

    tampung[0].push(animals[0]);
    //console.log(tampung)
    for (var i=1; i < animals.length; i++) {
        //console.log(animals[i] + ' ' + tampung[count][0])
        if (animals[i][0] === tampung[count][0][0]) {
            tampung[count].push(animals[i])
            //console.log(tampung)
        } else {
            count++;
            tampung[count] = [animals[i]]
            //console.log(tampung)
        }


    } return tampung;


}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]