export const state = () => ({
    bitcoinRate: 1000,
    usersMoney: 0,
    usersBitcoin: 0,
})

export const mutations = () => ({
    setBitcoinRate(state) {
        
    },
    setUsersMoney(state) {
        
    },
    setUsersBitcoin(state) {

    },
})
 
export const getters = {
getBitcoinRate(store) {
    return store.bitcoinRate
}, 
getUsersMoney(store) {
    return store.usersMoney
}, 
getUsersBitcoin(store) {
    return store.usersBitcoin
}, 
}

export const actions = {
    changeBitcoinRate() {

    },
    changeUsersMoney() {

    },
    changeUsersBitcoin() {

    }

}