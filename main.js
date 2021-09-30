// ambil element
const userPlace = document.getElementById('user');
const cartItems = document.getElementById('cart');
const skillsHolder = document.getElementById('skills');

// ES5
// var myName = "Fadil Malik";

// myName = "Muhamad Fadil Malik";
// console.log(myName);
// ------------------------------------------------
// var myPc = ['Asus', 'Lenovo', 'Dell'];

// for (var i = 0; i < myPc.length; i++) {
//     console.log(myPc[i]);
// }

// console.log(i)
// ------------------------------------------------
// const userLogged = "Rafi";
// userPlace.innerHTML = "Halo, " + userLogged + ". Apa kabar?";
// ------------------------------------------------
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 12", "Gadget");
// console.log(getProduct);


//ES6
// const myPc = "Asus";

// myPc = "Lenovo";
// console.log(myPc);
// -----------------------------------------------
// const myPc = ['Asus', 'Lenovo', 'Dell'];

// for (let i = 0; i < myPc.length; i++) {
//     console.log(myPc[i]);
// }

// console.log(i)
// ------------------------------------------------
// const userLogged = "Rafi";
// userPlace.innerHTML = `Halo, ${userLogged}. Apa kabar?`;
// ------------------------------------------------
// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// var getProduct = addProduct("iPhone 12", "Gadget");
// cartItems.innerHTML = `Produk: ${getProduct.name}, Kategori: ${getProduct.category}`;
// console.log(getProduct);
// ------------------------------------------------
// const yourSkills = ['UI/UX Design', 'Frontend Dev', 'Leadership'];

// // yourSkills.push('Learner'); // tambah array

// let parent = '<ul>'

// yourSkills.forEach((skill) => {
//     parent += '<li>' + skill + '</li>';
// })

// parent += '</ul>'
// skillsHolder.innerHTML = parent;
// >>>>>>>>>>>>>>
// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });

// const printSkills = yourSkills.map(skill => {
//     return skill;
// });

// skillsHolder.innerHTML = printSkills;
// >>>>>>>>>>>>>>
// const myPrimarySkill = yourSkills.filter(skill => {
//     return skill !== "Leadership";
// });

// skillsHolder.innerHTML = myPrimarySkill;
// --------------------------------------------------------------------------------------------
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(`${this.username} telah bergabung pada kelas ${this.nama_kelas}`);
    }

    hitungMember() {
        console.log(`Total member 100 orang`);
    }
}

// let tambahSiswa = new Siswa('Fadil', 'fadilteya', 'Fullstack JS');
// tambahSiswa.gabung();

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log(`Terima kasih ${this.username} telah berlangganan paket ${this.paket}.`);
    }
}

let tambahLangganan = new Langganan('Malik', 'Premium');
tambahLangganan.gabungPaket();