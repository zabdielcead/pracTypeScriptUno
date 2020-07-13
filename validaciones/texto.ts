 export const MENSAJESMODULE: string[] = [
    "EL TEXTO ES MUY CORTO",
    "EL TEXTO ES MUY LARGO"
];

export function obtnerErrorModule(numError: number): string{
    return MENSAJESMODULE[numError];
}