let app = new Vue({
  el: '#app',
  data: {
    error: false,
    loading: true,
    value: '',
    baseCurr: '',
    basePair: '',
    minTrans: '',
    maxTrans: '',
    minFunds: '',
    maxFunds: '',
  },
  methods: {
    getResults() {
      const self = this;
      console.log(this.value);
      self.loading = true;
      const url = "https://api.pro.coinbase.com/products/" + this.value + "-USD";
      console.log(this.value);
      fetch(url)
        .then(function(response) {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('consider yourself yote upon');
          }
        }).then(function(json) {
          self.baseCurr = json.base_currency;
          self.basePair = json.display_name;
          self.minTrans = json.base_min_size;
          self.maxTrans = json.base_max_size;
          self.minFunds = json.min_market_funds;
          self.maxFunds = json.max_market_funds;
          self.loading = false;
          self.error = false;
          console.log(this.basePair);
          console.log(this.loading);
        }).catch(function(err){
          self.error = true;
          console.log(err);
        });
    },
  }
});
