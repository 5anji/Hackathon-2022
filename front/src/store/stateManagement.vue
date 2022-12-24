<script>
import {defineStore} from 'pinia'

export const useCookersStore = defineStore('cook', {
  state: () => ({
    cookId: '',
    cookName: '',
    cookPhoto: '',
    phoneNumber: '',
    rating: 0
  }),
  getters: (state) => state,
  actions: {}
})
</script>
