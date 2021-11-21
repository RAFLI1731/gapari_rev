<template>
<head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
</head>
    <q-page class="bg" style="padding-top: 300px; padding-bottom: 200px; margin-bottom: -200px; margin-top: -200px">
        <!-- PRODUK -->
        <section id="produk">
        <div style="text-align: center; margin-top: -100px" >
            <h5>
                Semua Produk Kami Organik dan Murni<br>
                tanpa Bahan Campuran Diolah Langsung dari Petani
            </h5>
        </div>
        </section>
        <div class="row justify-center q-gutter-xl">
            <q-btn-toggle
                class="toogle"
                v-model="slide"
                toggle-color="white"
                toggle-text-color="green"
                text-color="white"
                color="green-9"
                value="tv"
                :options="[
                    { label: 'Gula Kelapa', value: '1' },
                ]"
            />
            <q-btn-toggle
                class="toogle"
                toggle-color="white"
                toggle-text-color="green"
                text-color="white"
                color="green-9"
                v-model="slide"
                value="tv"
                :options="[
                    { label: 'Gula Aren', value: '2' },
                ]"
            />
            <q-btn-toggle
                class="toogle"
                toggle-color="white"
                toggle-text-color="green"
                text-color="white"
                color="green-9"
                v-model="slide"
                value="tv"
                :options="[
                    { label: 'Gula Bit', value: '3' },
                ]"
            />
        </div>
            <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                animated
                class="rounded-borders bg1"
                style="width:100%; height: 800px;"
            >
            <q-carousel-slide name="1" class="column">
                <div class="q-pa-md row items-start q-gutter-md flex-center">
                <q-card class="my-card1 border skala produk" flat >
                    <q-img src="~assets/pp_1.jpg"/>
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Jahe Merah
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.26.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" :to="{name : 'gulaJaheMareh'}"/>
                        <q-btn flat color="primary" :to="{name : 'gulaJaheMareh'}">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_3.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Beras Kencur
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.27.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" :to="{ name: 'gulaBerasKencur' }"/>
                        <q-btn flat color="primary" :to="{ name: 'gulaBerasKencur' }">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_4.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Jahe
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.20.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" :to="{ name: 'gulaJahe' }"/>
                        <q-btn flat color="primary" :to="{ name: 'gulaJahe' }">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_5.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6 ">
                            Gula Semut Original
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.18.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" :to="{ name: 'gulaArenOriginal' }"/>
                        <q-btn flat color="primary" :to="{ name: 'gulaArenOriginal' }">
                        Lihat Detail
                        </q-btn >
                    </q-card-actions>
                </q-card>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="2" class="column">
                <div class="q-pa-md row items-start q-gutter-md flex-center">
                <q-card class="my-card1 border skala produk" flat >
                    <q-img src="~assets/pp_1.jpg"/>
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Jahe Merah
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.26.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary" >
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_3.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Beras Kencur
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.27.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_4.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Jahe
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.20.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_5.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6 ">
                            Gula Semut Original
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.18.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="3" class="column">
                <div class="q-pa-md row items-start q-gutter-md flex-center">
                <q-card class="my-card1 border skala produk" flat >
                    <q-img src="~assets/pp_1.jpg"/>
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Jahe Merah
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.26.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary" >
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_3.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Beras Kencur
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.27.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_4.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6">
                            Gula Semut Jahe
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.20.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card1 border skala produk" flat>
                    <q-img src="~assets/pp_5.jpg" />
                    <q-card-section>
                        <div class="row no-wrap items-center">
                        <div class="col text-h6 ">
                            Gula Semut Original
                        </div>
                        </div>
                        <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-green">
                        Rp.18.000
                        </div>
                        <div class="text-caption text-grey">
                        Paket Cafe, Lebih Hemat, 5 Botol Mahorahora Gula Aren Cair 1 Liter
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions>
                        <q-btn flat round icon="img:/icons/buy.svg" />
                        <q-btn flat color="primary">
                        Lihat Detail
                        </q-btn>
                    </q-card-actions>
                </q-card>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </q-page>
