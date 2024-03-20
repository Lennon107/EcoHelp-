import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Main {
  
    private Map<String, String> baseDeDatosResiduos;

    public Main() {
        this.baseDeDatosResiduos = new HashMap<>();
        // Inicializar la base de datos de residuos con algunos ejemplos
        inicializarBaseDeDatosResiduos();
    }

    // Función para inicializar la base de datos de residuos
    private void inicializarBaseDeDatosResiduos() {
        // Ejemplos de residuos y su clasificación
        baseDeDatosResiduos.put("Botella de plástico", "Reciclable");
        baseDeDatosResiduos.put("Cáscara de banana", "Orgánico");
        baseDeDatosResiduos.put("Papel de aluminio", "No reciclable");
    }

    // Función para escanear y clasificar un residuo
    public String clasificarResiduo(String residuo) {
        if (baseDeDatosResiduos.containsKey(residuo)) {
            return baseDeDatosResiduos.get(residuo);
        } else {
            return "Desconocido"; 
        }
    }

    // Función para clasificar el residuo
    public String obtenerInstrucciones(String categoriaResiduo) {
        switch (categoriaResiduo.toLowerCase()) {
            case "reciclable":
                return "Por favor coloca este residuo en el contenedor de reciclaje. El contenedor suele ser de color azul.";
            case "orgánico":
                return "Este residuo puede ser compostado para fertilizar el suelo. Puedes usar un compostero en casa o buscar contenedores de color marrón en tu área.";
            case "no reciclable":
                return "Por favor desecha este residuo en el contenedor de basura. El contenedor suele ser de color gris o negro.";
            default:
                return "No se encontraron instrucciones para esta categoría de residuo.";
        }
    }

    // Función para enviar notificaciones educativas 
    public void enviarNotificacionEducacional(String mensaje) {
        System.out.println("Notificación educativa: " + mensaje);
    }


    public String generarMensajeAleatorio() {
        String[] mensajes = {
            "Recuerda siempre lavar los envases antes de reciclarlos para evitar la contaminación.",
            "Reducir el consumo de plástico ayuda a disminuir la cantidad de residuos en el medio ambiente.",
            "Separar los residuos orgánicos ayuda a reducir la cantidad de basura que llega a los vertederos.",
            "Reutilizar bolsas y recipientes de plástico puede ayudar a reducir la cantidad de desechos generados.",
            "Apagar los electrodomésticos cuando no se están utilizando puede ahorrar energía y reducir las emisiones de carbono."
        };

        
        Random random = new Random();
        return mensajes[random.nextInt(mensajes.length)];
    }

    // Función para obtener estadísticas sobre la clasificación de residuos
    public void obtenerEstadisticas(String usuario, int cantidadRegistros) {
        System.out.println("Estadísticas para el usuario " + usuario + ":");
        System.out.println("Cantidad de registros de hábitos de clasificación de residuos: " + cantidadRegistros);
        // Aquí podrías incluir más estadísticas según la necesidad de tu aplicación
    }

    // Función para iniciar sesión
    public void iniciarSesion() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Por favor ingresa tu nombre de usuario:");
        String usuario = scanner.nextLine();
        System.out.println("Por favor ingresa tu contraseña:");
        String contraseña = scanner.nextLine();

     
        if (usuario.equals("usuario") && contraseña.equals("contraseña")) {
            System.out.println("Inicio de sesión exitoso para el usuario: " + usuario);
        } else {
            System.out.println("Inicio de sesión fallido. Verifica tus credenciales.");
        }
    }

   
