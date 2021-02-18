<template>
  <v-dialog
      v-model="open"
      width="500px"
      @click:outside="$emit('handle-close')"
    >
      <v-card>
        <v-card-title class="headline">
          Confirmar compra
        </v-card-title>

        <v-card-text>
          Você deseja comprar esse item?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray"
            text
            @click="$emit('handle-close')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="#5300aa"
            text
            @click="$emit('handle-buy')"
          >
            Concluir compra
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "confirm-dialog",
    props: {
        open: Boolean,
    }
}
</script>