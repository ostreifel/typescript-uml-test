export function gf1() {
    return true;
}

export class SampleClass {
    private num2: number = 3;
    constructor(readonly num1: number, readonly bool1: boolean, readonly str1: string) {
    }
    public f1() {
        return this.num1 * this.num2;
    }
    public f2() {
        return this.num1 || this.str1.length;
    }
    public f3() {
        return 1;
    }
}

const a = new SampleClass(2, true, "asdf");
a.f1();
