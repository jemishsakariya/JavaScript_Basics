class CustomMap {
  #createaGenerator(input) {
    let result;
    if (input === "value") {
      result = "value";
    } else if (input === "key") {
      result = "key";
    } else if (input === "entries") {
      result = "entries";
    }

    const self = this;
    let idx = 0;

    const arr = [];
    for (const obj of this.allEntries) {
      if (result === "entries") {
        arr.push([obj.key, obj.value]);
      } else {
        arr.push(obj[result]);
      }
    }
    const returnObj = {
      [result]: arr,
      next: function () {
        if (idx <= self.allEntries.length) {
          return {
            done: false,
            value: arr[idx++],
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };

    Object.defineProperty(returnObj, "next", { enumerable: false });

    return returnObj;
  }

  constructor(values) {
    this.allEntries = [];

    Object.defineProperty(this, "size", {
      value: 0,
      writable: true,
    });

    if (values != undefined) {
      for (const val of values) {
        if (!Array.isArray(val)) {
          throw TypeError(`Iterator value ${val} is not an entry object`);
        }

        this.set(val[0], val[1]);
      }
    }
  }

  set(key, value) {
    const idx = this.allEntries.findIndex((el) => el.key === key);

    if (idx >= 0) {
      this.allEntries[idx] = { key: key, value: value };
    } else {
      this.size++;
      this.allEntries.push({ key: key, value: value });
    }

    return this;
  }

  get(getInputKey) {
    return this.allEntries.find((el) => el.key === getInputKey)?.value;
  }

  has(key) {
    return this.allEntries.some((el) => el.key === key);
  }

  values() {
    return this.#createaGenerator("value");
  }

  keys() {
    return this.#createaGenerator("key");
  }

  entries() {
    return this.#createaGenerator("entries");
  }

  clear() {
    // this.allEntries.splice(0, this.allEntries.length);
    this.allEntries.length = 0;
    this.size = 0;
  }

  delete(key) {
    const idx = this.allEntries.findIndex((el) => el.key === key);

    if (idx >= 0) {
      this.size--;
      this.allEntries.splice(idx, 1);
      return true;
    }
    return false;
  }

  forEach(callBackFun) {
    for (const [key, value] of this.entries().entries) {
      callBackFun(value, key, this.allEntries);
    }

    // const entriePairArr = Object.entries(this.allEntries);

    // for (const [, { key, value }] of entriePairArr) {
    //   callBackFun(value, key, this.allEntries);
    // }
  }

  [Symbol.iterator]() {
    return this.#createaGenerator("entries");
  }
}

const m = new CustomMap([
  ["1", "one"],
  ["2", "two"],
  [3, "three"],
  ["4", "dvcx"],
  // [{ a: 10 }, "ds"],
]);

// console.log(m);
// console.log(m.size);
// console.log(m.get("1"));
// console.log(m.set("4", "four"));
// console.log(m.set(5, "five"));
// console.log(m.set("a", "b").set("c", "d"));
// console.log(m);
// console.log(m.size);
// const a = { a: 10 }
// console.log(m.set(a, "5"));
// console.log(m.has(a));
// console.log(m.values());
// console.log(m.keys());
// console.log(m.clear());
// console.log(m);
// console.log(m.size);
// console.log(m.delete("2"));
// console.log(m);
// console.log(m.size);
// console.log(m.entries());
// m.forEach((val, key, map) => console.log(val, key, map));

// const v = m.values();
// console.log(v);
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());

// const k = m.keys();
// console.log(k);
// console.log(k.next());
// console.log(k.next());
// console.log(k.next());
// console.log(k.next());
// console.log(k.next());

// const e = m.entries();
// console.log(e);
// console.log(e.next());
// console.log(e.next());
// console.log(e.next());
// console.log(e.next());
// console.log(e.next());

// const mIter = m[Symbol.iterator]();
// console.log(mIter);
// console.log(mIter.next());
// console.log(mIter.next());
// console.log(mIter.next());
// console.log(mIter.next());
// console.log(mIter.next());
// console.log(mIter.next());

//

//
// console.log("----------------");

// const m1 = new Map([
//   ["1", "one"],
//   ["2", "two"],
// ]);
// console.log(m1);
// console.log(m1.size);
// console.log(m1.get("1"));
// console.log(m1.set("3", "three"));
// console.log(m1.has(1));
// console.log(m1.values());
// console.log(m1.keys());
// console.log(m1.clear());
// console.log(m1);
// console.log(m1.delete("2"));
// console.log(m1);
// console.log(m1.entries());
// m1.forEach((val, key, map) => console.log(val, key, map));

//

// !!!!
// * Old
/*
class CustomMap {
  static size = 0;

  constructor(values) {
    values.forEach((val) => {
      if (!(typeof val === "object")) {
        throw TypeError(`Iterator value ${val} is not an entry object`);
      }

      if (!(val[0] in this)) {
        CustomMap.size++;
      }

      this[val[0]] = val[1];
    });

    Object.defineProperty(this, "size", {
      value: CustomMap.size,
      writable: true,
    });
  }

  get(getInputVal) {
    return this[getInputVal];
  }

  set(key, value) {
    if (!(key in this)) {
      this.size++;
    }
    this[key] = value;
    return this;
  }

  has(key) {
    if (!(key in this)) {
      return false;
    }
    return true;
  }

  values() {
    const valArr = [];
    for (const val of Object.values(this)) {
      valArr.push(val);
    }

    return valArr;
  }

  keys() {
    const keysArr = [];
    for (const val of Object.keys(this)) {
      keysArr.push(val);
    }

    return keysArr;
  }

  entries() {
    const entriesArr = [];
    for (const val of Object.entries(this)) {
      entriesArr.push(val);
    }

    return entriesArr;
  }

  clear() {
    Object.keys(this).forEach((key) => {
      this.delete(key);
    });
    return;
  }

  delete(key) {
    if (this[key]) {
      this.size--;
      return delete this[key];
    }

    return false;
  }

  forEach(callBackFun) {
    for (const [key, val] of Object.entries(this)) {
      callBackFun(val, key, this);
    }
  }
}
*/

