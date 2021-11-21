<template>
<!-- Dasboard -->
    <q-page class="bg">
        <div class="tulisan">
            <p class="warna1 text-white">
                #Siap Jadi Pahlawan <br> Rimbawan Dermawan
            </p>
            <p class="tulisan2 text-white">
                Saatnya GaPokTanHut berperan dalam pembagunan desa<br>
                dengan semangat kolaborasi hanya dengan satu aplikasi
            </p>
        </div>
    </q-page>
    <q-page>
        <div style="margin-top: -200px" v-if="$q.screen.xs || $q.screen.sm"/>
        <div class="text-center" style="color: #3A4166; padding-left: 5%; padding-right: 5%">
            <h4>Membuat Situs Web Dengan cepat, mudah dan Aman</h4>
        </div>
        <div class="row">
            <div class="col-6 card2">
                <div style="margin-top: -150px" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"/>
                <q-img src="~assets/website-fitur.png" />
            </div>
            <div class="col-4 card" style="text-align: justify">
                <div style="margin-top: -100px" v-if="$q.screen.xs || $q.screen.sm"/>
                <div style="margin-top: 100px" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"/>
                <p style="font-size: 17px; color: #6C906B">
                    Ubah ide menjadi kenyataan
                </p>
                <h5 style="margin-top: -10px">
                    Bangun Website cuman dengan klik
                </h5>
                <p style="color: #959794; margin-top: -20px;font-size: 15px">
                    Dengan Gapari, Anda dapat mengubah imajinasi Anda menjadi kenyataan. Semua alat dan fitur disediakan untuk membantu Anda membuat situs
                </p>
                <q-btn label="Klik Sekarang" class="text-white btn" no-caps/>
            </div>
        </div>
        <div class="row" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl" style="margin-top: -100px; margin-bottom: 100px">
            <div class="offset-2 col-4">
                <h4 style="color: #588157">Mengapa Website Desa</h4>
                <p style="color: #797979">Pemerintah desa dituntut untuk menyebarkan informasi lebih cepat, salah satunya menggunakan media website. Ada banyak manfaat apabila sebuah desa memiliki website</p>
            </div>
            <div class="col-4">
                <q-img src="~assets/info-website.png"/>
            </div>
        </div>
        <div class="row" v-if="$q.screen.sm || $q.screen.xs">
            <div class="col-4 card3">
                <h5 style="color: #588157">Mengapa Website Desa</h5>
                <p style="margin-top: -25px">Pemerintah desa dituntut untuk menyebarkan informasi lebih cepat, salah satunya menggunakan media website. Ada banyak manfaat apabila sebuah desa memiliki website</p>
            </div>
            <div class="col-4 card3">
                <q-img src="~assets/info-website.png"/>
            </div>
        </div>
        <div class="row" style="margin-top: 30px">
            <div style="margin-left: 100px" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"/>
            <div class="col-3 card-info">
                <div style="width: 22%">
                    <q-img src="~assets/potensi.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Memperkenalkan Potensi Desa
                    </h5>
                    <p style="text-align: justify; color: #818181">
                        Setiap desa di Indonesia memiliki potensi yang beragam. Namun orang luat tidak akan tahu potensi apa yang bisa dikembangkan apabila dari pemerintahan desa tidak memberikan informasi yang jelas
                    </p>
                </div>
            </div>
            <div class="col-3 card-info">
                <div style="width: 20%">
                    <q-img src="~assets/informasi.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Informasi Pembangunan Desa
                    </h5>
                    <p style="text-align: justify; color: #818181">
                        Pemetintah disebut berhasil dalam pembangunan apabila bisa melakukan pemerataan pembangunan mulai dari pusat hingga ke level desa. Dengan website desa, pemerintah desa menjadi lebih cepat dalam memberikan informasi ke luar
                    </p>
                </div>
            </div>
            <div class="col-3 card-info">
                <div style="width: 20%">
                    <q-img src="~assets/media.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Media Promosi
                    </h5>
                    <p style="text-align: justify; color: #818181">
                        Website desa bisa mempromosikan keunikan desa yang dimiliki sseperti potensi alam maupun sumber daya manusia yang ada. Misalnya dengan memperkenalkan desa wisata ataupun produk-produk kerajinan masyarakat maupun UKM yang sedang dikembangkan
                    </p>
                </div>
            </div>
        </div>
