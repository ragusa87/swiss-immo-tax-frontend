<template>
    <div class="box box-responsive">
        <div class="loading" v-if="loading">
            {{ $t('messages.rate_loading') }}
        </div>
        <div v-if="error" class="error">
            {{ $t('messages.rate_error', {error: error}) }}
        </div>
        <div v-if="value != null" class="content">
            <h2 v-html="$t('messages.rate',{value: value})"></h2>
        </div>
        <div v-if="validity || update">
            <span>{{ $t('messages.rate_validity', {date: $d(validity)}) }}</span><br>
            <span>{{ $t('messages.rate_update', {date: $d(update)}) }}</span>
        </div>
        <!--<input @input="(e) => {set(e.target.value)} " type="number">-->
    </div>
</template>

<script>
  export default {
    name: 'CurrentRate',
    props: {
      url: String
    },
    data () {
      return {
        loading: false,
        value: null,
        validity: null,
        update: null,
        error: null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.error = this.value = this.validity = this.update = null
        this.loading = true

        fetch(this.url).then(function (res) {
          if (!res.ok) {
            throw new Error('Unable to fetch the current rate')
          }
          return res.json()
        }).then(data => {
          this.loading = false
          this.validity = new Date(data.validity)
          this.update = new Date(data.lastUpdate)
          this.set(data.value * 100)
        }).catch(e => {
          this.error = e
          this.loading = false
        })
      },
      set(reference){
        this.value = reference
        this.$store.commit("reference", reference)
      }
    }
  }
</script>