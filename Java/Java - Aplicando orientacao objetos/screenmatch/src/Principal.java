import br.com.alura.screenmatch.modelos.Filme;

public class Principal {
    public static void main(String[] args) {

        Filme meuFilme = new Filme();
        meuFilme.setNome("O poderoso chefão");
        meuFilme.setAnoDeLancamento(1970);
        meuFilme.setDuracaoEmMinutos(180);

        meuFilme.exibeFichaTecnica();
        meuFilme.avalia(8);
        meuFilme.avalia(5);
        meuFilme.avalia(10);
        System.out.println("Soma das Avaliações: " + meuFilme.getSomaDasAvaliacoes());
        System.out.println("Total das Avaliações: " + meuFilme.getTotalDeAvaliacoes());
        System.out.println("A média das avaliações " + meuFilme.obterMedia());
    }
}