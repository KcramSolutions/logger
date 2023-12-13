/**
 * Genera una cadena de texto de un acho fijo con el texto a lineado
 * a la izquierda
 * @param {string} text texto a formatear
 * @param {number} width ancho
 * @param {number} space numero de espacios al inicio y al final
 * @param {string} wrapper cartacter de relleno para el espaciado
 * @returns {string} el texto formateado
 */
export function wrapLeft(text: string, width: number, space: number, wrapper: string): string;
/**
 * Genera una cadena de texto de un acho fijo con el texto a lineado
 * a la derecha
 * @param {string} text texto a formatear
 * @param {number} width ancho
 * @param {number} space numero de espacios al inicio y al final
 * @param {string} wrapper cartacter de relleno para el espaciado
 * @returns {string} el texto formateado
 */
export function wrapRight(text: string, width: number, space: number, wrapper: string): string;
/**
 * Genera una cadena de texto de un acho fijo con el texto a lineado
 * al centro
 * @param {string} text texto a formatear
 * @param {number} width ancho
 * @param {number} space numero de espacios al inicio y al final
 * @param {string} wrapper cartacter de relleno para el espaciado
 * @returns {string} el texto formateado
 */
export function wrapCenter(text: string, width: number, space: number, wrapper: string): string;
/**
 * Genera una cadena de texto ocupando el ancho dado
 * @param {string} text Texto a formatear
 * @param {number} width tamaño del espacio para el texto
 * @param {ALIGMENT} align alineamiento del texto
 * @param {number} spaceArround cantidad de espación al inicio y al final
 * @param {string} wrapper caracter de relleno
 */
export function wrapText(text: string, width: number, align?: {
    LEFT: number;
    RIGHT: number;
    CENTER: number;
}, spaceArround?: number, wrapper?: string): string;
export namespace ALIGMENT {
    let LEFT: number;
    let RIGHT: number;
    let CENTER: number;
}
/**
 * Compara el tamaño actual con el de un string nuevo
 * y devuelve el mayor de estos.
 * @param {number} current Tamaño actual
 * @param {string} text texto a comparar
 * @returns {number} el tamaño correspondiente
 */
export function checkLenght(current: number, text: string): number;
export function formatNumber(num: any, lenght?: number): string;
//# sourceMappingURL=helpers.d.ts.map