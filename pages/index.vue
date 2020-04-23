<template>
  <div class="container">
    Dayjs memory leak.
  </div>
</template>

<script>
import testMixin from '@/mixins/test'

export default {
  data () {
    return {
      data: ''
    }
  },

  mixins: [testMixin]
}
</script>
