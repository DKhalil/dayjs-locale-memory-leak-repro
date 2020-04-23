import Vue from 'vue'
import dayjs from 'dayjs'
import locale from 'dayjs/locale/sv'

export default () => {
  dayjs.locale(locale)

  Vue.mixin({
    methods: {
      localeDate (date, format) {
        return dayjs(date).format(format || locale.formats.L)
      }
    }
  })
}
