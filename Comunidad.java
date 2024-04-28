import java.util.ArrayList;

public class Comunidad {
    private ArrayList<String> publicaciones;

    public Comunidad() {
        this.publicaciones = new ArrayList<>();
    }

    public boolean compartirLogros(String logro) {
        return publicaciones.add("Logro: " + logro);
    }

    public boolean compartirDesafios(String desafio) {
        return publicaciones.add("Desafío: " + desafio);
    }

    public boolean compartirConsejos(String consejo) {
        return publicaciones.add("Consejo: " + consejo);
    }

    public ArrayList<String> getPublicaciones() {
        return publicaciones;
    }

    public void setPublicaciones(ArrayList<String> publicaciones) {
        this.publicaciones = publicaciones;
    }
}
