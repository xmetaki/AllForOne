const addFunction = require('../src/addFunction')

describe("test addFunction features", () => {
  test("test two integer", () => {
    const a = 1;
    const b = 2;
    expect(addFunction(a,b)).toBe(3);
  });

  test("test two double number", () => {
    const a = 1.5;
    const b = 2.5;
    expect(addFunction(a,b)).toBe(4)
  });

  test("test classical add error", () => {

    expect(addFunction(0.1,0.2)).not.toBe(0.3)
  })
})

