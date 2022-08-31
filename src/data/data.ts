import { Persona } from '../interface/persona';


export const persona:Persona = {
	nombre: "Juan",
	apellido: "Perez",
	edad: 30,
	direccion: {
		calle: 4,
		zip: "ABC-123",
		ciudad: "Buenos Aires"
	},
	sueldo: {
		sueldo: 1000,
		muestraSueldo: (sueldo:number) => {
			console.log(sueldo);
		}
	},
	getFullDireccion(id) {
		return `La direccion es ${this.direccion.ciudad} y el codigo postal es $`
	}
};

