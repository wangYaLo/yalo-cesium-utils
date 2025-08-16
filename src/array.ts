/**
 * 数组去重
 * @param arr - 需要去重的数组
 * @returns 去重后的新数组
 */
export function unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

/**
 * 数组扁平化
 * @param arr - 需要扁平化的数组
 * @param depth - 扁平化深度，默认为1
 * @returns 扁平化后的数组
 */
export function flatten<T>(arr: any[], depth: number = 1): T[] {
    return arr.flat(depth);
}

/**
 * 根据条件过滤数组中的假值
 * @param arr - 源数组
 * @param predicate - 过滤条件函数
 * @returns 过滤后的数组
 */
export function filterTruthy<T>(
    arr: (T | null | undefined | false | 0 | '')[],
    predicate?: (item: T) => boolean
): T[] {
    return arr.filter((item): item is T => {
        if (item === null || item === undefined) return false;
        if (typeof item === 'boolean' && !item) return false;
        if (typeof item === 'number' && item === 0) return false;
        if (typeof item === 'string' && item === '') return false;
        return predicate ? predicate(item as T) : true;
    });
}