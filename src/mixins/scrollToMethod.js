export default {
  methods: {
    scrollTo (hash) {
      this.$scrollTo(hash)
      this.$router.push({ hash: hash })
    }
  }
}
