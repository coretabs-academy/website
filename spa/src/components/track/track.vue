<template>
<div v-if="loaded" class="track">
   <v-container fluid grid-list-xs fill-height>
      <v-layout row justify-center align-center>
         <v-flex xs11 sm8 md6>
            <h1 class="section-title my-5">{{title}}</h1>
            <v-card color="primary" height="auto" class="white--text elevation-23 my-4" v-for="course in courses" :key="course.title">
               <v-container fluid fill-height>
                  <v-layout row wrap justify-center align-center>
                     <v-flex xs12 sm12 md12>
                        <v-container fluid fill-height>
                           <v-layout row>
                              <v-flex xs12 sm8 md8>
                                 <v-card-title class="mt-2">
                                    <div class="text-xs-center">{{course.title}}</div>
                                 </v-card-title>
                                 <v-card-text class="mt-2 mb-4">{{course.desc}}</v-card-text>
                              </v-flex>
                              <v-flex sm4 md4 class="hidden-xs-down">
                                 <v-card-media :src="course.image"></v-card-media>
                              </v-flex>
                           </v-layout>
                        </v-container>
                     </v-flex>
                     <v-flex xs12 sm12 md12>
                        <v-card-actions>
                           <v-flex xs8>
                              <div class="progress">
                                 <v-progress-linear :value="course.percent" height="5" color="success" background-color="secondary"></v-progress-linear>
                                 <span>{{course.percent}}%</span>
                              </div>
                           </v-flex>
                           <v-spacer></v-spacer>
                           <v-flex xs4>
                              <v-btn flat large class="white--text" :to="course.url">{{action}}</v-btn>
                           </v-flex>
                        </v-card-actions>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</div>
<div v-else class="progress-container">
   <v-container fluid grid-list-xs fill-height>
      <v-layout row align-center>
         <v-flex xs12>
            <v-progress-circular indeterminate color="primary" :size="80" :width="7"></v-progress-circular>
         </v-flex>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./track.js"></script>
<style src="./track.scss" lang="scss"></style>
