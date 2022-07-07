// @ts-check
// 는 타입스크립트한테 자바스크립트 파일을 확인하라는 것이다. 즉 자바스크립트를 보호함
// 그렇다고 자바스크립트 파일에서 타입스크립트를 사용할 수 있는건 아니다.

// 하지만 JSDoc
// ! JSDoc
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
