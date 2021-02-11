<template>
    <div>
        <v-row
            justify="center"
            align="center"
        >
            <v-col
                v-for="n in 5"
                :key="n"
            >
                <ItemCard/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
export default {
    name: "ItemContainer",
    components: {
        ItemCard,
    },
}
</script>