export const StringToChar = (string: string): string[] => {
    const result: string[] = []
    for (let i = 0; i < string.length; i++){
        result.push(string[i])
    }
    return result
}