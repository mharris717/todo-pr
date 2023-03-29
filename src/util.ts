export function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((o, i) => o[i], obj);
}