<!-- Apa yang didapatkan di Gapari -->
        <!-- <div class="flex flex-center">
            <div class="gapari text-center">
                <h4>
                    Apa yang anda dapatkan di pembuatan website Gapari?
                </h4>
                <p style="color: #898989; font-size: 18px">
                    Seluruh tim senantiasa bekerja memenuhi kebutuhan dan hasil yang memuaskan untuk pembuatan website anda
                </p>
            </div>
        </div>
        <div class="row flex flex-center q-mt-xl">
            <div class="col-4 card-info2 text-center flex flex-center">
                <div style="width: 100px">
                    <q-img src="~assets/contoh1.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Tempat Untuk Memasarkan Produk
                    </h5>
                </div>
                <p style="color: #818181">
                    Sebagai Platform atau tempat untuk memasarkan produk anda dengan jangkauan yang luas
                </p>
            </div>
            <div class="col-4 card-info2 text-center flex flex-center">
                <div style="width: 100px">
                    <q-img src="~assets/contoh2.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        User Friendly
                    </h5>
                </div>
                <p style="color: #818181">
                    Tampilan didalam website menjamin user untuk lebih mudah dalam pengoprasiannya
                </p>
            </div>
            <div class="col-4 card-info2 text-center flex flex-center">
                <div style="width: 100px">
                    <q-img src="~assets/contoh1.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Tempat Untuk Memasarkan Produk
                    </h5>
                </div>
                <p style="color: #818181">
                    Tim berpengalaman yang siap bekerja untuk memberi hasil yang terbaik
                </p>
            </div>
            <div class="col-4 card-info2 text-center flex flex-center">
                <div style="width: 100px">
                    <q-img src="~assets/contoh2.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Tempat Untuk Memasarkan Produk
                    </h5>
                </div>
                <p style="color: #818181">
                    Tim berpengalaman yang siap bekerja untuk memberi hasil yang terbaik
                </p>
            </div>
            <div class="col-4 card-info2 text-center flex flex-center">
                <div style="width: 100px">
                    <q-img src="~assets/contoh1.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Tempat Untuk Memasarkan Produk
                    </h5>
                </div>
                <p style="color: #818181">
                    Tim berpengalaman yang siap bekerja untuk memberi hasil yang terbaik
                </p>
            </div>
            <div class="col-4 card-info2 text-center flex flex-center">
                <div style="width: 100px">
                    <q-img src="~assets/contoh2.png"/>
                </div>
                <div>
                    <h5 style="color: #588157">
                        Tempat Untuk Memasarkan Produk
                    </h5>
                </div>
                <p style="color: #818181">
                    Tim berpengalaman yang siap bekerja untuk memberi hasil yang terbaik
                </p>
            </div>
        </div> -->
