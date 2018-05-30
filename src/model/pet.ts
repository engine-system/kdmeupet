export class Pet {
    public nome: any="";
    public genero: any="";
    public foto: any="";
    public especie: any="";
    public cor1: any="";
    public cor2: any="";
    public porte: any="";
    public idade: any="";
    public descrição: any="";
    public raca: any="";
    public ultimoLocalVisto: any="";

    zerar() {
        this.nome = "";
        this.genero = "";
        this.foto = "";
        this.especie = "";
        this.cor1 = "";
        this.cor2 = "";
        this.porte = "";
        this.idade = "";
        this.descrição = "";
        this.raca = "";
        this.ultimoLocalVisto = "";
    }
}