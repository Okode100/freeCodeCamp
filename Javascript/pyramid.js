function pyramid(char, rows, isInverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    let level = isInverted ? i : rows - i - 1;
    let spaces = " ".repeat(level);
    let chars = char.repeat(2 * (rows - level - 1) + 1);
    result += spaces + chars + "\n";
  }

  return result;
}
