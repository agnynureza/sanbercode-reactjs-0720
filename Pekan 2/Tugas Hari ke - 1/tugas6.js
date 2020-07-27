//soal 1 
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
let obj = {
    'Nama': arrayDaftarPeserta[0],
    'Jenis Kelamin': arrayDaftarPeserta[1],
    'Hobi': arrayDaftarPeserta[2],
    'Tahun Lahir': arrayDaftarPeserta[3]
}

console.log(obj)


//soal 2
let buah = [{
    'nama': 'strawberry',
    'warna': 'merah',
    'ada bijinya': 'tidak',
    'harga': 9000
}, {
    'nama': 'jeruk',
    'warna': 'oranye',
    'ada bijinya': 'ada',
    'harga': 8000
}, {
    'nama': 'Semangka',
    'warna': ' Hijau & Merah',
    'ada bijinya': 'ada',
    'harga': 10000
}, {
    'nama': 'Pisang',
    'warna': 'Kuning',
    'ada bijinya': 'tidak',
    'harga': 5000
}]

console.log(buah[0])

//soal 3

var dataFilm = []

function addFilm(film){
    dataFilm.push(film)
    return dataFilm
}

let film = {
    'nama': 'james bond',
    'durasi': '2 jam',
    'genre': 'action',
    'tahun': 2010
}

console.log(addFilm(film))

//soal 4
class Animal {
    constructor(name){
        this.legs = 4
        this.cold_blooded = false 
        this.name = name
    }
}

class Frog extends Animal{
    constructor(name){
        super(name)
    }

    jump(){
        console.log("hop hop")
    }
}

class Ape extends Animal{
    constructor(name){
        super(name)
    }

    yell(){
        console.log("Auooo")
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

//soal 5 
class Clock {
    constructor({template}) {
        this.template = template
        this.timer
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        
        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    start(){
        this.timer = setInterval(this.render.bind(this), 1000);
    }

    stop(){
        clearInterval(timer);
    }
}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();