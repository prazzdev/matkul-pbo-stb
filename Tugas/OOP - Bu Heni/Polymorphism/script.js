class Manusia {
    constructor(name) {
        this.name = name;
    }
    
    menyapa() {
        return `Halo, selamat pagi. Saya ${this.name}`;
    }
}

class Seseorang extends Manusia {
    constructor(name) {
        super(name);
    }

    menyapa() {
        return `Halo, selamat malam. Saya ${this.name}`;
    }
}

const seiya = new Seseorang("Seiya");

document.write(seiya.greet());