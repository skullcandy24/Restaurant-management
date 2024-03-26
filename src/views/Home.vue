<template>
  <div class="image">
    <NavBar />
    <div class="image-container">
      <img src="../assets/pasta.jpeg" alt="" class="pastaimage" />

      <div class="text-overlay">
        <!-- Text to be displayed on top of the image -->
        <h1>Welcome to Master Chef</h1>
        <p>Discover the finest flavors !</p>
      </div>
    </div>

    <div class="d-flex flex-row mb-6 ">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="align-end text-white"
          height="200"
          src="../assets/soup.jpeg"
          cover
        >
          <v-card-title>Soups</v-card-title>
        </v-img>

        

        <v-card-text>
       

          <div>Indulge in a bowl of our creamy tomato basil soup, bursting with the flavors of ripe tomatoes, fragrant basil, and a hint of garlic, served with a side of crusty artisan bread for dipping</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange"> Share </v-btn>

          <v-btn color="orange"> Explore </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" max-width="400">
        <v-img
          class="align-end text-white"
          height="200"
          src="../assets/food2.jpeg"
          cover
        >
          <v-card-title>Main Course</v-card-title>
        </v-img>

       

        <v-card-text>
        

          <div>Indulge in our Paneer Tikka Masala, featuring succulent cubes of paneer marinated in a blend of aromatic spices, simmered in a rich and creamy tomato-based sauce, served with fluffy basmati rice and warm garlic naan</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange"> Share </v-btn>

          <v-btn color="orange"> Explore </v-btn>
        </v-card-actions>
      </v-card>


      <v-card class="mx-auto" max-width="400">
        <v-img
          class="align-end text-white"
          height="200"
          src="../assets/paneer.jpg"
          cover
        >
          <v-card-title>Appetizers</v-card-title>
        </v-img>

        
        <v-card-text>
        

          <div>Delight your senses with our Samosa Chaat, a tantalizing combination of crispy golden samosas filled with spiced potatoes and peas, topped with tangy yogurt, zesty tamarind chutney, crunchy sev, and fresh cilantro, creating a symphony of flavors in every bite</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange"> Share </v-btn>

          <v-btn color="orange"> Explore </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.pastaimage {
  width: 100%;
  height: 80vh;
}
/* Style for the text overlay */
.text-overlay {
  position: absolute;
  top: 20%; /* Adjust vertical positioning */
  left: 50%; /* Adjust horizontal positioning */
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
}

/* Styling for the text */
.text-overlay h1 {
  font-size: 2cm;
}

.text-overlay p {
  font-size: 3.5em;
}
.image-container {
  position: relative;
}
</style>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

