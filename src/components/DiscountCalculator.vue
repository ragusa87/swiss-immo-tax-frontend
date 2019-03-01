<template>
    <div class="box secondary">
        <h1>{{ $t("messages.calculator_title")}}</h1>
        <div class="grid">
            <p>{{ $t("messages.calculator_reference",{reference: ref_official})}}</p>

            <label class="mrg-">{{$t("messages.calculator_ref_bail")}}
                <input type="number" v-model.number="ref_bail" />
            </label>

            <label class="mrg-">{{$t("messages.calculator_rent")}}
                <input type="number" v-model.number="rent"/>
            </label>

            <div v-if="result && !error && ! isNaN(result)">
                {{$t('messages.calculator_result_desc')}}
                <h1>{{$t("messages.calculator_result", {result: result})}}</h1>
                <p>{{$t("messages.calculator_win", {amount: description})}}</p>
            </div>
            <div v-if="error" class="error">
                {{$t('messages.calculator_error')}}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .grid{
        flex-direction: column;
    }
</style>

<script>
  export default {
    name: 'DiscountCalculator',
    data () {
      return {
        ref_official: 1.5,
        ref_bail: null,
        rent: null,
        result: null,
        description: null,
        error: false
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      calculate () {
        this.error = this.ref_bail >= 5 || isNaN(this.ref_bail) || this.ref_bail < 1
        if(this.error){
          this.result = NaN;
          return;
        }
        const diff = parseFloat(this.ref_official) - parseFloat(this.ref_bail)
        // We can contest 3% per 0.25 of difference between the rate, if the rate is under 5%
        // https://www.plaidoyer.ch/article/f/la-fixation-du-loyer-selon-le-critere-du-taux-hypothecaire/
        const num_025 = Math.floor(diff/0.25) *0.03
        this.rent = parseFloat(this.rent)
        this.result =  (this.rent + (this.rent * num_025)).toFixed(2)
        this.description =  ((this.result - parseFloat(this.rent))*12*-1).toFixed(2)
        return this.result;
      },
    },
    watch: {
      ref_bail: function (val) {
        this.ref_bail = val;
        this.calculate();
      },
      rent: function (val) {
        this.rent = val;
        this.calculate()
      }
    }
  }
</script>