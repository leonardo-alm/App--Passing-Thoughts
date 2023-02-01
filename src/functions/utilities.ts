export function getNewExpirationTime() : number {
    return Date.now() + 15 * 1000;
}

let nextId = 0;

export function generateId() : number {
    const result = nextId;
    nextId += 1;
    return result;
}