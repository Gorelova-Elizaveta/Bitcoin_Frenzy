export const state = () => ({
    bitcoinRate: 1000,
    usersMoney: 200,
    usersBitcoin: 0,
    actionList: [],
})

export const mutations = {
    setBitcoinRate(state) {
        
    },
    setUsersMoneyWithdraw(state) {
        if ( state.usersMoney < 100) { alert('impossible to withdraw')}
        else{
          state.usersMoney -= 100
          state.actionList.unshift({value:'100$ Withdrawal', date: Date.now()});
        }
    },
    setUsersMoneyDeposit(state) {
        state.usersMoney += 100;
        state.actionList.unshift({value:'100$ Deposit', date: Date.now()});

    },
    setUsersBitcoin(state) {
        state.usersBitcoin += 1;
        state.actionList.unshift({value:'Purchased 1 Bitcoin', date: Date.now()})
    },
   

}
  
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
getActionList(store){
    return store.actionList
}
}

export const actions = {
    changeBitcoinRate() {

    },
    changeUsersMoney() {

    },
    changeUsersBitcoin() {

    }

}