// ! Declaration Files (정의 파일)
// 타입 정의
interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
