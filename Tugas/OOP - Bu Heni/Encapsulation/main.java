class Mahasiswa {
    private String name, nim;

    public Mahasiswa(String name, String nim) {
        this.name = name;
        this.nim = nim;
    }

    public String tampilNama(){
        return name;
    }

    public String tampilNim(){
        return nim;
    }

    public void makan(){
        System.out.println( name + " makan Nyam... Nyam... Nyam...");
    }

    public void minum(){
        System.out.println( name + " minum, wahh segerrr");
    }

    public void olahraga(){
        System.out.println( name + " olahraga, sehat sehat sehat");
    }

    public void belajar(){
        System.out.println( name + " belajar, pintar pintar pintar");
    }
}

public class main {
    public static void main(String[] args) {
        Mahasiswa agung = new Mahasiswa("Agung", "S1TIS210398");
        System.out.println("Nama \t : " + agung.tampilNama());
        System.out.println("NIM \t : " + agung.tampilNim());

        agung.makan();
        agung.minum();
        agung.olahraga();
        agung.belajar();
    }
}

