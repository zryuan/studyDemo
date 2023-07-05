
const NUM_4 = 4;

function getPreMoney(curMoney, index = 0) {
    const monryStr = String(curMoney);
    let count = 0;

    if (index === monryStr.length) {
        return 0;
    }
    count += getPreMoney(curMoney, index++);

    if (monryStr[index] > NUM_4) {
        if (index === 0) {
            count += 1
        } else {
            count += monryStr[index - 1]
        }
    }

    return count;
}

getPreMoney(123678);