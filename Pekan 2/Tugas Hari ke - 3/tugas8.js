//soal 1
let luasLingkaran = (r) => {
    return Math.PI * Math.pow(r, 2)
}

const kelilingLingkaran = (r) => {
    return 2 * Math.PI * r
}

console.log(luasLingkaran(3))
console.log(kelilingLingkaran(3))

//soal 2
let addWord = () => {
    let kalimat = ''
    let w1 = 'saya',
        w2 = 'adalah',
        w3 = 'seorang',
        w4 = 'frontend',
        w5 = 'developer'
    return kalimat = `${w1} ${w2} ${w3} ${w4} ${w5}`
}

console.log(addWord())

//soal 3
class Book {
    constructor(name, totalPage, price){
        this.name = name
        this.total = totalPage
        this.price = price 
    }
}

class Komik extends Book{
    constructor(name, totalPage, price, isColorful){
        super(name,totalPage, price)
        this.isColorful = isColorful
    }

    get color(){
        return this.isColorful
    }
}

let dragonBall = new Komik("dragonBall", 100, 10000, true)
console.log(dragonBall.color)