export default {
    setBitcoinRateIncreased(state, actionList) {
        state.bitcoinRate += 1000;
        actionList.unshift({value:'Increased Bitcoin price by 1,000$', date: Date.now()})
    },
    setBitcoinRateDecreased(state, actionList) {
        if(state.bitcoinRate <= 1000) {
            $nuxt.$bvToast.toast('Bitcoin price cannot be below 1,000$', {
                title: 'error',
                variant: 'danger',
                autoHideDelay: 5000,
            })
        }
        else{
            state.bitcoinRate -= 1000;
            actionList.unshift({value:'Decreased Bitcoin price by 1,000$', date: Date.now()})
        }
    },
}