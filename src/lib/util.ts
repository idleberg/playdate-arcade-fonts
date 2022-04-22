export function sortByKey(arr: Record<string, unknown>[], key = 'name'): Record<string, unknown>[] {
    return arr.sort((a, b) =>  {
        const x = a[key];
        const y = b[key];

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}