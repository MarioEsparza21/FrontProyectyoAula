export interface AuthResponse {
    token?:      string;
    payload?:    User;
}

export interface User {
    correo_institucional: string;
    nombres: string;
    apellido: string;
    cod_tipo_doc : number;
    cod_rol: number;
    codigo : string;
    correo_personal?: string;
    documento?: string;
    celular?: string;
    semestres?: string;
    img?: string;
    perfil_completado?: boolean;
}
  