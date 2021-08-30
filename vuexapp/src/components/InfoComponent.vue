<template>
    <div>
        <h4>InfoComponent {{teamACount}}</h4>
        <div v-if="teamACount > 4">
            {{matchDate}}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({matchDate: state => state.infoModule.matchDate}),
    ...mapGetters('infoModule', ['teamACount'])
  }
}
</script>
