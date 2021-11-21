<template>
    <q-layout>
        <q-header class="text-white" style="background-color: #E1E8D2;">
            <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <q-toolbar style="position: fixed; background-color: #A2B18A;" class="flex flex-center">
                    <q-tabs v-model="tab" shrink
                        active-color="white"
                        indicator-color="white"
                        >
                        <q-route-tab name="tab1" :to="{ name: 'dash'}" label="dashboard" class="text-white jarak2" exact/>
                        <a href="admin.gapari.id" style="color: white; text-decoration: none">
                            <q-tab name="tab2" label="Akuntansi" class="text-white jarak2"/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=6281318608323" style="color: white; text-decoration: none">
                            <q-tab name="tab3" label="kontak" class="text-white jarak2"/>
                        </a>
                        <q-route-tab>
                            <q-img src="~assets/logo.png" style="width: 100px"></q-img>
                        </q-route-tab>
                        <q-route-tab name="tab4" :to="{ name: 'website'}" label="website" class="text-white jarak2 jarak1" exact/>
                        <q-route-tab name="tab5" label="Konten" class="text-white jarak2"/>
                        <q-route-tab name="tab6" label="Acara" class="text-white jarak2"/>
                    </q-tabs>
                    <!-- <q-btn :to="{ name: 'loginGapari' }" label="Login" outline class="jarak1" rounded style="color: #4C6B4D"/> -->
                </q-toolbar>
            </div>
            <div v-if="$q.screen.xs || $q.screen.sm">
            <q-toolbar style="position: fixed; background-color: #A2B18A;">
            <q-btn flat @click="drawer = !drawer" round icon="menu" color="white"/>
            <q-drawer
                style="background-color: #A2B18A;"
                v-model="drawer"
                :width="200"
                :breakpoint="500"
                overlay
                side="right"
            >
                <q-scroll-area class="fit">
                    <q-list padding class="menu-list">
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="home" />
                        </q-item-section>
                        <q-item-section>
                            Home
                        </q-item-section>
                    </q-item>
                    <q-item  clickable v-ripple :to="{ name: 'website' }">
                        <q-item-section avatar>
                            <q-icon name="web" />
                        </q-item-section>
                        <q-item-section>
                            Website
                        </q-item-section>
                    </q-item>
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="videocam" />
                        </q-item-section>
                        <q-item-section>
                            Konten
                        </q-item-section>
                    </q-item>
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note_alt" />
                        </q-item-section>
                        <q-item-section>
                            Acara
                        </q-item-section>
                    </q-item>
                </q-list>
                </q-scroll-area>
            </q-drawer>
            </q-toolbar>
            </div>
        </q-header>
        <q-footer>
            <q-toolbar class="footer" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <div class="row no-wrap">
                    <div class="col-3 mycard1">
                        <q-img src="~assets/logo.png"/>
                    </div>
                    <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl" class="col-1"/>
                    <div class="col-3 q-pa-xl mycard">
                        <div class="q-gutter-md flex flex-left">
                            <q-btn round  class="bg-transparent" icon="import_contacts" flat />
                            <p class="q-pt-sm">Gedong Meneng, Rajabasa, 35148<br>
                            Bandar Lampung, Indonesia</p>
                        </div>
                        <div class="q-gutter-md flex flex-left">
                            <q-btn round  class="bg-transparent" icon="call" flat/>
                                <p class="q-pt-sm">+62 82121 508767</p>
                        </div>
                        <div class="q-gutter-md flex flex-left">
                            <q-btn round  class="bg-transparent" icon="email" flat/>
                            <p class="q-pt-sm">
                                <b>gapari-info@gmail.com</b>
                            </p>
                        </div>
                    </div>
                    <div class="col-4 text-justify q-pa-xl mycard">
                        <p><b> Tentang Gapari </b></p>
                        Gapari adalah sebuah website yang digunakan untuk mengelola segala aktifitas dari gapoktan mulai dari pembukuan hingga pemasaran produk
                    </div>
                </div>
            </q-toolbar>
<!--  -->
           <q-toolbar class="footer" v-if="$q.screen.xs || $q.screen.sm">
                <div class="row">
                    <div class="col-3 mycard1">
                        <q-img src="~assets/logo.png"/>
                    </div>
                    <div class="col-3 q-pa-xl mycard">
                        <div class="q-gutter-md flex flex-left">
                            <q-btn round  class="bg-transparent" icon="import_contacts" flat />
                            <p class="q-pt-sm">21 Revolution Street<br>
                            Paris, France</p>
                        </div>
                        <div class="q-gutter-md flex flex-left">
                            <q-btn round  class="bg-transparent" icon="call" flat/>
                                <p class="q-pt-sm">+62 82121 508767</p>
                        </div>
                        <div class="q-gutter-md flex flex-left">
                            <q-btn round  class="bg-transparent" icon="email" flat/>
                            <p class="q-pt-sm">
                                <b>gapari-info@gmail.com</b>
                            </p>
                        </div>
                    </div>
                    <div class="col-4 text-justify q-pa-xl mycard">
                        Gapari adalah sebuah website yang digunakan untuk mengelola segala aktifitas dari gapoktan mulai dari pembukuan hingga pemasaran produk
                    </div>
                </div>
            </q-toolbar>
        </q-footer>
    <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  data () {
    return {
      drawer: false,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  setup () {
    const $q = useQuasar()
    $q.screen.setSizes({ sm: 200, md: 500, lg: 1000, xl: 2000 })
    console.log($q.platform.is.ios)
    return {
      tab: ref(''),
      tab1: ref('')
    }
  }
}
</script>
<style scoped>
.footer {
    background-color: #A2B18A;
    color: white;
}
.change_color{
    background-color: #E1E8D2;
    color:#60885E;
}
.jarak1 {
    margin-left: 30px;
}
.jarak2 {
    margin-right: 50px;
}
.mycardlogo {
    width: 70%;
    max-height: 300px;
}
.mycard {
    width: 100%;
    max-width: 400px;
}
.mycard1 {
    width: 100%;
    max-width: 400px;
}
.mycard2 {
    margin-top: 50px;
    padding-right: 20%;
    padding-left: 10%;
}

</style>
