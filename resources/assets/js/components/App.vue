<template>
    <div>
        {{msg}}
        <about></about>
    </div>
</template>

<script>
import About from './About.vue'
export default {
  data () {
    return {
        msg: 'hello dari laravel elixir webpack lorem ipsum dolor sit amet'
    }
  },
  components: {
    About
  }
};
</script>

<style lang="css" scoped>
</style>