<template>
<div class="home">
   <v-jumbotron :src="src" :gradient="gradient" dark>
      <v-container fill-height>
         <v-layout align-center>
            <v-flex text-xs-center>
               <h3 class="display-3">Gradient over Image</h3>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
</div>
</template>
<script src="./home.js"></script>
<style src="./home.scss"></style>
