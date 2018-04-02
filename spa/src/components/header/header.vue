<template>
<div class="header">
   <v-toolbar v-bind:class="{ 'toolbar--fixed': fixed,'elevation-0':!fixed }">
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn round v-for="nav in navs" :key="nav.name">{{nav.name}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-toolbar-side-icon></v-toolbar-side-icon>
   </v-toolbar>
</div>
</template>
<script src="./header.js"></script>
<style src="./header.scss"></style>
