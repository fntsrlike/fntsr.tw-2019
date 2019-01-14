export default {
  mounted: function () {
    this.$nextTick(function () {
      if (this.$route.hash !== '') {
        setTimeout(() => {
          this.$scrollTo(this.$route.hash)
        }, 500)
      }
    })
  }
}
