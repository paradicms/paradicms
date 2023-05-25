import * as fs from "fs";
import * as N3 from "n3";
import {getWikibaseItems} from "../src";
import {expect} from "chai";

require.extensions['.ttl'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

interface TestWikidataItemFile {
    articlesCount: number;
    directClaimsCount: number;
    fullStatementsCount: number;
    itemsCount: number;
    qid: number,
    ttl: string;
}

const testWikidataItemFiles: TestWikidataItemFile[] = [
    {
        articlesCount: 173,
        directClaimsCount: 77,
        fullStatementsCount: 223,
        itemsCount: 122,
        qid: 7251,
        ttl: require("./data/Q7251.ttl")
    },
    {
        articlesCount: 71,
        directClaimsCount: 62,
        fullStatementsCount: 105,
        itemsCount: 81,
        qid: 92614,
        ttl: require("./data/Q92614.ttl")
    }
];

describe("getWikibaseItems", () => {
    testWikidataItemFiles.forEach(testWikidataItemFile => {
       it(`should successfully parse the file ${testWikidataItemFile.qid}`, () => {
           const store = new N3.Store();
           store.addQuads(new N3.Parser().parse(testWikidataItemFile.ttl));
           const items = getWikibaseItems({
               dataset: store,
               includeRedundantStatements: true
           });
           expect(items).to.have.length(testWikidataItemFile.itemsCount);
           const fileItem = items.find(item => item.node.value === `http://www.wikidata.org/entity/Q${testWikidataItemFile.qid}`);
           expect(fileItem).to.not.be.undefined;
           expect(fileItem!.articles).to.have.length(testWikidataItemFile.articlesCount);
           expect(fileItem!.labels).to.not.be.empty;
           expect(fileItem!.statements).to.have.length(testWikidataItemFile.directClaimsCount + testWikidataItemFile.fullStatementsCount);
           expect(fileItem!.statements.filter(statement => statement.type === "Direct")).to.have.length(testWikidataItemFile.directClaimsCount);
           expect(fileItem!.statements.filter(statement => statement.type === "Full")).to.have.length(testWikidataItemFile.fullStatementsCount);
       })
    });
});