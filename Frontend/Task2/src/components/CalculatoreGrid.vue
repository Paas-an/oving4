<template>
    <div class="calculator-grid">
        <button v-for="button in buttons" :key="button" @click="$emit('button-click', button)">{{ button }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C']
        };
    }
}
</script>

<style>
.calculator-grid {
    margin: 0 auto;
    width: 400px;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
}


</style>
   
 