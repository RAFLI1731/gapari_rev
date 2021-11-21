<template>
    <q-page style="background-color: #E5EDD3;padding-bottom: 200px; margin-bottom: -100px">
        <div class="bg text-white">
            <h2>
                <b>Tentang Kami</b>
            </h2>
            <p style="font-size: 27px; margin-top: -40px">Dari Petani Untuk Dunia</p>
        </div>
        <div class="row" style="margin-top: 100px;">
            <div class="col-sm-6" style="text-align: center">
                <div class="q-pa-md row items-start q-gutter-md flex-center">
                    <q-card class="my-card flex flex-center icon" flat bordered >
                        <img src="~assets/icon.png" style="padding: 30px; width: 60%" class="flex flex-center">
                        <q-card-section>
                            <div class="text-h6">Produk Organik</div>
                            <div class="text-subtitle2">Dari komunitas petani terpilih yang bertani secara organik.</div>
                        </q-card-section>
                    </q-card>
                    <q-card class="my-card flex flex-center icon" flat bordered >
                        <img src="~assets/icon2.png" style="padding: 30px; width: 60%" class="flex flex-center">
                        <q-card-section>
                            <div class="text-h6">Produk Organik</div>
                            <div class="text-subtitle2">Dari komunitas petani terpilih yang bertani secara organik.</div>
                        </q-card-section>
                    </q-card>
                    <q-card class="my-card flex flex-center icon" flat bordered >
                        <img src="~assets/icon3.png" style="padding: 30px; width: 60%" class="flex flex-center">
                        <q-card-section>
                            <div class="text-h6">Produk Organik</div>
                            <div class="text-subtitle2">Dari komunitas petani terpilih yang bertani secara organik.</div>
                        </q-card-section>
                    </q-card>
                    <q-card class="my-card flex flex-center icon" flat bordered >
                        <img src="~assets/icon4.png" style="padding: 30px; width: 60%" class="flex flex-center">
                        <q-card-section>
                            <div class="text-h6">Produk Organik</div>
                            <div class="text-subtitle2">Dari komunitas petani terpilih yang bertani secara organik.</div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            <div class="col-sm-5" style="margin: 30px">
                <p class="text-green" style="font-size: 14px">Kenali Kami Lebih Baik</p>
                <h3 class="text-brown-10">
                    Bermitra dengan Petani Untuk menghasilkan Produk Berkualitas
                </h3>
                <p style="text-align: justify">
                    Sebuah sociopreneur start up di bidang pertanian yang berfokus pada pemberdayaan petani dan masyarakat untuk menghasilkan gula aren berkualitas yang diterima dengan baik di pasar lokal dan global.<br><br>
                    Untuk secara aktif memberdayakan petani dan komunitas lokal, memajukan produk pertanian dan memberikan nilai tambah di semua rantai pasokan untuk membantu meningkatkan dan meratakan perekonomian Indonesia.<br><br>
                    Menyediakan produk yang nikmat dan sehat.
                </p>
            </div>
        </div>
        <div class="row" style="margin-top: 100px;">
            <div class="col-sm-5" style="margin: 30px">
                <h4 class="text-brown-10" style="margin-left: 5%">
                    Bagaimana Kami Melakukannya?
                </h4>
                <ul>
                    <li>
                        Bermitra dengan Kelompok Tani (Gapoktan) dalam mengembangkan dan menjaga konsistensi kualitas produk.
                    </li>
                    <li>
                        Menciptakan dan mengembangkan Selsafical menjadi merek pilihan masyarakat Indonesia.
                    </li>
                    <li>
                        Melakukan edukasi manfaat dan kegunaan produk.
                    </li>
                    <li>
                        Membangun berbagai saluran distribusi dan titik penjualan, baik online, offline, lokal maupun global.
                    </li>
                </ul>
            </div>
            <div class="col-sm-6 flex flex-center" v-if="$q.screen.lg">
                <img src="~assets/mahorahora.jpeg" alt="">
            </div>
        </div>
    </q-page>
</template>
<style scoped>
.bg {
    margin-top: -150px;
    padding-top: 100px;
    padding-bottom: 5%;
    background-image: url('~assets/aren.jpg');
    background-size: cover;
    text-align: center;
    background-color: #E5EDD3;
}
.my-card {
    max-width: 250px;
}
.icon:hover{
    background-color: #FF7800;
    border: none;
    color: white;
}
</style>
<script>
import { useQuasar } from 'quasar'
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

    $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })

    return {
      text: ('')
    }
  }
}
</script>
