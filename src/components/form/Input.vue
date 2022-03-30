<template>
  <div class="wrapper">
    <div class="input-block">
      <label :for="id">{{ labelText }}</label>
      <div>
        <input type="text"
               :id="id"
               v-model="model"
               :placeholder="placeholder"
               v-on:input="methodOnEmmit()"
               autocomplete="off"
               @blur="$emit('checkErrorsOfValidation', model)"
        >
      </div>
    </div>
    <div class="errors-block">
      <div class="error-text" v-if="showErrorValid">
        {{ errorTextValid }}
      </div>
      <div class="error-text" v-if="showErrorResponse">
        {{ errorTextResponse }}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Input',
  props: [
    'model',
    'placeholder',
    'labelText',
    'id',
    'errorTextValid',
    'errorTextResponse',
    'showErrorResponse',
    'showErrorValid'
  ],
  data() {
    return {
    }
  },
  methods: {
    methodOnEmmit() {
      this.$emit('methodOnEmit', this.model);
      this.$store.dispatch('clearStateFilmsBySearch');
    },
  }
}
</script>

<style scoped lang="scss">
.input-block {
  display: flex;
  align-items: center;

  & label {
    margin-right: 20px;
  }

  & input {
    width: 300px;
    padding: 6px 50px 4px 11px;
    outline: 0;
    border: none;
    background-color: #fff;
    font-size: 17px;
    line-height: 25px;
    box-sizing: border-box;
    color: #000;
    border-radius: 10px;
  }
}

.error-text {
  margin-top: 8px;
}
</style>