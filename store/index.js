export const state = () => ({
    bitcoinRate: 1000,
    usersMoney: 200,
    usersBitcoin: 0,
    actionList: [],
    errors: [],
})

export const mutations = {
    setBitcoinRate(state) {
        
    },
    setUsersMoneyWithdraw(state) {
        if ( state.usersMoney < 100) { state.errors.push('impossible to withdraw')}
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
        if(state.usersMoney < state.bitcoinRate) { alert ("ывикыеиык")}
        else {
        state.usersMoney -= state.bitcoinRate;
        state.usersBitcoin += 1;
        state.actionList.unshift({value:'Purchased 1 Bitcoin', date: Date.now()})
        }
    },
    setUsersBitcoinSell(state) {
        if(!state.usersBitcoin) {alert("pppppp")}
        else {
            state.usersBitcoin -=1;
            state.usersMoney =+ state.bitcoinRate;
            state.actionList.unshift({value:'Sold 1 Bitcoin', date: Date.now()})
        }
    },
    setBitcoinRateIncreased(state) {
        state.bitcoinRate += 1000;
        state.actionList.unshift({value:'Increased Bitcoin price by 1,000$', date: Date.now()})

    },

    setBitcoinRateDecreased(state) {
        if(state.bitcoinRate <= 1000) {alert('aaaa')}
        else{
            state.bitcoinRate -= 1000;
            state.actionList.unshift({value:'Decreased Bitcoin price by 1,000$', date: Date.now()})
        }


    },
    setErrorsClear(state) {
        state.errors =[]

    }

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