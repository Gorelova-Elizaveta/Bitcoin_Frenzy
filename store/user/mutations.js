export default {
    setUsersMoneyWithdraw(state) {
        if ( state.usersMoney < 100) {
            $nuxt.$bvToast.toast('impossible to withdraw', {
            title: 'error',
            variant: 'danger',
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
    setUsersBitcoin(state, bitcoinRate) {
        if(state.usersMoney < bitcoinRate) { 
            $nuxt.$bvToast.toast('insufficient funds', {
                title: 'error',
                variant: 'danger',
                autoHideDelay: 5000,
            })
        }
        else {
            state.usersMoney -= bitcoinRate;
            state.usersBitcoin += 1;
            state.actionList.unshift({value:'Purchased 1 Bitcoin', date: Date.now()})
        }
    },
    setUsersBitcoinSell(state) {
        if(!state.usersBitcoin) {
            $nuxt.$bvToast.toast('not enough bitcoins', {
                title: 'error',
                variant: 'danger',
                autoHideDelay: 5000,
            })
        }
        else {
            state.usersBitcoin -=1;
            state.usersMoney =+ state.bitcoinRate;
            state.actionList.unshift({value:'Sold 1 Bitcoin', date: Date.now()})
        }
    },
}