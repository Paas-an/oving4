<template>
    
        <div class="input-display">
        <input type="text" :value="value" @input="$emit('input', $event.target.value)" @keyup.enter="$emit('calculate')" />
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style scoped>
.input-display {
  margin-bottom: 20px;
    
}

.input-display input {
  font-size: 30px;
  padding: 10px;
  width: 100%;
}
</style>
