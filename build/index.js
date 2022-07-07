// const hello = () => "hi";
class Block {
    constructor(data) {
        this.data = data;
    }
    //   static 메서드를 사용하는 이유는 인스턴스 생성할 필요 없이 클래스의 속성 또는 메서드를 사용하기 위함이다.
    static hello() {
        return "hi";
    }
}
