export const sum = (x: number, y: number): number => x + y;

export const keys = <O>(obj:O): (keyof O)[] => {
    const output: (keyof O)[] = [];
    for(const key in obj) {
        output.push(key);
    }
    return output;
};

export const filter = <V>(arr: V[], cb: (v: V, i: number) => boolean): V[] => {
  const output: V[] = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (cb(el, i)) output.push(el);
  }
  return output;
};

export const map = <V, N = V>(arr: V[], cb: (v: V, i: number) => N): N[] => {
  const output: N[] = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    output.push(cb(el, i));
  }
  return output;
};

export const reduce = <V, D = V>(
  arr: V[],
  cb: (t: D, v: V, i: number) => D,
  initialValue: D
): D => {
  let total = initialValue;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    total = cb(total, el, i);
  }
  return total;
};
