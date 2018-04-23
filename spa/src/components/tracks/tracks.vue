<template>
<div id="tracks" class="tracks">
   <v-jumbotron color="secondary" height="auto">
      <v-container fluid grid-list-xl fill-height>
         <v-layout justify-center row wrap>
            <v-flex text-xs-center xs12 sm12 md12>
               <h1 class="my-5 section-title">{{tracks.title}}</h1>
            </v-flex>
            <v-flex xs12 sm9 md4 v-for="card in tracks.cards" :key="card.background" class="mb-5">
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
                           {{card.description}}
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
<script src="./tracks.js"></script>
<style src="./tracks.scss" lang="scss"></style>
