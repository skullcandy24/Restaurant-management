<template>
  <div class="d-flex flex-row mb-6">
    <v-card class="mx-auto w-25">
      <v-img
        class="align-end text-white"
        height="200"
        src="../../assets/customers.jpeg"
        cover
      >
      </v-img>

      <v-card-text> </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Customers Count</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto w-25">
      <v-img
        class="align-end text-white"
        height="200"
        src="../../assets/orders.jpeg"
        cover
      >
      </v-img>

      <v-card-text> </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Total Orders in this Month</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto w-25">
      <v-img
        class="align-end text-white"
        height="200"
        src="../../assets/analytics.jpeg"
        cover
      >
      </v-img>

      <v-card-text> </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Monthly Sales </v-btn>
      </v-card-actions>
    </v-card>
  </div>

  <div>
    <v-card class="mx-auto w-80 overflow-y-auto" height="600px">
      <v-card-item>
        <v-card-title>Analytics</v-card-title>
       
      </v-card-item>

      <v-card-text>
        <ChartComponent/>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>

<script setup>
import ChartComponent from "./ChartComponent.vue"

</script>
