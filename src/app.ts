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

const ast = getAst("./src/app.ts");
console.log(ast);
