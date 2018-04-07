<template>
<div class="tracks">
   <v-container v-for="course in courses" :key="course['title-ar']" fluid grid-list-xl fill-height class="my-5">
      <v-layout row wrap align-center justify-center>
         <v-flex xs10 sm8 md6>
            <v-card color="primary" class="white--text elevation-2">
               <v-card-title primary-title>
                  <h1>{{course["title-ar"]}}</h1>
                  <p>{{course["desc-ar"]}}</p>
               </v-card-title>
               <v-card-actions>
                  <v-btn flat large class="white--text">{{action}}</v-btn>
               </v-card-actions>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./tracks.js"></script>
<style src="./tracks.scss" lang="scss"></style>