<!-- Contoh Template Website -->
        <div style="margin-bottom: 50px">
            <h4 style="color: #588157" class="text-center">Contoh Template Website</h4>
            <div class="row">
                <div class="col-6 flex flex-center" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl" style="padding-left: 5%;">
                    <q-img src="~assets/dashboard-selsafical.png"/>
                </div>
                <div class="col-12 flex flex-center" v-if="$q.screen.xs || $q.screen.sm" style="padding-left: 5%; padding-right:5%">
                    <q-img src="~assets/dashboard-selsafical.png"/>
                </div>
                <div class="col-4 card-fitur">
                    <h5>Selsafical</h5>
                    <p class="text-justify" style="color: #797979">
                        Selsafical adalah sebuah UMKM yang bergerak di bidang industri gula, untuk produk selsafical sendiri sekarang baru menyediakan gula aren cetak dan gula aren semut, website selsafical sendiri dibuat dengan tujuan untuk membantu pemasaran produk berjalan dengan cepat dan untuk melakukan upaya promosu yang lebih baik, dengan mempunyai webiste sendiri perusahaan akan terlihat lebih mapan dan kemungkinan untuk export akan sangat tinggi
                    </p>
                    <p style="color: #A2B18A">
                        Klik untuk melihat Webiste Selsafical
                    </p>
                    <q-btn label="Klik Sekarang" class="text-white btn" no-caps :to="{ name: 'index' }"/>
                </div>
            </div>
        </div>
        <!-- <div v-if="$q.screen.xs || $q.screen.sm" style="margin-bottom: -120px" />
        <div class="row flex flex-center q-gutter-md q-mb-xl" style="margin-top: 200px">
            <div class="col-3 harga">
                <q-card style="border-radius: 20px">
                    <div class="flex flex-center">
                        <q-btn label="STANDART" class="text-white card-btn" flat/>
                    </div>
                    <div class="text-center flex flex-center">
                        <div class="q-mt-xl q-mb-md">
                            <b><span style="font-size: 30px">Rp </span><span style="font-size: 40px">1.97 </span><span style="font-size: 30px">juta</span></b>
                        </div>
                        <p style="width: 80%; color: #797979; font-size: 12px">
                            Biaya perpanjangan Rp. 1.5 jt/tahun termasuk biaya maintenance website
                        </p>
                        <div class="text-left q-gutter-sm" style="color: #797979; font-size: 16px">
                            <li>
                                Free Domain (.com)(.net)
                            </li>
                            <li>
                                Unlimited Hosting
                            </li>
                            <li>
                                3 Halaman / Page
                            </li>
                            <li>
                                Mobile & SEO Friendly
                            </li>
                            <li>
                                Premium Design & Fast Loading
                            </li>
                        </div>
                        <q-btn label="Hubungi Kami" icon="whatsapp" class="card-btn1 q-mb-xl text-white" no-caps/>
                    </div>
                </q-card>
                <div v-if="$q.screen.xs || $q.screen.sm" style="margin-bottom: 150px;" />
            </div>
            <div class="col-3 harga">
                <q-card style="margin-top: -100px; border-radius: 20px; background-color: #588157" class="text-white">
                    <div class="flex flex-center">
                        <q-btn label="MEDIUM" class="text-white card-btn" flat/>
                    </div>
                    <div class="text-center flex flex-center">
                        <div class="q-mt-xl q-mb-md">
                            <b><span style="font-size: 30px">Rp </span><span style="font-size: 40px">3.8 </span><span style="font-size: 30px">juta</span></b>
                        </div>
                        <p style="width: 80%; font-size: 12px">
                            Biaya perpanjangan Rp. 1.5 jt/tahun termasuk biaya maintenance website
                        </p>
                        <div class="text-left q-gutter-sm" style="font-size: 16px">
                            <li>
                                Free Domain (.com)(.net)
                            </li>
                            <li>
                                Unlimited Hosting
                            </li>
                            <li>
                                3 Halaman / Page
                            </li>
                            <li>
                                Mobile & SEO Friendly
                            </li>
                            <li>
                                Premium Design & Fast Loading
                            </li>
                        </div>
                        <q-btn label="Hubungi Kami" icon="whatsapp" class="card-btn1 q-mb-xl text-white" no-caps/>
                    </div>
                </q-card>
                <div v-if="$q.screen.xs || $q.screen.sm" style="margin-bottom: 75px" />
            </div>
            <div class="col-3 harga">
                <q-card style="border-radius: 20px">
                    <div class="flex flex-center">
                        <q-btn label="PREMIUM" class="text-white card-btn" flat/>
                    </div>
                    <div class="text-center flex flex-center">
                        <div class="q-mt-xl q-mb-md">
                            <b><span style="font-size: 30px">Rp </span><span style="font-size: 40px">4.97 </span><span style="font-size: 30px">juta</span></b>
                        </div>
                        <p style="width: 80%; color: #797979; font-size: 12px">
                            Biaya perpanjangan Rp. 1.5 jt/tahun termasuk biaya maintenance website
                        </p>
                        <div class="text-left q-gutter-sm" style="color: #797979; font-size: 16px">
                            <li>
                                Free Domain (.com)(.net)
                            </li>
                            <li>
                                Unlimited Hosting
                            </li>
                            <li>
                                3 Halaman / Page
                            </li>
                            <li>
                                Mobile & SEO Friendly
                            </li>
                            <li>
                                Premium Design & Fast Loading
                            </li>
                        </div>
                        <q-btn label="Hubungi Kami" icon="whatsapp" class="card-btn1 q-mb-xl text-white" no-caps/>
                    </div>
                </q-card>
            </div>
        </div> -->
    </q-page>
</template>
<script>
</script>
<style scoped>
.bg{
    margin-top: 0px;
    background-image: url("~assets/sulaiman.png");
    background-size: cover;
    padding-bottom: 320px;
    padding-top: 100px;
}
.tulisan {
    padding-top: 100px;
    padding-left: 5%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 45px;
}
.tulisan2 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 17px;
    color: #444F4A;
}
.warna {
    color: #B1C792;
}
.warna1 {
    color: #1B556B;
}
.fiturText {
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 45px;
    margin-top: 50px;
}
.card {
    width: 100%;
    max-width: 550px;
    padding-left: 5%;
    padding-right: 5%;
}
.card2 {
    width: 100%;
    max-width: 650px;
}
.card3 {
    width: 100%;
    max-width: 450px;
    padding-left: 5%;
    padding-right: 5%;
    text-align: justify;
}
.btn {
    background-color: #A2B18A;
    border-radius: 10px;
    padding-left: 7%;
    padding-right: 7%;
    font-size: 17px;
}
.card-info {
    width: 100%;
    max-width: 400px;
    padding-left: 5%;
    padding-right: 5%;
}
.card-info2 {
    width: 100%;
    max-width: 430px;
    padding-left: 5%;
    padding-right: 5%;
}
.card-fitur {
    width: 100%;
    max-width: 600px;
    padding-left: 5%;
    padding-right: 5%;
}
.gapari {
    width: 100%;
    max-width: 600px;
    margin-left: 5%;
    margin-right: 5%;
}
.card-btn {
    margin-top: -20px;
    width: 80%;
    background-color: #A2B18A;
    border-radius: 10px;
}
.card-btn1 {
    width: 60%;
    background-color: #A2B18A;
    border-radius: 10px;
    margin-top: 100px;
}
.harga {
    width: 100%;
    max-width: 300px;
    margin-left: 3%;
    margin-right: 3%;
}
</style>
