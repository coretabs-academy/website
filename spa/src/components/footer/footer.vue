<template>
<v-footer height="auto" inset>
   <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
     <v-card-text>
       <v-btn v-for="social in socials" :key="social.icon" icon :href="social.url" class="mx-3 white--text">
         <v-icon size="24px">{{social.icon}}</v-icon>
       </v-btn>
     </v-card-text>
     <v-card-text class="white--text pt-0">{{description}}</v-card-text>
     <v-card-text class="white--text">
       &copy;{{new Date().getFullYear()}} — <strong>{{title}}</strong>
     </v-card-text>
   </v-card>
 </v-footer>
 </template>
<script src="./footer.js"></script>
<style src="./footer.scss" lang="scss"></style>
