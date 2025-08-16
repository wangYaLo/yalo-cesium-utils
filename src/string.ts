/**
 * 首字母大写
 * @param str - 输入字符串
 * @returns 首字母大写的字符串
 */
export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 生成随机字符串
 * @param length - 字符串长度，默认为8
 * @returns 随机字符串
 */
export function randomString(length: number = 8): string {
    return Math.random().toString(36).substr(2, length);
}

/**
 * 驼峰命名转连字符命名
 * @param str - 驼峰命名字符串
 * @returns 连字符命名字符串
 */
export function camelToKebab(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}