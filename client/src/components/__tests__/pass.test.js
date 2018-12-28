const isPass = require("../pass");

//describe中通常寫一個元件或是一個function
describe("function isPass()", () => {
  
  //it是這個元件或function中的test case
  it("should return true when score is 60", () => {
    expect(isPass(60)).toBe(true); // 期待isPass(60)回傳的結果是true
  });
                                     
  it("should return true when score is 45", () => {
    expect(isPass(45)).toBe(false);
  });
                                     
});