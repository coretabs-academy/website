<template>
<v-footer height="auto" v-show="show">
   <v-card flat tile class="primary white--text text-xs-center">
     <v-card-text class="mt-3">
       <v-btn v-for="social in socials" :key="social.icon" icon :href="social.url" target="_blank" class="mx-3 white--text">
         <v-icon size="24px">{{social.icon}}</v-icon>
       </v-btn>
     </v-card-text>
     <v-layout xs12 sm12 md12 justify-center align-center>
         <v-flex xs12 sm8 md6>
           <v-card-text class="white--text pt-0 my-3 about">{{description}}</v-card-text>
         </v-flex>
     </v-layout>
     <v-card-text class="white--text pt-0 copyright">{{copyright}}&nbsp;<router-link to="/about" class="white--text"><strong>{{title}}</strong></router-link> &copy;&nbsp;{{new Date().getFullYear()}}</v-card-text>
   </v-card>
 </v-footer>
 </template>
<script src="./footer.js"></script>
<style src="./footer.scss" lang="scss"></style>
