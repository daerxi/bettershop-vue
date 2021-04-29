<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex grid xl:grid-cols-10 2xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 gap-4">
        <li v-for="(option, i) in options" :key="i" class="-mb-px mr-2 last:mr-0 flex-auto text-center" v-on:click="toggleTabs(i)">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
             v-on:click="click"
             v-bind:class="{'text-blueGray-600 bg-gray-100': openTab === i, 'text-white bg-gray-600': openTab !== i}">
            {{ option.type }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabComponent",
  props: [
    'options',
    'click'
  ],
  data() {
    return {
      openTab: -1
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>