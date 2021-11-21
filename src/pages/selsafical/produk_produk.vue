<template>
<head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    </head>
    <q-page>
        <div class="bg flex flex-center">
            <h1><b>Produk</b></h1>
        </div>
        <div class="flex flex-center">
            <p style="color: teal; font-size: 40px; text-align: center">Semua Produk Selsafical</p>
        </div>
        <div class="q-pa-md row items-start q-gutter-md flex-center">
            <q-card class="my-card border skala" flat :to="{name : 'produkRinci'}">
                <q-img src="~assets/pp_1.jpg" />

                <q-card-section>
                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
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
                    <q-btn flat round icon="img:/icons/buy.svg" :to="{name : 'produkRinci'}"/>
                    <q-btn flat color="primary" :to="{name : 'produkRinci'}">
                    Lihat Detail
                    </q-btn>
                </q-card-actions>
            </q-card>
            <q-card class="my-card border skala" flat>
                <q-img src="~assets/pp_3.jpg" />

                <q-card-section>
                    <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    /> -->

                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
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
            <q-card class="my-card border skala" flat>
                <q-img src="~assets/pp_4.jpg" />

                <q-card-section>
                    <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    /> -->

                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
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
            <q-card class="my-card border skala" flat>
                <q-img src="~assets/pp_5.jpg" />

                <q-card-section>
                    <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    /> -->

                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
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
            <q-card class="my-card border skala" flat>
                <q-img src="~assets/pp_6.jpg" />

                <q-card-section>
                    <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    /> -->

                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        Gula Semut Beras Kencur
                    </div>
                    </div>

                    <q-rating v-model="stars" :max="5" size="32px" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="text-subtitle1 text-green">
                    Rp.23.000
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
                <q-card class="my-card border skala" flat>
                        <q-img src="~assets/pp_7.jpg" />

                        <q-card-section>
                            <!-- <q-btn
                            fab
                            color="primary"
                            icon="place"
                            class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);"
                            /> -->

                            <div class="row no-wrap items-center">
                            <div class="col text-h6 ellipsis">
                                Gula Semut Temulawak
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
                            <q-btn flat color="primary">
                            Lihat Detail
                            </q-btn>
                        </q-card-actions>
                </q-card>
            <q-card class="my-card border skala" flat>
                <q-img src="~assets/pp_8.jpg" />

                <q-card-section>
                    <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    /> -->

                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        Gula Semut Kunyit Asam
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
            <q-card class="my-card border skala" flat>
                <q-img src="~assets/pp_9.jpg"/>

                <q-card-section>
                    <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                    /> -->

                    <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        Gula Semut Beras Kencur
                    </div>
                    </div>

                    <q-rating v-model="stars" :max="5" size="32px" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="text-subtitle1 text-green">
                    Rp.25.000
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
    </q-page>
</template>
<style lang="css" scoped>
.bg {
    margin-top: -97px;
    padding-top: 10%;
    color: white;
    background-image: url('~assets/gulaAren.jpg');
    background-size: cover;
}
.my-card {
  width: 100%;
  max-width: 300px;
}
.button {
  background: none;
  border: 0;
  box-sizing: border-box;
  padding-top: 5px;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
}
.button::before, .button::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}
/* .center:hover {
  color: #37da0e;
} */
.center::before, .center::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform-origin: center;
}
.center::before {
  border-top: 2px solid #8b5e0b;
  border-bottom: 2px solid #8b5e0b;
  transform: scale3d(0, 1, 1);
}
.center::after {
  border-left: 2px solid #8b5e0b;
  border-right: 2px solid #8b5e0b;
  transform: scale3d(1, 0, 1);
}
.center:hover::before, .center:hover::after {
  transform: scale3d(1, 1, 1);
  transition: transform 0.5s;
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
</style>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4)
    }
  }
}
</script>
