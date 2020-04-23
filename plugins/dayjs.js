import Vue from 'vue'

export default () => {
  Vue.mixin({
    methods: {
      doTheLeakyThing () {
        return ''
      }
    }
  })
}
