<template>
  <div class="modal" v-if="show" @click="hideDialog">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-width: 600px;
    max-height: calc(100vh - 50px);
    padding: 20px 0 20px 20px;
    overflow: hidden;
  }
}
</style>