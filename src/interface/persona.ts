// Crear la interface para el objeto
export interface Persona {
	nombre: string;
	apellido: string;
	edad: number;
	direccion: Direccion;
	sueldo: Sueldo;
	getFullDireccion(id:number): string;
}

interface Direccion {
	calle: number;
	zip: string;
	ciudad: string;
}

interface Sueldo {
	sueldo: number;
	muestraSueldo: (sueldo:number) => void;
}

interface Usuario extends Persona{
	isLogged: boolean;
}