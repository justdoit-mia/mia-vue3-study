type ClassFieldDecorator = (value: undefined, context: {
  kind: "field";
  name: string | symbol;
  access: { get(): unknown, set(value: unknown): void };
  static: boolean;
  private: boolean;
}) => (initialValue: unknown) => unknown | void;

function logged(value, { kind, name }) {
  if (kind === "field") {
    return function (initialValue) {
      console.log(`initializing ${name} with value ${initialValue}`);
      return initialValue;
    };
  }

  // ...
}

class C {
  @logged x = 1;
}

new C();
// initializing x with value 1

let initializeX = logged(undefined, {
  kind: "field",
  name: "x",
  static: false,
  private: false,
}) ?? (initialValue) => initialValue;

class C {
  x = initializeX.call(this, 1);
}