

export function CheckForSpaces <T extends Record<string, string>>(data: T) {
    for(let key in data) {
        if(!data[key].trim()) {
            return false
        }
    }
    return true
}