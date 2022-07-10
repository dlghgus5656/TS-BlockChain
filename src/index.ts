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
  // 이미 존재하는 블록 업데이트를 readonly를 사용해 막음
  public readonly hash: string;
  constructor(
    public readonly preHash: string,
    public readonly height: number,
    public readonly data: string
  ) {
    this.hash = Block.calculateHash(preHash, height, data);
  }
  static calculateHash(preHash: string, height: number, data: string) {
    const toHash = `${preHash} ${height} ${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPreHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(this.getPreHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  // 이미 존재하는 블록 업데이트를 readonly를 사용해 막음
  public getBlocks(): readonly Block[] {
    // ...을 사용해서 배열 안에 데이터를 가진 새로운 배열만 리턴해준다
    // 악의적으로 추가된 데이터는 추가되지 않음
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

console.log(blockchain.getBlocks());
