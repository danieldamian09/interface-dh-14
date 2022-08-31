import { Datos } from '../interface/datosApi';


const url = `https://jsonplaceholder.typicode.com/posts`;

export const getDatos = async ():Promise<Datos[] | undefined> => {
	try {
		const respuesta = await fetch(url);
		if (respuesta.ok) {
			const resultado = await respuesta.json();
			return resultado;
		}
	} catch (error) {
		console.log(error);
	}
};
