<template>
  <div>
    <div>{{count}}</div>
    <button @click="setCount()">确定</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: mapState(['count']),
  methods: {
    ...mapActions(['setCount']),
  },
};
</script>

<style>
</style>
