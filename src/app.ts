import { readFileSync } from "fs";
import * as ts from "typescript";

function getAst(fileName: string): ts.SourceFile {
    return ts.createSourceFile(
        fileName,
        readFileSync(fileName).toString(),
        ts.ScriptTarget.Latest,
        /*setParentNodes */ true,
    );
}

function getClasses(node: ts.Node) {
    const classes: ts.Node[] = [];
    node.forEachChild((n) => {
        if (n.kind === ts.SyntaxKind.ClassDeclaration) {
            classes.push(n);
        }
    });
}

const ast = getAst("./src/SampleClass.ts");
const classes = getClasses(ast);
console.log(ast);
