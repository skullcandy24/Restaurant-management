<template>
  <div class="box">
    <v-card height="100vh">
      <v-layout>
        <v-navigation-drawer location="left"  class="bg-black" permanent>
          <template v-slot:prepend>
            <v-list-item
              lines="two"
              prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
              subtitle="Logged in"
              title="Jane Smith"
            ></v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list density="compact" nav class="listitem">
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Dashboard"
              @click="navigateTo('Dashboard')" 
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="Order List"
              @click="navigateTo('OrderList')"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Reviews"
              @click="navigateTo('Reviews')" 
            ></v-list-item>
          </v-list>

         <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
        </v-navigation-drawer>
        <v-main style="height: 100vh">
            <router-view></router-view>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (routeName) => {
  router.push({ name: routeName })
}
</script>

<style scoped>


</style>
