import java.util.Optional;

public class MainOptional {
    public static void main(String[] args) {
        String nombre = "Juan";

        // Crear un Optional
        Optional<String> optionalNombre = Optional.ofNullable(nombre);

        // Procesar el Optional
        optionalNombre
            .filter(n -> n.length() > 3)        // Filtrar nombres con longitud mayor a 3
            .map(String::toUpperCase)          // Transformar a mayúsculas
            .ifPresentOrElse(
                valor -> System.out.println("Nombre procesado: " + valor),
                () -> System.out.println("Nombre inválido o ausente.")
            );

        // Valor por defecto
        String valorDefecto = optionalNombre.orElse("Sin nombre");
        System.out.println("Nombre por defecto: " + valorDefecto);
    }
}
