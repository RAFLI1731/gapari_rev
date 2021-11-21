<template>
<head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
</head>
    <q-page class="bg">
        <!-- SLIDE 1 -->
        <div class="row flex flex-center">
            <div class="col-sm-6 font" style="padding-top: 100px">
                <h3>SEJUTA RASA<br><br>GULA AREN</h3>
                <p class="font-sub">
                    Sejuta Rasa Gula Aren Memberi sejuta kebaikan kepada masyarakat Indonesia, ditanam dari bibit unggul untuk meningkatkan kualitas hidup dan memberdayakan petani lokal
                </p>
                    <div style="margin-top: 50px; margin-right: 10%" class="flex flex-center">
                        <q-btn label="Buy Now" class="btn-buyNow animasiButton"/>
                        <q-btn label="Watch Now" class="btn-watchNow animasiButton2"/>
                    </div>
            </div>
            <div class="col-sm-6 animasiPertama" style="margin-top: 100px" v-if="$q.screen.lg">
                <img src="~assets/cover_ari.png"/>
            </div>
            <!-- <div class="animInvinite1" style="margin-top: 260px;">
                <img src="~assets/animasiDaun.png" class="ukuran1"/>
            </div> -->
            <div class="animInvinite" style="margin-top: -300px" id="gambar1" v-if="$q.screen.lg">
                <img src="~assets/tree.png" class="ukuran"/>
            </div>
        </div>
        <!-- AKHIR SLIDE 1 -->
        <!-- SOSIAL ICON -->
        <div v-if="$q.screen.sm" style="margin-top: 100px"></div>
        <div>
            <div style="margin-left: 22%">
            <q-btn round class="q-mr-md animasiSosialIcon" flat>
            <q-avatar size="50px" >
                <img src="~assets/fb_hijau.png ">
            </q-avatar>
            </q-btn>
            <q-btn round class="q-mr-md animasiSosialIcon" flat>
            <q-avatar size="50px" >
                <img src="~assets/ig_hijau.png">
            </q-avatar>
            </q-btn>
            <q-btn round class="q-mr-md animasiSosialIcon" flat>
            <q-avatar size="50px" >
                <img src="~assets/wa_hijau.png">
            </q-avatar>
            </q-btn>
        </div>
        </div>
        <!-- AKHIR SOSIAL ICON -->
        <!-- TULISAN -->
        <div v-if="$q.screen.lg">
        <div class="row flex flex-center" style="margin-left: 8%; color: #31572C;">
            <div class="col-2">
                <h6>
                    INGREDIENS
                </h6>
                <p>
                    100% Organic
                </p>
            </div>
            <div class="col-2">
                <h6>
                    MATERIAL
                </h6>
                <p>
                    Food Grade
                </p>
            </div>
            <div class="col-2">
                <h6>
                    FLAVORS
                </h6>
                <p>
                    7 Variations
                </p>
            </div>
            <div class="col-2">
                <h6>
                    VOLUME
                </h6>
                <p>
                    180 Gram
                </p>
            </div>
            <div class="col-2" style="margin-top: 50px">
                <p>
                    Delivery
                </p>
                <p>
                    Free
                </p>
                <p>
                    Bandar Lampung
                </p>
            </div>
        </div>
        </div>
        <!-- AKHIR TULISAN -->
        <!-- SLIDE 2 -->
        <div class="row">
            <div v-if="$q.screen.lg">
                <div class="col-sm-5" style="margin-left: 15%; margin-top: 50px;" :class="{animasiGula1: scrollPosition > 600}">
                    <img src="~assets/gula2.png" alt="" style="border-radius: 50px">
                </div>
            </div>
            <div class="col-sm-4 cover_trans" style="text-align: center" :class="{animasiGula2: scrollPosition > 600}">
                <h5 >Gula Aren Vs Gula Semut</h5>
                <p style="text-align: left; padding-left: 10%; padding-right: 10%">
                    Dengan mengkonsumsi gula aren murni atau gula semut yang terbuat dari bahan-bahan organik maka kandungan indek glikemiknya rendah sekitar 35-45 sehingga tidak menyebabkan lonjakan gula darah.
                </p>
                    <q-btn label="Chat Kami" class="btn-buyNow"/>
                    <q-btn label="Baca Selengkapnya" class="btn-watchNow"/>
            </div>
        </div>
        <div v-if="$q.screen.sm">
            <div style="margin-top: 150px">
            </div>
        </div>
        <!-- SLIDE 2 -->
        <!-- Mengapa Selsafical -->
        <div v-if="$q.screen.lg">
            <div class="flex flex-center" style="margin-left: 6%; margin-top: 100px">
                <img src="~assets/mengapa.png" alt="">
            </div>
        </div>
        <!-- Akhir Mengapa Selsafical -->
        <!-- PRODUK -->
        <div style="text-align: center; margin-top: -100px" >
            <h5>
                Semua Produk Kami Organik dan Murni<br>
                tanpa Bahan Campuran Diolah Langsung dari Petani
            </h5>
        </div>
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
            <!-- KATA MEREKA -->
        <div class="bg1" style="padding-top: 100px; margin-top: -100px; margin-bottom: -100px; padding-bottom: 100px; ">
            <div style="margin-top: 100px">
                <div class="text-h4" style="font-weight: bold; text-align: center">
                    Kata Mereka Tentang Selsafical
                </div>
                <div class="q-pa-md row items-start q-gutter-md flex-center">
                    <div class="my-card1" :class="{animasiGulaAtas: scrollPosition > 2500}">
                        <q-img src="~assets/tentang1.png"/>
                    </div>
                    <div class="my-card1" :class="{animasiGulaBawah: scrollPosition > 2500}">
                        <q-img src="~assets/tentang2.png"/>
                    </div>
                    <div class="my-card1" :class="{animasiGulaAtas: scrollPosition > 2500}">
                        <q-img src="~assets/tentang3.png"/>
                    </div>
                    <div class="my-card1" :class="{animasiGulaBawah: scrollPosition > 2500}">
                        <q-img src="~assets/tentang4.png"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- AKHIR KATA MEREKA -->
        <!-- KONTAK -->
        <div style="text-align: center; margin-top: 100px; margin-bottom: -100px" class="bg1">
            <div class="text-h5">Kontak</div>
            <div class="text-h4">Tetap Terhubung dengan Selsafical</div>
            <a href="https://api.whatsapp.com/send?phone=6281906353550" style="color: white">
                <q-btn class="pilihSekarang shadow" label="Hubungi Kami" no-caps push  style="margin-bottom: 150px;"/>
            </a>
        </div>
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
.hide{
  visibility: hidden;
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
    $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
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
