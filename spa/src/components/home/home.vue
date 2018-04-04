<template>
<div class="home">
   <v-jumbotron :src="main.background" :gradient="main.gradient" :height="main.height" v-resize="onResize">
      <v-container fluid grid-list-xl fill-height>
         <v-layout align-center justify-center>
            <v-flex text-xs-center xs10 sm6 md6>
               <h1 class="white--text mb-5 display-1">تطوير الويب</h1>
               <v-spacer></v-spacer>
               <p class="white--text my-5">إن الإلمام بمجال البرمجة، أمرٌ لا غنى عنه في أيامنا هذه. وإن تعلُّم البرمجة هو من أكثر الأمور الغنية والمفيدة التي يمكنك القيام بها.</p>
               <v-btn fab color="primary" class="mt-5" @click="$vuetify.goTo('#courses',{duration: 0,offset: 0,easing: 'easeInOutCubic'})">
                  <v-icon>keyboard_arrow_down</v-icon>
               </v-btn>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
   <v-jumbotron id="courses" class="courses" color="secondary" height="auto">
      <v-container fluid grid-list-xl fill-height>
         <v-layout justify-center row wrap>
            <v-flex text-xs-center xs12 sm12 md12>
               <h1 class="display-1 my-5 section-title">الدروس</h1>
            </v-flex>
            <v-flex xs8 sm6 md4 v-for="card in courses.cards" :key="card.background" class="mb-5">
               <v-card>
                  <v-card-media :src="card.background" height="300px"></v-card-media>
                  <v-card-title primary-title>
                     <h1 class="headline text-xs-center"><a :href="card.href" class="black--text">{{card.title}}</a></h1>
                     <v-spacer></v-spacer>
                     <v-btn icon @click.native="card.show = !card.show">
                        <v-icon>{{ card.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                     </v-btn>
                  </v-card-title>
                  <v-slide-y-transition>
                     <v-card-text class="body-2 elevation-2" v-show="card.show">
                        <v-layout justify-content align-center>
                           <v-flex xs12>
                              {{card.description}}
                           </v-flex>
                        </v-layout>
                     </v-card-text>
                  </v-slide-y-transition>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>
   <!--<v-jumbotron class="about" height="auto">
      <v-container fluid grid-list-xl fill-height>
         <v-layout justify-center row wrap>
            <v-flex text-xs-center xs8>
               <h1 class="display-1 mt-5 mb-4 section-title">عن الموقع</h1>
            </v-flex>
            <v-flex text-xs-center xs8>
               <v-card-text class="mb-5">
                  <p class="">{{about}}</p>
               </v-card-text>
            </v-flex>
         </v-layout>
      </v-container>
   </v-jumbotron>-->
</div>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
