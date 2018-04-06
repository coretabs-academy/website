<template>
<div class="home">
   <v-jumbotron class="main" height="auto">
      <v-container fluid grid-list-xl fill-height>
         <v-layout align-center justify-center>
            <v-flex text-xs-center xs10 sm6 md6>
               <h1 class="white--text mb-2">{{main.title}}</h1>
               <p class="white--text mt-5">{{main.description}}</p>
               <v-btn fab color="primary" class="mt-5" @click="$vuetify.goTo('#courses',{duration: 0,offset: 0,easing: 'easeInOutCubic'})">
                  <v-icon>keyboard_arrow_down</v-icon>
               </v-btn>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
   <v-jumbotron id="courses" class="courses" color="secondary" height="auto">
      <v-container fluid grid-list-xl fill-height>
         <v-layout justify-center row wrap>
            <v-flex text-xs-center xs12 sm12 md12>
               <h1 class="my-5 section-title">{{courses.title}}</h1>
            </v-flex>
            <v-flex xs11 sm8 md4 v-for="card in courses.cards" :key="card.background" class="mb-5">
               <v-card>
                  <v-card-media :src="card.background"></v-card-media>
                  <v-card-title primary-title class="primary">
                     <h1 class="text-xs-center"><router-link :to="card.href" class="white--text">{{card.title}}</router-link></h1>
                     <v-spacer></v-spacer>
                     <v-btn icon @click.native="card.show = !card.show" class="white--text close-btn">
                        <v-icon>{{ card.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                     </v-btn>
                  </v-card-title>
                  <v-slide-y-transition>
                     <v-card-text class="elevation-2 primary white--text" v-show="card.show">
                        <v-layout justify-content align-center>
                           <v-flex xs12 text-xs-center>{{card.description}}</v-flex>
                        </v-layout>
                     </v-card-text>
                  </v-slide-y-transition>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
</div>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
