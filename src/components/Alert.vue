<template>
  <div v-if="alertOpen">
    <div v-if="type==='error'" class="py-3 px-5 mb-4 bg-red-200 text-red-900 text-sm rounded-md border border-red-200 flex items-center" role="alert">
      <div class="w-4 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      </div>
      <span><b class="capitalize inline">Oops!</b> {{ message }}</span>
    </div>
    <div v-else-if="type==='warn'" class="py-3 px-5 mb-4 bg-yellow-200 text-yellow-900 text-sm rounded-md border border-yellow-200 flex items-center" role="alert">
      <div class="w-4 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <span>{{ message }}</span>
    </div>
    <div v-else class="py-3 px-5 mb-4 bg-green-200 text-green-900 text-sm rounded-md border border-green-200 flex items-center" role="alert">
      <div class="w-4 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      </div>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: ['type', 'message'],
  data() {
    return {
      alertOpen: true
    }
  },
  methods: {
    async closeAlert() {
      this.alertOpen = false
    }
  }
}
</script>