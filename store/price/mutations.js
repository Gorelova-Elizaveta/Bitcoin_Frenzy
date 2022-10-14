export default {
    setBitcoinRateIncreased(state) {
        state.bitcoinRate += 1000;
        state.actionList.unshift({value:'Increased Bitcoin price by 1,000$', date: Date.now()})
    },
    setBitcoinRateDecreased(state) {
        if(state.bitcoinRate <= 1000) {
            $nuxt.$bvToast.toast('cannot be reduced', {
                title: 'BootstrapVue Toast',
                variant: 'danger',
                autoHideDelay: 5000,
            })
        }
        else{
            state.bitcoinRate -= 1000;
            state.actionList.unshift({value:'Decreased Bitcoin price by 1,000$', date: Date.now()})
        }
    },
}