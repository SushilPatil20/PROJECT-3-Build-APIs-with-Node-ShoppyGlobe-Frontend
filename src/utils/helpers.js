


/**
 * 
 * @param {*} amount 
 * @returns {number} formtatedAmount
 */
export const formatePrize = (amount = "") => {
    if (typeof amount !== 'number' || isNaN(amount)) {
        throw new TypeError('Amount must be valid number.')
    }
    const formtatedAmount = new Intl.NumberFormat().format(amount.toFixed(2))
    return `Rs ${formtatedAmount}`
}


/**
 * 
 * @param {string} key 
 * @param {any} value 
 * @returns void
 */

export const storeInLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}