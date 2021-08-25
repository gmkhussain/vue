<template>
  <div>
    <h4>Watchers</h4>
    
    <p>{{qty}}</p>
    <p>{{err}}</p>

    <button @click="qty += 1">+</button>
    <button @click="qty -= 1">-</button>

  </div>
</template>

<script>
export default {
    name: 'e27',
    data() {
        return { 
            qty: 0,
            err: ''
        }
    },
    watch: {
        qty(newVal, oldVal) {
            if ( oldVal < newVal && newVal == 2) {
                this.err = "Qty is greate than Two"
            } else if ( newVal == 0 || newVal < 0 ) {
                this.err = "Can't set less than zero"
                this.qty = 0
            } else {
                this.err = ''
            }
        }
    }
}
</script>

<style scoped>

</style>
