<template>
    <div
      class="header-select"
      v-bind:class="{ visible: isVisible }"
    >
      <h2>Choose navigation:</h2>
      <label class="radio-container">
        <input
          type="radio"
          name="headers"
          value="1"
          v-on:change="selectChange"
          :checked="currentHeader === 1"
        />
        <span class="checkmark"></span>
        Navigation 1
      </label>
      <label class="radio-container">
        <input
          type="radio"
          name="headers"
          value="2"
          v-on:change="selectChange"
          :checked="currentHeader === 2"
        />
        <span class="checkmark"></span>
        Navigation 2
      </label>
      <label class="radio-container">
        <input
          type="radio"
          name="headers"
          value="3"
          v-on:change="selectChange"
          :checked="currentHeader === 3"
        />
        <span class="checkmark"></span>
        Navigation 3
      </label>
    </div>
</template>

<script>
export default {
  name: 'HeaderSelect',
  props: [
    'isVisible',
    'selectHeader',
    'currentHeader'
  ],
  methods: {
    selectChange(event) {
      this.selectHeader(parseInt(event.target.value));
    }
  }
}
</script>

<style scoped>
.header-select {
  display: none;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #F4F4F4;
  padding: 8px;
  color: #373737;
  border: solid 1px #373737;
  box-sizing: border-box;
}

.header-select.visible {
  display: block;
}

h2 {
  margin: 0;
  font-weight: bold;
  font-size: 20px;
}

.radio-container {
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-container input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  height: 16px;
  width: 16px;
  margin-right: 4px;
  background-color: #DCD0C0;
  border-radius: 50%;
  position: relative;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #373737;
}

.radio-container input:checked ~ .checkmark:after {
  display: block;
}


</style>
