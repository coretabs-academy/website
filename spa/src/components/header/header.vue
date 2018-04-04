<template>
<header>
   <v-navigation-drawer :right="drawer.isRight" app temporary floating v-model="drawer.isOpen" :width="drawer.width" class="primary">
      <v-toolbar flat>
         <v-toolbar-side-icon class="white--text" v-on:click="closeDrawer()"></v-toolbar-side-icon>
         <v-spacer></v-spacer>
         <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-0">
         <v-list-tile v-for="nav in navs" :key="nav.name">
            <v-btn flat block large class="white--text" v-if="!nav.route" :href="nav.url" target="_blank">{{nav.name}}</v-btn>
            <v-btn flat block large class="white--text" v-if="nav.route" :to="nav.url">{{nav.name}}</v-btn>
         </v-list-tile>
      </v-list>
   </v-navigation-drawer>
   <v-toolbar :fixed="fixed" :flat="!fixed" v-bind:class="{'primary': fixed}" v-scroll="onScroll">
      <v-toolbar-side-icon class="white--text hidden-md-and-up" v-on:click="openDrawer()"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
         <template v-if="fixed">
            <template v-for="nav in navs">
               <v-btn :key="nav.name" flat large class="white--text" v-if="!nav.route" :href="nav.url" target="_blank">{{nav.name}}</v-btn>
               <v-btn :key="nav.name" flat large class="white--text" v-if="nav.route" :to="nav.url">{{nav.name}}</v-btn>
            </template>
         </template>
         <template v-else>
            <template v-for="nav in navs">
               <v-btn :key="nav.name" round large class="white--text primary" v-if="!nav.route" :href="nav.url" target="_blank">{{nav.name}}</v-btn>
               <v-btn :key="nav.name" round large class="white--text primary" v-if="nav.route" :to="nav.url">{{nav.name}}</v-btn>
            </template>
         </template>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
   </v-toolbar>
</header>
</template>
<script src="./header.js"></script>
<style src="./header.scss" lang="scss"></style>
