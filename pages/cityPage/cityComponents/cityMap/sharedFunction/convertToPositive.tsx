export const convertToPositive = (input) => {
    if (input < 0) {
        input = input * -1
    }
    return input
}