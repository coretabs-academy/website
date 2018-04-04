<template>
<v-footer height="auto" inset>
   <v-card flat tile class="primary white--text text-xs-center">
     <v-card-text class="mt-3">
       <v-btn v-for="social in socials" :key="social.icon" icon :href="social.url" class="mx-3 white--text">
         <v-icon size="24px">{{social.icon}}</v-icon>
       </v-btn>
     </v-card-text>
     <v-layout xs12 justify-center align-center>
         <v-flex xs8>
           <v-card-text class="white--text pt-0 my-3">
               {{description}}
           </v-card-text>
         </v-flex>
     </v-layout>
     <v-card-text class="white--text pt-0">
     <a href="/contributors" class="white--text">Made with by Our Contributors</a>
      &copy;{{new Date().getFullYear()}} <strong>{{title}}</strong>
     </v-card-text>
   </v-card>
 </v-footer>
 </template>
<script src="./footer.js"></script>
<style src="./footer.scss" lang="scss"></style>
