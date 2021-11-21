<template>
    <q-page class="bg">
    <div class="produk" style="padding-top: 200px; margin-top: -150px; padding-bottom: 200px; margin-bottom: -100px; background-color: #E5EDD3;" v-if="$q.screen.lg">
                <div style="padding: 50px" class="animasi">
                <q-carousel
                    animated
                    v-model="slide"
                    navigation
                    infinite
                    :autoplay="autoplay"
                    arrows
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    @mouseenter="autoplay = false"
                    @mouseleave="autoplay = true"
                    style="border-radius: 10px"
                >
                    <q-carousel-slide :name="1" img-src="~assets/produk_1.jpg" />
                    <q-carousel-slide :name="2" img-src="~assets/produk_2.jpg" />
                    <q-carousel-slide :name="3" img-src="~assets/produk_3.jpg" />
                </q-carousel>
                </div>
            <div class="animasi2">
                <p style="font-weight:bold; font-size:30px; margin-top:50px">
                    GULA SEMUT ORIGINAL
                </p>
                <p style="font-weight:bold; font-size:20px; color: green; margin-top:-20px">
                    Rp. 16.500
                </p>
                <q-expansion-item
                    expand-separator
                    icon="book"
                    label="Deskripsi Produck"
                >
                    <q-card>
                    <q-card-section style="background-color: #E5EDD3">
                    <p>
                    Sertifikasi MUI No: 01231214710918<br>
                    PIRT No: 2093202011327-21<br>
                    Organik Indonesia : SNI6729:2016 529-INOFICE/LSO-003-IDN/03/20<br>
                    <br>
                    GULA AREN MAHORAHORA BUBUK MURNI DAN ORGANIK 1 KG<br>
                    <br>
                    Lebih sehat karena memiliki Indeks glikemik rendah (35-45) sehingga tidak menyebabkan lonjakan gula darah.<br>
                    <br>
                    Kualitas: Grade A<br>
                    Ukuran butiran : lebih halus (mesh 20)<br>
                    Kadar Air : kadar air yang rendah (1.2%)<br>
                    Kadar Kelarutan: kadar kelarutan yang tinggi (derajat brix 99.9%)<br>
                    Kemasan : paper bag yang dilapisi alufoil untuk menjaga kualitas, rasa dan aroma.<br>
                    <br>
                    Gula aren lebih sehat karena memiliki kadar glikemik dan sukrosa yang rendah. Selain itu mengandung Vitamin B dan berbagai mineral seperti kalsium, kalium, magnesium, zat besi dan sodium.<br>
                    <br>
                    Kemasan yang cantik, praktis dan higienis.<br>
                    <br>
                    Gula Aren Mahorahora. Lebih Nikmat dan Sehat.<br>
                    <br>
                    Terima harga grosir, reseller, dan partai besar<br>
                    </p>
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
                <q-expansion-item
                    expand-separator
                    icon="colorize"
                    label="Spesifikasi Product"
                >
                    <q-card>
                    <q-card-section style="background-color: #E5EDD3">
                        <p><strong>Merek</strong>  :  Gula Aren Bubuk </p>
                        <p><strong>Kadaluarsa</strong>  :  Maret 2020 </p>
                        <p><strong>Umur Simpan</strong>  :  12 Bulan </p>
                        <p><strong>Stok</strong>  :  100 </p>
                        <p><strong>Dikirim Dari</strong>  :  Bandar Lampung - Lampung, ID </p>
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
                <div class="row" style="margin-top: 50px;">
                    <div class="col-5" >
                    <q-btn-dropdown
                    split
                    color="green-6"
                    label="Beli Sekarang"
                    @click="onMainClick"
                    size="18px"
                    >
                    <q-list>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section avatar>
                            <q-avatar icon="img:/icons/shopeee.png" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                            <a href="https://shopee.co.id/selsafical" style="color: black; text-decoration: none;">
                              <q-item-label>Shopee</q-item-label>
                              <q-item-label caption>Beli Sekarang</q-item-label>
                            </a>
                        </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section avatar>
                            <q-avatar icon="img:/icons/tokpe.png" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <a href="https://www.tokopedia.com/selsafical" style="color: black; text-decoration: none;">
                            <q-item-label>TokoPedia</q-item-label>
                            <q-item-label caption>Beli Sekarang</q-item-label>
                          </a>
                        </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section avatar>
                            <q-avatar icon="img:/icons/wa.png" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <a href="https://api.whatsapp.com/send?phone=6282121508767" style="color: black; text-decoration: none;">
                            <q-item-label>WhatsApp</q-item-label>
                            <q-item-label caption>Beli Sekarang</q-item-label>
                          </a>
                        </q-item-section>
                        </q-item>
                    </q-list>
                    </q-btn-dropdown>
                </div>
                </div>
                <div>
                </div>
            </div>
            </div>
            <!-- IF  LAYAR KECIL-->
            <div style="margin-top: -150px; padding-top: 200px; padding-bottom: 100px; margin-bottom: -75px" v-if="$q.screen.sm || $q.screen.md">
                    <div class="animasi col-5" style="margin: 50px">
                    <q-carousel
                        animated
                        v-model="slide"
                        navigation
                        infinite
                        :autoplay="autoplay"
                        arrows
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        @mouseenter="autoplay = false"
                        @mouseleave="autoplay = true"
                        style="border-radius: 10px"
                    >
                        <q-carousel-slide :name="1" img-src="~assets/produk_1.jpg" />
                        <q-carousel-slide :name="2" img-src="~assets/produk_2.jpg" />
                        <q-carousel-slide :name="3" img-src="~assets/produk_3.jpg" />
                    </q-carousel>
                    </div>
            <div class="col-6">
                <p style="font-weight:bold; font-size:25px; margin-left: 5%">
                    GULA SEMUT ORIGINAL
                </p>
                <p style="font-weight:bold; font-size:20px; color: green; margin-top:-20px; margin-left: 5%">
                    Rp. 16.500
                </p>
                <q-expansion-item
                    expand-separator
                    icon="book"
                    label="Deskripsi Produck"
                    style=" margin-left: 5%"
                >
                    <q-card>
                    <q-card-section style="background-color: #E5EDD3">
                    <p>
                    Sertifikasi MUI No: 01231214710918<br>
                    PIRT No: 2093202011327-21<br>
                    Organik Indonesia : SNI6729:2016 529-INOFICE/LSO-003-IDN/03/20<br>
                    <br>
                    GULA AREN MAHORAHORA BUBUK MURNI DAN ORGANIK 1 KG<br>
                    <br>
                    Lebih sehat karena memiliki Indeks glikemik rendah (35-45)<br>
                    sehingga tidak menyebabkan lonjakan gula darah.<br>
                    <br>
                    Kualitas: Grade A<br>
                    Ukuran butiran : lebih halus (mesh 20)<br>
                    Kadar Air : kadar air yang rendah (1.2%)<br>
                    Kadar Kelarutan: kadar kelarutan yang tinggi (derajat brix 99.9%)<br>
                    Kemasan : paper bag yang dilapisi alufoil untuk menjaga kualitas, rasa dan aroma.<br>
                    <br>
                    Gula aren lebih sehat karena memiliki kadar glikemik dan sukrosa yang rendah.<br>
                    Selain itu mengandung Vitamin B dan berbagai mineral seperti kalsium, kalium,<br>
                    magnesium, zat besi dan sodium.<br>
                    <br>
                    Kemasan yang cantik, praktis dan higienis.<br>
                    <br>
                    Gula Aren Mahorahora. Lebih Nikmat dan Sehat.<br>
                    <br>
                    Terima harga grosir, reseller, dan partai besar<br>
                    </p>
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
                <q-expansion-item
                    expand-separator
                    icon="colorize"
                    label="Spesifikasi Product"
                    style=" margin-left: 5%"
                >
                    <q-card>
                    <q-card-section style="background-color: #E5EDD3">
                        <p><strong>Merek</strong>  :  Gula Aren Bubuk </p>
                        <p><strong>Kadaluarsa</strong>  :  Maret 2020 </p>
                        <p><strong>Umur Simpan</strong>  :  12 Bulan </p>
                        <p><strong>Stok</strong>  :  100 </p>
                        <p><strong>Dikirim Dari</strong>  :  Bandar Lampung - Lampung, ID </p>
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
                <div class="row" style="margin-top: 50px; margin-left: 7%">
                    <div class="col-5" >
                    <q-btn-dropdown
                    split
                    color="green-6"
                    label="Beli Sekarang"
                    @click="onMainClick"
                    size="15px"
                    >
                    <q-list>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section avatar>
                            <q-avatar icon="img:/icons/shopeee.png" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                            <a href="https://shopee.co.id/selsafical" style="color: black; text-decoration: none;">
                              <q-item-label>Shopee</q-item-label>
                              <q-item-label caption>Beli Sekarang</q-item-label>
                            </a>
                        </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section avatar>
                            <q-avatar icon="img:/icons/tokpe.png" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <a href="https://www.tokopedia.com/selsafical" style="color: black; text-decoration: none;">
                            <q-item-label>TokoPedia</q-item-label>
                            <q-item-label caption>Beli Sekarang</q-item-label>
                          </a>
                        </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section avatar>
                            <q-avatar icon="img:/icons/wa.png" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <a href="https://api.whatsapp.com/send?phone=6282121508767" style="color: black; text-decoration: none;">
                            <q-item-label>WhatsApp</q-item-label>
                            <q-item-label caption>Beli Sekarang</q-item-label>
                          </a>
                        </q-item-section>
                        </q-item>
                    </q-list>
                    </q-btn-dropdown>
                </div>
                </div>
                <div>
                </div>
            </div>
            </div>
    </q-page>
