export function isValidParentheses(s: string): boolean {
  let stack: string[] = [];
  for (let char of s) {
    switch(char) {
      case '{':
      case '[':
      case '(':
        stack.push(char);
        break;
      default:
        const last = stack.pop();
        if (
          char === '}' && last !== '{' ||
          char === ']' && last !== '[' ||
          char === ')' && last !== '('
        ) {
          return false;
        }
        break;
    }
  }
  return !stack.length;
};