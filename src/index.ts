// const hello = () => "hi";

// class Block {
//   constructor(private data: string) {}
//   //   static 메서드를 사용하는 이유는 인스턴스 생성할 필요 없이 클래스의 속성 또는 메서드를 사용하기 위함이다.
//   static hello() {
//     return "hi";
//   }
// }

// localStorage.setItem();

// import { init, exit } from "./myPackage";

// init();

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

// ! block ------------------------
import crypto from "crypto";

interface BlockShape {
  hash: string;
  preHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public preHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(preHash, height, data);
  }
  static calculateHash(preHash: string, height: number, data: string) {
    const toHash = `${preHash} ${height} ${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
