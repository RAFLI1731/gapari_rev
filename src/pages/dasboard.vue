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
<!-- FITUR -->
    <q-page>
            <h3 style="text-align:center" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                Mengapa gapari.id
            </h3>
            <h3 style="text-align:center; margin-top: -120px; font-size: 32px;" v-if="$q.screen.xs || $q.screen.sm">
                Mengapa gapari.id
            </h3>
        <div class="row flex flex-center items-start" style="text-align: center; color: #395A3F">
            <div class="col-1 kartu">
                <q-img src="~assets/icon_1.png" style="height: 70px; max-width: 70px" />
                <p>
                    MODAL
                </p>
            </div>
            <div class="col-1 kartu">
                <q-img src="~assets/icon_2.png" style="height: 70px; max-width: 70px"/>
                <p>
                    SDM
                </p>
            </div>
            <div class="col-1 kartu">
                <q-img src="~assets/icon_3.png" style="height: 70px; max-width: 70px"/>
                <p>
                    Hukum
                </p>
            </div>
            <div class="col-1 kartu">
                <q-img src="~assets/icon_4.png" style="height: 70px; max-width: 70px"/>
                <p>
                    Akuntabilitas
                </p>
            </div>
            <div class="col-1 kartu">
                <q-img src="~assets/icon_5.png" style="height: 70px; max-width: 70px"/>
                <p>
                    Infrastuktur
                </p>
            </div>
        </div>
        <div style="color: #395A3F;" class="flex flex-center" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
            <p style="text-align: center; width: 70%;">
            Dalam mewujudkan transformasi digital nation, gapoktanhut memiliki peran penting bagi pertumbuhan ekonomi desa.
            Gapari.id adalah software multi usaha kehutanan sebagai penerapan usaha  Gabungan Kelompok Tani Huta memberikan
            solusi automasi pengelolaan pembukuan, keuangan, operasional bisnis para kelompok tani hingga  mempersiapkan
            lahirnya regenerasi masa depan unggul serta berdaya saing
            </p>
        </div>
        <div style="color: #395A3F;" class="flex flex-center" v-if="$q.screen.xs || $q.screen.sm">
            <p style="text-align: justify; width: 80%;">
            Dalam mewujudkan transformasi digital nation, gapoktanhut memiliki peran penting bagi pertumbuhan ekonomi desa.
            Gapari.id adalah software multi usaha kehutanan sebagai penerapan usaha  Gabungan Kelompok Tani Huta memberikan
            solusi automasi pengelolaan pembukuan, keuangan, operasional bisnis para kelompok tani hingga  mempersiapkan
            lahirnya regenerasi masa depan unggul serta berdaya saing
            </p>
        </div>
<!-- FITUR UTAMA -->
        <div class="row flex flex-center q-gutter-xl items-start" style="margin-top: 50px; padding-left: 5%; padding-right: 5%; text-align:center" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
            <div class="col-sm-4 kartu2">
                <q-img src="~assets/akun.png" style="width: 65%; margin-left:7%"/>
                <h5 style="text-align: center; margin-top:10px">
                    <b>Portal Informasi</b>
                </h5>
                <p>
                    Jelajahi berbagai macam informasi mengenai layanan
                    GaPokTanHut dan saling terhubung bersama
                    komunitas.
                </p>
            </div>
            <div class="col-sm-4 kartu2">
                <q-img src="~assets/portal.png" style="margin-left:-10%"/>
                <h5 style="text-align: center">
                    <b>Akuntabilitas</b>
                </h5>
                <p>
                    memiliki sistem administrasi keuangan
                    dan manajeman yang baik, sehingga mampu
                    menyediakan laporan secara akurat.
                </p>
            </div>
            <div class="col-sm-4 kartu2">
                <q-img src="~assets/it.png" style="margin-left:-5%"/>
                <h5 style="text-align: center">
                    <b>Gapari Institut</b>
                </h5>
                <p>
                    menyediakan layanan informasi beasiswa
                    khusus bagi para anak anggota tergabung
                    dalam menyiapkan generasi unggul dan
                    berdaya saing.
                </p>
            </div>
        </div>
        <div class="row flex flex-center q-gutter-xl items-start" style="margin-top: 5px; padding-left: 5%; padding-right: 5%; text-align: justify" v-if="$q.screen.xs || $q.screen.sm">
            <div class="col-sm-4 kartu2 flex flex-center">
                <q-img src="~assets/akun.png" style="width: 70%;"/>
                <h5 style="text-align: center; margin-top:30px">
                    <b>Portal Informasi</b>
                </h5>
                <p>
                    Jelajahi berbagai macam informasi mengenai layanan
                    GaPokTanHut dan saling terhubung bersama
                    komunitas.
                </p>
            </div>
            <div class="col-sm-4 kartu2">
                <q-img src="~assets/portal.png"/>
                <h5 style="text-align: center">
                    <b>Akuntabilitas</b>
                </h5>
                <p>
                    memiliki sistem administrasi keuangan
                    dan manajeman yang baik, sehingga mampu
                    menyediakan laporan secara akurat.
                </p>
            </div>
            <div class="col-sm-4 kartu2">
                <q-img src="~assets/it.png"/>
                <h5 style="text-align: center">
                    <b>Gapari Institut</b>
                </h5>
                <p>
                    menyediakan layanan informasi beasiswa
                    khusus bagi para anak anggota tergabung
                    dalam menyiapkan generasi unggul dan
                    berdaya saing.
                </p>
            </div>
        </div>
