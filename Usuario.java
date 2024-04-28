import java.util.ArrayList;
import java.util.Map;
import java.util.Scanner;

public class Usuario {
    private String nombreUsuario;
    private String contraseña;
    private Integer puntosReciclaje;
    private ArrayList<String> historialReciclaje;
    private ArrayList<String> logros;

    public Usuario(String nombreUsuario, String contraseña) {
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.puntosReciclaje = 0;
        this.historialReciclaje = new ArrayList<>();
        this.logros = new ArrayList<>();
    }

    public void iniciarSesion() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Por favor ingresa tu nombre de usuario:");
        String nombreInput = scanner.nextLine();
        System.out.println("Por favor ingresa tu contraseña:");
        String contraseñaInput = scanner.nextLine();

        if (nombreInput.equals(nombreUsuario) && contraseñaInput.equals(contraseña)) {
            System.out.println("Inicio de sesión exitoso.");
        } else {
            System.out.println("Inicio de sesión fallido. Verifica tu nombre de usuario y contraseña.");
        }
    }

    public void registrarse() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Por favor ingresa tu nombre de usuario:");
        nombreUsuario = scanner.nextLine();
        System.out.println("Por favor ingresa tu contraseña:");
        contraseña = scanner.nextLine();
        System.out.println("¡Registro exitoso!");
    }

    public Integer obtenerPuntos() {
        return puntosReciclaje;
    }

    public void compartirLogros() {
        if (logros.isEmpty()) {
            System.out.println("Aún no has logrado nada para compartir.");
        } else {
            System.out.println("Logros del usuario " + nombreUsuario + ":");
            for (String logro : logros) {
                System.out.println("- " + logro);
            }
        }
    }

    public Map<String, String> responderEncuesta(ArrayList<String> preguntas) {
        // Implementación omitida
        return null;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public Integer getPuntosReciclaje() {
        return puntosReciclaje;
    }

    public void setPuntosReciclaje(Integer puntosReciclaje) {
        this.puntosReciclaje = puntosReciclaje;
    }

    public ArrayList<String> getHistorialReciclaje() {
        return historialReciclaje;
    }

    public void setHistorialReciclaje(ArrayList<String> historialReciclaje) {
        this.historialReciclaje = historialReciclaje;
    }

    public ArrayList<String> getLogros() {
        return logros;
    }

    public void setLogros(ArrayList<String> logros) {
        this.logros = logros;
    }
}