</template>

<style lang="scss" scoped>
.bg {
    background-color: #E5EDD3;
}
.jarak {
    width: 180px;
}
.produk {
    display: grid;
    grid-template-columns: 50% 50%;
}
.variasi {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 15% 85%;
}
.kuantitas {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 15% 85%;
}
.beli {
    display: grid;
    grid-template-columns: 20% 20% 20%;
}
.deskripsi {
    display: grid;
    grid-template-columns: 100%;
}
.size {
    width: 400px;
    margin-top: -150px;
}
.judul {
    margin-top: -10px;
    text-align: left;
    font-weight: bold;
    font-size: 50px;
    font-family:'Times New Roman', Times, serif;
}
.footer-img {
    width: 200px;
    margin-left: 70px;
}
.tokped {
    width: 100px;
    height: 35px;
}
.shopee {
    width: 100px;
    height: 40px;
}
.layout-footer {
    display: grid;
    grid-template-columns: 35% 25% 20% 20%;
    padding: 4em 1em;
}
.layout-footer1 {
    display: grid;
    grid-template-columns: 100%;
}
.layout-footer2 {
    display: grid;
    grid-template-columns: 30% 20% 50%;
}
// deskrip
.deskrip {
  width: 100px;
  height: 100px;
  background: transparent;
  transition: height 1s;
}

.deskrip:hover{
  height: 300px;
}

.logo{
  text-align: left;
  float: left;
}

.kontakwa{
  text-align: right;
  margin-right: 10px;
  float: right;
}
.animasi {
  animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
--animate-delay: 0.9s;
}
.animasi2 {
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
--animate-delay: 0.9s;
}
.mycard {
    width: 100%;
    min-width: 700px;
}
</style>
<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
export default {
  setup () {
    const $q = useQuasar()
    const onItemClick = ''
    $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
    return {
      onItemClick,
      onClick () {
        // console.log('Clicked on a fab action')
      },
      onMainClick () {
        // console.log('Clicked on main button')
      },
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
