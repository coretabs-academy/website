<template>
<div class="track">
   <v-container fluid grid-list-xs fill-height>
      <v-layout row justify-center align-center>
         <v-flex xs11 sm9 md7>
            <h1 class="section-title my-5">{{title}}</h1>
            <v-card color="primary" height="auto" class="white--text elevation-23 my-5" v-for="course in courses" :key="course.title">
               <v-container fluid grid-list-xs fill-height>
                  <v-layout row wrap justify-center align-center>
                     <v-flex xs8>
                        <v-card-title>
                           <div class="text-xs-center">{{course.title}}</div>
                        </v-card-title>
                        <v-card-text>{{course.desc}}</v-card-text>
                        <v-card-actions class="mt-2 mb-3">
                           <v-progress-linear :value="course.percent" height="5" color="success" background-color="secondary"></v-progress-linear>
                           <v-btn flat large class="white--text">{{action}}</v-btn>
                        </v-card-actions>
                     </v-flex>
                     <v-flex xs4>
                        <v-card-media :src="course.image" height="auto"></v-card-media>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./track.js"></script>
<style src="./track.scss" lang="scss"></style>
