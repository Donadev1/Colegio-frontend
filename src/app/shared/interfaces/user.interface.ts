export interface Usuario {
    id: number;
    d_identidad?: string;
    nombre: string;
    correo: string;
    contrasena?: string;
    rol: 'Estudiante' | 'Docente' | 'Administrativo' | 'Administrador' | 'Acudiente';
    
  }
  