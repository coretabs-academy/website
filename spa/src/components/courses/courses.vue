<template>
<div v-if="loaded" class="courses">
   <v-stepper v-model="currentCourse.id" vertical v-resize="onResize">
      <v-toolbar app>
         <v-toolbar-side-icon class="white--text" @click="drawer.isOpen = !drawer.isOpen"></v-toolbar-side-icon>
         <v-toolbar-title class="white--text mx-auto">{{currentCourse.title}}</v-toolbar-title>
      </v-toolbar>
      <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen">
         <v-toolbar flat>
            <v-btn flat icon color="white" v-if="!drawer.isRight" :to="trackURL">
               <v-icon>chevron_left</v-icon>
            </v-btn>
            <v-btn v-else flat icon color="white" :to="trackURL">
               <v-icon>chevron_right</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">{{currentCourse.coursesGroup}}</v-toolbar-title>
         </v-toolbar>
         <v-divider></v-divider>
         <div class="stepper-group">
            <v-stepper-step v-bind:class="{'active':currentCourse.id === course.id}" v-for="course in courses" :key="`${course.id}-step`" :step="course.id" @click.native="gotToStep(course.id)" editable>{{course.title}}</v-stepper-step>
         </div>
      </v-navigation-drawer>
      <div class="content" v-bind:style="{ height: height + 'px' }" v-on:scroll="handleScroll">
         <router-view></router-view>
      </div>
      <v-footer app class="toolbar-footer">
         <div class="mx-auto">
            <v-btn color="white" @click="prevStep(currentCourse.id)" :disabled="currentCourse.id === 1">{{prev}}</v-btn>
            <v-btn color="white" @click="nextStep(currentCourse.id)" :disabled="currentCourse.id > courses.length">{{next}}</v-btn>
         </div>
      </v-footer>
   </v-stepper>
   <v-dialog v-model="dialog.open" max-width="400px" content-class="courses-dialog" persistent>
      <v-card color="primary">
         <v-card-text class="white--text text-xs-center">{{dialog.message}}</v-card-text>
         <v-card-actions>
            <v-container fluid grid-list-xs fill-height>
               <v-layout row align-center justify-center>
                  <v-flex xs5 sm4 md4>
                     <v-btn color="white" :to="dialog.url" @click="dialog.open = false">{{dialog.yesBtn}}</v-btn>
                  </v-flex>
                  <v-flex xs5 sm4 md4>
                     <v-btn color="white" @click="dialog.open = false">{{dialog.noBtn}}</v-btn>
                  </v-flex>
               </v-layout>
            </v-container>
         </v-card-actions>
      </v-card>
   </v-dialog>
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
<script src="./courses.js"></script>
<style src="./courses.scss" lang="scss"></style>
