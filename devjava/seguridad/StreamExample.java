import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample
 {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};

        // Convertir un rango del arreglo a IntStream
        Arrays.stream(numbers, 1, 4) // Índices: desde 1 hasta 4 (exclusivo)
              .forEach(System.out::println); // Salida: 20, 30, 40

        System.out.println("---------------");

        double[] decimals = {1.1, 2.2, 3.3};
        //double[] decimals = {};

        // Convertir a DoubleStream y calcular el promedio
        double average = Arrays.stream(decimals).average().orElse(0.0);
        System.out.println("Promedio: " + average); // Salida: 2.2

        System.out.println("---------------");

        String[] colors = {"Rojo", "Azul", "Verde"};

        // Convertir a Stream<String> y concatenar todos los colores
        String allColors = Arrays.stream(colors).reduce("1erStr", (a, b) -> a + " " + b);
        System.out.println("Colores: " + allColors.trim()); // Salida: Rojo Azul Verde

        System.out.println("---------------");

        Integer[] numbers2= {1, 2, 3, 4, 5};

        // Convertir a Stream, filtrar y recolectar en una lista
        List<Integer> evens = Arrays.stream(numbers2)
                                    .filter(num -> num % 2 == 0)
                                    .collect(Collectors.toList());

        System.out.println("Números pares: " + evens); // Salida: Números pares: [2, 4]

        
    }
}
