export function sortByKey(arr: Record<string, unknown>[], key = 'name'): Record<string, unknown>[] {
    return arr.sort((a, b) =>  {
        const x = a[key];
        const y = b[key];

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// encodeURIComponent leaves !'()* intact, which breaks quoted CSS url() values
export function encodeName(name: string): string {
    return encodeURIComponent(name).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}