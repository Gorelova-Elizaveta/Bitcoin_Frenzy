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
        if ( state.usersMoney < 100) {
            $nuxt.$bvToast.toast('impossible to withdraw', {
            title: 'BootstrapVue Toast',
            autoHideDelay: 5000,
        })}
        else {
          state.usersMoney -= 100
          state.actionList.unshift({value:'100$ Withdrawal', date: Date.now()});
        }
    },
    setUsersMoneyDeposit(state) {
        state.usersMoney += 100;
        state.actionList.unshift({value:'100$ Deposit', date: Date.now()});

    },
    setUsersBitcoin(state) {
        if(state.usersMoney < state.bitcoinRate) { 
            $nuxt.$bvToast.toast('insufficient funds', {
                title: 'BootstrapVue Toast',
                autoHideDelay: 5000,
            })
        }
        else {
        state.usersMoney -= state.bitcoinRate;
        state.usersBitcoin += 1;
        state.actionList.unshift({value:'Purchased 1 Bitcoin', date: Date.now()})
        }
    },
    setUsersBitcoinSell(state) {
        if(!state.usersBitcoin) {
            $nuxt.$bvToast.toast('not enough bitcoins', {
                title: 'BootstrapVue Toast',
                autoHideDelay: 5000,
            })
        }
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
        if(state.bitcoinRate <= 1000) {
            $nuxt.$bvToast.toast('cannot be reduced', {
                title: 'BootstrapVue Toast',
                autoHideDelay: 5000,
            })
        }
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