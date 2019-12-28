export class Uris {
    static isUrl(uri: string): boolean {
        return uri.startsWith("http://") || uri.startsWith("https://");
    }
}
