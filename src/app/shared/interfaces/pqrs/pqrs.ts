export interface Pqrs {
    id:number,
    nombreCompleto:string,
    correo:string,
    tipo: 'Peticion' | 'Queja' | 'Reclamo' | 'Sugerencia';
    asunto:string,
    Mensaje:string
}
