<template>
<header>
   <v-navigation-drawer :right="drawer.isRight" app temporary floating v-model="drawer.isOpen" :width="drawer.width" class="primary">
      <v-toolbar flat class="primary">
         <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-toolbar-side-icon class="white--text" v-on:click="closeDrawer()"></v-toolbar-side-icon>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-0">
         <v-list-tile v-for="nav in navs" :key="nav.name" v-show="nav.active">
            <v-btn flat block large class="white--text" :to="nav.url">{{nav.name}}</v-btn>
         </v-list-tile>
      </v-list>
   </v-navigation-drawer>
   <v-toolbar :fixed="fixed" :flat="!fixed" class="primary" v-scroll="onScroll">
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn v-for="nav in navs" :key="nav.name" v-show="nav.active" flat large class="white--text" :to="nav.url">{{nav.name}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="white--text hidden-md-and-up" v-on:click="openDrawer()"></v-toolbar-side-icon>
   </v-toolbar>
</header>
</template>
<script src="./header.js"></script>
<style src="./header.scss" lang="scss"></style>
