public class Tutorial {
    private String contenidoTutorial;

    public Tutorial(String contenidoTutorial) {
        this.contenidoTutorial = contenidoTutorial;
    }

    public void mostrarTutorial() {
        System.out.println("Tutorial de clasificación de residuos:");
        System.out.println(contenidoTutorial);
    }

    public String getContenidoTutorial() {
        return contenidoTutorial;
    }

    public void setContenidoTutorial(String contenidoTutorial) {
        this.contenidoTutorial = contenidoTutorial;
    }
}
