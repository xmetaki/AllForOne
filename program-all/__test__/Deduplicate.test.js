const de = require("../src/DeDuplicate")

describe("test Deduplicate function", () => {
  it("should be appears only once of Each elememts  in solution1", () => {
    expect(de.solution01([1,2,2,3])).toEqual([1,2,3])
  });
  it("should be appears only once of Each elememts  in solution2", () => {
    expect(de.solution02([1,2,2,3])).toEqual([1,2,3])
  })
})