// Variables con tipos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// Función con tipado
function saludar(persona: string, edad: number): string {
  return `Hola ${persona}, tienes ${edad} años.`;
}

console.log(saludar(nombre, edad));

// Interfaces y clases
interface Persona {
  nombre: string;
  edad: number;
}

class Estudiante implements Persona {
  constructor(public nombre: string, public edad: number) {}
  mostrarInfo(): string {
    return `Estudiante: ${this.nombre}, Edad: ${this.edad}`;
  }
}

const estudiante = new Estudiante("Ana", 22);
console.log(estudiante.mostrarInfo());
