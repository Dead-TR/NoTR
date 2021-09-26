export function createGuard<Type>(checkedKey: string) {
  return function (value: Type | any): value is Type {
    if (!value) {
      return false;
    }

    //@ts-ignore
    return !!(value as Type)[checkedKey];
  };
}