</template>
<style>
.bg {
    background-image: url('~assets/LandingPage.png');
    background-size: cover;
    margin-top: -200px;
}
.bg1 {
    background-image: url('~assets/LandingPage.png');
    background-size: cover;
}
.font {
    font-family: 'rockSalt';
    font-weight: bold;
    color: #A7CC34;
    letter-spacing: 4px;
    padding-top: 20px;
    padding-left: 13%;
    margin-top: 100px;
}
.font-sub {
    font-family: 'Calibri light';
    letter-spacing: 0px;
    color: black;
    font-weight: normal;
    font-size: 19px;
}
.btn-buyNow {
    background-color: #274623;
    color: white;
    padding-left: 7%;
    padding-right: 7%;
    font-family: 'Roboto';
    border-radius: 20px 20px 100px 20px;
    margin-right: 20px;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
}
.btn-watchNow {
    font-family: 'Roboto';
    background-color: #90A955;
    color: #274623;
    padding-left: 7%;
    padding-right: 7%;
    font-family: 'Roboto';
    border-radius: 100px 20px 20px 20px;
}
.btn-watchNow:hover {
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
}
.btn-buyNow:hover {
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
}
.cover_trans {
    margin-top: 75px;
    margin-bottom: 25px;
    background-image: url('~assets/coverTrans.png');
    border-radius: 50px;
    opacity: 80%;
}
.my-card {
    width: 100%;
    max-width: 300px;
}
.my-card1 {
    width: 100%;
    max-width: 280px;
}
.hosting{
    color: white;
    background-color: #FF9800;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 50px;
    font-size: 120%;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
}
.hosting:hover {
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #10da1a;
    transform: translateY(-7px);
}
.toogle{
    border-radius: 10px;
    font-size: 120%;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
}
.toogle:hover {
    background-color: #ffffff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #10da1a;
    transform: translateY(-7px);
}
.skala:hover {
    transform: scale(0.9);
}
.skala {
transition: transform .2s;
}
.border:hover {
    border-style: solid;
    border-color: rgba(148, 99, 9, 0.842);
}
.produk {
    border-radius: 20px;
    background-image: url('~assets/coverTrans.png');
    background-size: cover;
}
.pilihSekarang{
    margin-top: 5%;
    background-color: #A7CC34;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 50px;
    font-size: 120%;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
}
.pilihSekarang:hover {
    background-color: #ffffff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #10da1a;
    transform: translateY(-7px);
}
.shadow {
    box-shadow: 2px 2px 5px rgba(27, 27, 27, 0.8);
}
.animasiPertama {
    animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    --animate-delay: 2s;
}
.animasiGula1 {
    animation: slideInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    --animate-delay: 2s;
}
.animasiGula2 {
    animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    --animate-delay: 2s;
}
.animasiGulaAtas {
    animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    --animate-delay: 2s;
}
.animasiGulaBawah {
    animation: slideInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    --animate-delay: 2s;
}
.animasiSosialIcon:hover {
    animation: rotateIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    --animate-delay: 2s;
}
.animasiButton{
    animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
    --animate-delay: 3s;
}
.animasiButton2{
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
    --animate-delay: 3s;
}
.animInvinite {
    animation: pulse infinite; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 4s; /* don't forget to set a duration! */
    --animate-delay: 4s;
}
.animInvinite1 {
    animation: pulse infinite; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 5s; /* don't forget to set a duration! */
    --animate-delay: 5s;
}
.ukuran {
    width: 50%;
    margin-left: 120%;
}
.ukuran1 {
    width: 70%;
    margin-left: 120%;
}
</style>
<script>
import { useQuasar } from 'quasar'
import { onBeforeUnmount, ref } from 'vue'

export default {
  data () {
    return {
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
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      slide: ref('1'),
      stars: ref('4'),
      text: (''),
      showLoading () {
        $q.loading.show()

        // hiding in 2s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 1000)
      }
    }
  }
}
</script>
