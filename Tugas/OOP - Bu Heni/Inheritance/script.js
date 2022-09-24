// Membuat Class Parent nya
class Mahasiswa {
    // Properti yang dimiliki Parent
    constructor(nama, nim, prodi){
        this.nama = nama;
        this.nim = nim;
        this.prodi = prodi;
    }

    // Method yang dimiliki Parent
    hadir(){
        console.log(`Mahasiswa atasnama ${this.nama} (${this.nim}) prodi ${this.prodi} telah mengikuti kelas hari ini.`);
    }
    ijin(){
        console.log(`Mahasiswa atasnama ${this.nama} (${this.nim}) prodi ${this.prodi} ijin tidak mengikuti kelas hari ini.`);
    }
    bolos(){
        console.log(`Mahasiswa atasnama ${this.nama} (${this.nim}) prodi ${this.prodi} tidak mengikuti kelas hari ini tanpa alasan.`);
    }
}

// Membuat Class tanpa menambahkan Property & Method, tetapi mengambil dari Parent nya
class Absen extends Mahasiswa {}

// Membuat objek (contoh: Mahasiswa 1)
let mahasiswa1 = new Absen("Bjirka", "S1TIS999999", "IF");
mahasiswa1.hadir();
mahasiswa1.ijin();
mahasiswa1.bolos();