export default function concatArrays(array1, array2, string) {
    const result = [...array1, ...array2, ...string]
    return result;
}