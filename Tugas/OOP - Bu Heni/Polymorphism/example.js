class Manusia {
    constructor(nama, umur){
        // property
        this.nama = nama;
        this.umur = umur;
    }

    // method
    menyapa(){
        return `Hai, selamat pagi. Saya ${this.nama}, umur ${this.umur}.`;
    }
}

class Mahasiswa extends Manusia {
    constructor(nama, umur, nim){
        super(nama, umur);
        this.nim = nim;
    }

    // method
    menyapa(){
        return `Hai, selamat malam. Saya ${this.nama}, umur ${this.umur}.`;
    }
}

const ilham = new Mahasiswa("Ashatul Ilham", 20, "S1TIS210398");
document.write(ilham.menyapa());