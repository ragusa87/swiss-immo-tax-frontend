<template>
    <div class="currentrate">
        <div class="loading" v-if="loading">
            {{ $t("messages.rate_loading") }}...
        </div>
        <div v-if="error" class="error">
            {{ $t("messages.rate_error") }} {{error}}
        </div>
        <div v-if="value != null" class="content">
            <h2>{{ $t("messages.rate") }} {{ value }}</h2>
        </div>
        <div v-if="validity || update">
            <p>{{ $t("messages.rate_validity") + $d(validity) }}</p>
            <p>{{ $t("messages.rate_update") + $d(update) }}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CurrentRate',
    props: {
      url: String,
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
          this.value = data.value * 100 + '%'
          this.validity = new Date(data.validity)
          this.update = new Date(data.lastUpdate)
        }).catch(e => {
          this.error = e
          this.loading = false
        })
      }
    }
  }
</script>