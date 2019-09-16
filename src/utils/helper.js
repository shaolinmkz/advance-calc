export default class Helper {
  static simpleArith = ({ num1, num2, operand }) => {
    switch (operand) {
      case "+":
        return num1 * num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  }

  static solve = (expression) => {
    return eval(expression);
  }
}
