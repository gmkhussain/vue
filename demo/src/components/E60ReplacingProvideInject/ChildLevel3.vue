<template>
    <div>

        <h4>Child Level 3</h4>
        <p>some thing from Level 3</p>
        <p>Inject Parent Name: {{parentName}}</p>
        
        <h4>Data from Inject</h4>
        <p>staticStringValue: {{staticStringValue}}</p>

        <p>Dynamic Prodiver Title: {{p_c_titleFromParent}}</p>

        <p>Dynamic Total: {{p_c_totalFromParent}}</p>

    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    name: "Child Level 3",
    setup() {
        const staticStringValue = inject('c_staticString', "Default Value")
        const p_c_titleFromParent = inject('p_c_title', "Default Title")
        const p_c_totalFromParent = inject('p_c_total', 'No Total 0.00')
    
        return {
            staticStringValue,
            p_c_titleFromParent,
            p_c_totalFromParent
        }
    },
    inject: ['parentName', 'p_c_titleFromParent', 'p_c_totalFromParent']
}
</script>
