<template>
<div v-if="loaded">
   <v-stepper v-model="currentCourse" vertical>
      <v-container fluid grid-list-xs fill-height>
         <v-layout row>
            <v-flex>
               <v-navigation-drawer permanent hide-overlay :mini-variant.sync="mini" color="primary">
                  <template v-for="course in courses">
                     <v-stepper-step :key="`${course.id}-step`" :step="course.id" :complete="currentCourse > course.id" editable>{{course.title}}</v-stepper-step>
                     <v-divider v-if="course.id !== courses" :key="course.id"></v-divider>
                  </template>
               </v-navigation-drawer>
            </v-flex>
            <v-flex>
               <v-stepper-content :step="course.id" v-for="course in courses" :key="`${course.id}-content`">
                  <v-card v-html="previewText(course.content)"></v-card>
               </v-stepper-content>
               <div class="stepper-footer">
                  <v-btn color="primary" @click="prevStep(course.id)" :disabled="courses.length !== currentCourse">{{prev}}</v-btn>
                  <v-btn color="primary" @click="nextStep(course.id)" :disabled="currentCourse !== 1">{{next}}</v-btn>
                  <v-btn color="primary" @click="nextStep(course.id)" v-show="currentCourse === courses.length" :to="nextCourse.url">{{nextCourse.name}}</v-btn>
               </div>
            </v-flex>
         </v-layout>
      </v-container>
   </v-stepper>
</div>
<div v-else class="progress-container">
   <v-container fluid grid-list-xs fill-height>
      <v-layout row justify-center align-center>
         <v-flex xs12>
            <v-progress-circular indeterminate color="primary" :size="80" :width="7"></v-progress-circular>
         </v-flex>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./courses.js"></script>
<style src="./courses.scss" lang="scss"></style>
