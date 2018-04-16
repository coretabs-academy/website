<template>
<div class="home">
   <v-jumbotron class="main" height="auto">
      <v-container fluid fill-height>
         <v-layout align-center justify-center>
            <v-flex text-xs-center xs10 sm6 md6>
               <h1 class="white--text mb-2">{{main.title}}</h1>
               <p class="white--text mt-5">{{main.description}}</p>
               <v-btn fab color="primary" class="mt-5" @click="$vuetify.goTo('#tracks',{duration: 0,offset: 0,easing: 'easeInOutCubic'})">
                  <v-icon>keyboard_arrow_down</v-icon>
               </v-btn>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
   <tracks-component></tracks-component>
</div>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
