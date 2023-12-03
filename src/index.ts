import { Rule, ASTNode } from "./types.js";

export class ParserGenerator {
  private stack: { name: string; pattern: string }[] = [];
  private lastMatch: RegExpMatchArray | null = null;

  constructor() {}

  pushScope(ruleName: Rule, regexPattern: string): void {
    this.stack.push({
      name: ruleName.toString().slice(7, -1),
      pattern: regexPattern,
    });
  }

  popScope(): void {
    this.stack.pop();
  }

  testExpression(expression: string): boolean {
    const regex = this.buildRegex();
    this.lastMatch = expression.match(regex);
    return this.lastMatch !== null;
  }

  parseExpression(): ASTNode | null {
    if (this.lastMatch) {
      return this.buildAST(this.lastMatch);
    }
    return null;
  }

  clean(): void {
    this.stack = [];
    this.lastMatch = null;
  }

  private buildAST(match: RegExpMatchArray): ASTNode {
    const ast: ASTNode = { name: "root", children: [] };

    this.stack.forEach(({ name, pattern }, index) => {
      const value = match[index + 1]; /** captured */
      if (value !== undefined) {
        const node: ASTNode = { name, value };
        ast.children?.push(node);
      }
    });

    return ast;
  }

  private buildRegex(): RegExp {
    const rules = this.stack
      .map(({ name, pattern }) => `(?<${name}>${pattern})`)
      .join("|");
    return new RegExp(`^(${rules})$`);
  }
}
