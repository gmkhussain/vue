<template>
    <div>
        <h4>E43</h4> 

        <div class="container">
            <div class="content">
            <h1>Teleport Content</h1>
            <p>
                This is an example of how you might use Vue Teleport. I think it is a
                pretty neat API that is yet another awesome escape hatch that Vue
                provides for practical reasons. Sometimes you just need to render
                something completely outside the Vue component tree.
            </p>
            <button @click="showModal = true">Show Modal with Teleport</button>
            
            <teleport to="#myTeleport">
                <Modal43 v-show="showModal" @close2="showModal = false">
                    This modal will display in #myTeleport Element!
                </Modal43>
            </teleport>

            <teleport to="#myTeleport2">
                <Tele />
            </teleport>
            
            </div>
        </div>
    </div>     
</template>

<script>
import Tele from './Tele.vue'
import Modal43 from './Modal_43.vue'

export default {
    name: 'e43',
    components:{
        Tele,
        Modal43
    },
    data() {
        return {
            showModal: false,
        }
    }
}
</script>
