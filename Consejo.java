public class Consejo {
    private String consejoAmbiental;
    private String instruccionesClasificacion;

    public Consejo(String consejoAmbiental, String instruccionesClasificacion) {
        this.consejoAmbiental = consejoAmbiental;
        this.instruccionesClasificacion = instruccionesClasificacion;
    }

    public String proporcionarConsejo() {
        return consejoAmbiental;
    }

    public String proporcionarInstrucciones() {
        return instruccionesClasificacion;
    }

    public String getConsejoAmbiental() {
        return consejoAmbiental;
    }

    public void setConsejoAmbiental(String consejoAmbiental) {
        this.consejoAmbiental = consejoAmbiental;
    }

    public String getInstruccionesClasificacion() {
        return instruccionesClasificacion;
    }

    public void setInstruccionesClasificacion(String instruccionesClasificacion) {
        this.instruccionesClasificacion = instruccionesClasificacion;
    }
}
