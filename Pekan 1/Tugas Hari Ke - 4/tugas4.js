//soal 1 
console.log('looping pertama')
let i = 0 
while(i < 20){
    i += 2
    console.log(i + ' I love coding')
}
console.log('looping kedua')
while(i > 2){
    i -= 2
    console.log(i + ' I love coding')
}

console.log('\n','\n')

//soal 2 
for(let i = 1 ; i <= 20 ; i++){
    if(i%3 == 0 && i%2 == 1){
        console.log(i + ' I love coding')
    }else if(i%2 == 0){
        console.log(i + ' Berkualitas')
    }else if(i%2 == 1){
        console.log(i + ' Santai')
    }
}

console.log('\n','\n')

//soal 3
let n = 7
for(let i = 0; i < n; i++){
    let tag = ''
    for(let j = 0; j <= i; j++){
        tag += '#'
    }
    console.log(tag)
}

console.log('\n','\n')

//soal 4 
var kalimat="saya sangat senang belajar javascript"
console.log(kalimat.split(' '))

console.log('\n','\n')

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort((a,b) => a > b)

for(let v of daftarBuah){
    console.log(v)
} 