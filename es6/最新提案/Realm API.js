const globalOne = window;
let iframe = document.createElement('iframe');
document.body.appendChild(iframe);
const globalTwo = iframe.contentWindow;

const globalOne = window;
const globalTwo = new Realm().global;


const globalOne = window;
const globalTwo = new Realm().global;

globalOne.evaluate('1 + 2') // 3
globalTwo.evaluate('1 + 2') // 3

let a1 = globalOne.evaluate('[1,2,3]');
let a2 = globalTwo.evaluate('[1,2,3]');
a1.prototype === a2.prototype; // false
a1 instanceof globalTwo.Array; // false
a2 instanceof globalOne.Array; // false

globalTwo.evaluate('console.log(1)')
// throw an error: console is undefined


globalTwo.console = globalOne.console;

const r1 = new Realm();
r1.global === this;
r1.global.JSON === JSON; // false

const r2 = new Realm({ intrinsics: 'inherit' });
r2.global === this; // false
r2.global.JSON === JSON; // true


class FakeWindow extends Realm {
  init() {
    super.init();
    let global = this.global;

    global.document = new FakeDocument(...);
    global.alert = new Proxy(fakeAlert, { ... });
    // ...
  }
}