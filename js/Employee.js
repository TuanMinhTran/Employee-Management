export default class Employees {
  constructor(id, fullName, baseSalary, productQuantity) {
    this.id = id;
    this.fullName = fullName;
    this.productSalary = 50;
    this.baseSalary = baseSalary;
    this.productQuantity = productQuantity;
  }

  get getId() {
    return this.id;
  }

  set setId(id) {
    this.id = id;
  }

  get getFullName() {
    return this.FullName;
  }

  set setFullName(FullName) {
    this.FullName = FullName;
  }

  get getBaseSalary() {
    return this.BaseSalary;
  }

  set setBaseSalary(BaseSalary) {
    this.BaseSalary = BaseSalary;
  }

  get getProductQuantity() {
    return this.ProductQuantity;
  }

  set setProductQuantity(ProductQuantity) {
    this.ProductQuantity = ProductQuantity;
  }
}