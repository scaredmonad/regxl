export type Rule = symbol | string;

export interface ASTNode {
  name: string;
  value?: string;
  children?: ASTNode[];
}