<!-- Portal Informasi -->
    <div class="row" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
        <div class="q-ml-xl col-6 kartuku">
            <q-img src="~assets/dashboard-fitur.png"/>
        </div>
        <div class="q-ml-xl col-4 text-justify q-mt-xl kartuku">
            <h4>
                Hadir Sebagai Solusi Terbaik
            </h4>
            <p>
                Gapari hadir sebagai solusi berbasis teknologi yang memudahkan para gapoktan mengelola kelompok tani sebagai sumber daya terpenting,  manusia dan finansial menjadi kunci utama untuk usaha tani atau gabungan kelompok tani di Indonesia untuk dapat tumbuh melangkah lebih jauh.
            </p>
        </div>
    </div>
    <div class="row" v-if="$q.screen.sm || $q.screen.md">
        <div class="col-6 kartuku">
            <q-img src="~assets/dashboard-fitur.png"/>
        </div>
        <div class="col-4 text-justify kartuku" style="padding-left: 10%;padding-right: 10%">
            <h4 class="text-center">
                Hadir Sebagai Solusi Terbaik
            </h4>
            <p>
                Gapari hadir sebagai solusi berbasis teknologi yang memudahkan para gapoktan mengelola kelompok tani sebagai sumber daya terpenting,  manusia dan finansial menjadi kunci utama untuk usaha tani atau gabungan kelompok tani di Indonesia untuk dapat tumbuh melangkah lebih jauh.
            </p>
        </div>
    </div>
    <div class="text-center">
        <h4>
            Fitur Lengkap
        </h4>
        <div class="flex flex-center">
            <p class="paragraf flex flex-center">
                fitur lengkap untuk mempersiapkan GaPokTanHut siap menjadi pahlawan rimbawan membagun desa yang mandiri unggul dan berdaya saing
            </p>
        </div>
    </div>
        <div class="row flex flex-center items-start q-mb-xl" style="text-align: center; color: #395A3F">
            <div class="col-2 kartu-fitur">
                <q-img src="~assets/fitur-1.png" style="height: 100px; max-width: 100px" />
            </div>
            <div class="col-2 kartu-fitur">
                <q-img src="~assets/fitur-2.png" style="height: 100px; max-width: 100px"/>
            </div>
            <div class="col-2 kartu-fitur">
                <q-img src="~assets/fitur-3.png" style="height: 100px; max-width: 100px"/>
            </div>
            <div class="col-2 kartu-fitur">
                <q-img src="~assets/fitur-4.png" style="height: 100px; max-width: 100px"/>
            </div>
        </div>
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
.my-card {
    width: 100%;
    max-width: 300px;
    border-width: 10px;
    border: solid;
    border-color: #E0E6E0;
}
.my-cardDif {
    width: 100%;
    max-width: 300px;
    background-image: url("~assets/hijau.png");
    background-size: cover;
    color: white;
}
.bg-fitur {
    background-image: url("~assets/bg-fitur.png");
    background-size: cover;
}
.text-bg-fitur {
    margin-left: 50%;
    font-size: 17px;
    padding-top: 70px;
}
.my-cardAbout {
    width: 100%;
    max-width: 280px;
}
.kartu {
    width: 100%;
    max-width: 100px;
}
.kartu-fitur {
    width: 100%;
    max-width: 150px;
}
.kartu2 {
    width: 100%;
    max-width: 300px;
}
.kartuku {
    width: 100%;
    max-width: 550px;
}
.paragraf {
    text-align: center;
    width: 100%;
    max-width: 500px;
    color: #585757;
}
</style>
