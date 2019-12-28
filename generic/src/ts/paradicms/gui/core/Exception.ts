export abstract class Exception {
  abstract httpStatusCode?: number;
  abstract message?: string;
}
