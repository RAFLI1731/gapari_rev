<template>
    <q-page v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
        <div class="bg">
            <div class="q-pa-md">
                <h4 style="margin-left: 19%; color: #113A53; margin-top: 100px">
                    SELAMAT DATANG <span style="color: #1DA19F"> DI GAPARI </span>
                </h4>
            </div>
            <div class="my-card">
                <q-card flat>
                    <p style="font-size: 22px; color: #AABBC3">
                        USER LOGIN
                    </p>
                    <div class="kartu q-gutter-md">
                        <q-input standout="bg-teal text-white" v-model="email" label="email addres" :dense="dense" bg-color="blue-grey-5"/>
                        <q-input standout="bg-teal text-white" v-model="password" label="password" :dense="dense" bg-color="blue-grey-5" type="password"/>
                        <div class="row">
                            <div class="col-6 q-mt-xs">
                                <q-checkbox v-model="right" label="REMEMBER" style="color: #9DAEB9"/>
                            </div>
                            <div class="col-6" style="margin-top: 15px">
                                <a href="#" style="color: #9DAEB9">FORGOT PASSWORD?</a>
                            </div>
                        </div>
                        <div style="margin-left: 25%; margin-right: 25%;">
                            <q-btn label="LOGIN" style="color: white; background-color: #2A5870; width: 100%; border-radius: 10px; margin-bottom:10px" :to="{ name: 'dash' }"/>
                            <q-btn label="REGISTRASI" style="color: #2A5870; background-color: white; width: 100%; border-radius: 10px" :to="{ name: 'registerGapari' }"/>
                        </div>
                    </div>
                </q-card>
            </div>
            <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl" style="padding-bottom: 300px"></div>
        </div>
    </q-page>
    <q-page v-if="$q.screen.xs || $q.screen.sm" class="flex flex-center bg1">
            <div class="text-center">
                <h5 style="color: #113A53; margin-top: -100px">
                    SELAMAT DATANG <span style="color: #1DA19F"> DI GAPARI </span>
                </h5>
            </div>
            <div class="my-card1">
                <q-card flat style="background-color: transparent;">
                    <p style="font-size: 22px; color: #AABBC3; margin-left: 20px">
                        USER LOGIN
                    </p>
                    <div class="kartu q-gutter-md">
                        <q-input standout="bg-teal text-white" v-model="email" label="email addres" :dense="dense" bg-color="blue-grey-5"/>
                        <q-input standout="bg-teal text-white" v-model="password" label="password" :dense="dense" bg-color="blue-grey-5"/>
                        <div class="row">
                            <div class="col-6 q-mt-xs">
                                <q-checkbox v-model="right" label="REMEMBER" style="color: #9DAEB9"/>
                            </div>
                            <div class="col-6" style="margin-top: 15px">
                                <a href="#" style="color: #9DAEB9">FORGOT PASSWORD?</a>
                            </div>
                        </div>
                        <div style="margin-left: 25%; margin-right: 25%;">
                            <q-btn label="LOGIN" style="color: white; background-color: #2A5870; width: 100%; border-radius: 10px; margin-bottom: 10px" :to="{ name: 'dashboard' }"/>
                            <q-btn label="REGISTRASI" style="color: #2A5870; background-color: white; width: 100%; border-radius: 10px" :to="{ name: 'registerGapari' }"/>
                        </div>
                    </div>
                </q-card>
            </div>
    </q-page>
</template>
<style scoped>
.bg {
    background-image: url("~assets/signIn-gapari.png");
    background-repeat: no-repeat;
    background-size: 100%;
}
.bg1 {
    background-image: url("~assets/signIn-gapari.png");
    background-size: cover;
    margin-left: -5px;
    margin-top: -5px;
}
.my-card {
    width: 100%;
    max-width: 300px;
    margin-left: 20%;
}
.my-card1 {
    width: 100%;
    max-width: 300px;
    margin-top: -500px;
}
.kartu {
    padding: 10px;
}
</style>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref(''),
      password: ref(''),
      right: ref(false),
      dense: ref(false)
    }
  }
}
</script>
