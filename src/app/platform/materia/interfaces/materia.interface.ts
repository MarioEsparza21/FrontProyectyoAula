export interface Materia {
    correo_institucional :string;
    cod_asignatura : string;
    nombre: string;
    cantidad_alumnos?: number;
    nombreGrupo: string;
}

export interface MateriaGrupo {
    nombre: string;
    cantidad_alumnos: number;
    cod_asignatura: string;
}