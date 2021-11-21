<template>
    <q-layout class="nav">
      <q-header  class="bg-transparent text-teal" style="position: fixed">
        <q-toolbar class="q-pa-md flex flex-center" :class="{change_color: scrollPosition > 50}">
            <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
          <q-tabs v-model="tab"
            active-color="green"
            indicator-color="green"
          >
            <q-item clickable active-class="active" class="flex flex-center" href="#home" name="HOME" label="BERANDA" style="margin-left: 20px; margin-right: 20px" active-color="green" indicator-color="green" :to="{ name: 'index' }">
                BERANDA
            </q-item>
            <q-item clickable active-class="active" class="flex flex-center" href="#tentang" name="PRODUK" style="margin-left: 20px; margin-right: 20px" active-color="green" indicator-color="green" :to="{ name: 'tentangKami' }">
                TENTANG KAMI
            </q-item>
            <q-item clickable active-class="active" class="flex flex-center" href="#mengapa" style="margin-left: 20px; margin-right: 20px" active-color="green" indicator-color="green" :to="{ name: 'mengapaKami' }">
                MENGAPA KAMI
            </q-item>
            <q-avatar class="q-mr-xs" size="100px">
                <img src="~assets/selsafical.png">
            </q-avatar>
            <q-item clickable active-class="active" class="flex flex-center" href="#produk" style="margin-left: 20px; margin-right: 20px" active-color="green" indicator-color="green" :to="{ name: 'produk' }">
                PRODUK
            </q-item>
            <q-btn-dropdown clickable active-class="active" class="flex flex-center bg-transparent" style="margin-left: 20px; margin-right: 20px" active-color="green" indicator-color="green" label="Beli Sekarang" flat>
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
                          <a href="https://api.whatsapp.com/send?phone=6281318608323" style="color: black; text-decoration: none;">
                            <q-item-label>WhatsApp</q-item-label>
                            <q-item-label caption>Beli Sekarang</q-item-label>
                          </a>
                        </q-item-section>
                        </q-item>
                    </q-list>
            </q-btn-dropdown>
            <q-item clickable active-class="active" class="flex flex-center" href="https://api.whatsapp.com/send?phone=6281318608323" style="margin-left: 20px; margin-right: 20px" active-color="green" indicator-color="green" >
                KONTAK
            </q-item>
          </q-tabs>
          </div>
          <q-btn flat @click="drawer = !drawer" round v-if="$q.screen.xs || $q.screen.sm" icon="menu"/>
        </q-toolbar>
        <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        overlay
        bordered
        class="bg-grey-3"
        side="right"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item  clickable v-ripple :to="{ name: 'index' }">
                <q-item-section avatar>
                    <q-icon name="home" />
                </q-item-section>
                <q-item-section >
                    Home
                </q-item-section>
            </q-item>
            <q-item  clickable v-ripple :to="{ name: 'produk' }">
                <q-item-section avatar>
                    <q-icon name="store" />
                </q-item-section>
                <q-item-section>
                    Produk
                </q-item-section>
            </q-item>
            <q-item  clickable v-ripple :to="{ name: 'tentangKami' }">
                <q-item-section avatar>
                    <q-icon name="business" />
                </q-item-section>
                <q-item-section>
                    Tentang Kami
                </q-item-section>
            </q-item>
            <q-item  clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="contact_phone" />
                </q-item-section>
                <q-item-section>
                  <a href="https://api.whatsapp.com/send?phone=6282121508767" style="color: teal; text-decoration: none;">
                    Kontak
                  </a>
                </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      </q-header>
      <q-footer class="footer">
        <div class="row" style="margin-top: 10%">
          <div class="col-sm-4 flex flex-center" style="margin-left: 7%">
            <img src="~assets/selsafical.png" alt="" class="logo">
            <p>
              Dibudidayakan dan dihasilkan dari tanah subur Indonesia oleh petani dan komunitas lokal menghasilkan gula aren berkualitas yang nikmat dan sehat.
            </p>
          </div>
          <div class="col-sm-3" style="margin-left: 7%">
              <p><b>Contact Us</b></p>
              +62 812 1367 5751<br>
              +62 813 8533 4790<br><br>
              <b>selsafical.cms@gmail.com</b><br><br>
              <b>Addres Selsafical</b><br>
              Jl. Purnawirawan I No.4, Gn. Terang<br>
              Langkapura, Kota Bandar Lampung, Lampung 35113<br>
          </div>
          <div class="col-sm-3" style="margin-left: 2%">
              Shop Now<br><br>
              <q-btn color="white" text-color="black">
                  <q-avatar class="tokped">
                  <img src="~assets/tokopedia.png">
                  </q-avatar>
              </q-btn><br><br>
              <q-btn color="white" text-color="black">
                  <q-avatar class="shopee">
                  <img src="~assets/shope.png">
                  </q-avatar>
              </q-btn>
          </div>
        </div>
          <div class="footer2 flex flex-center">
            CopyRight By Lamtech
          </div>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style scoped>
  .change_color {
      background-color: #E5EDD3;
  }
  .footer {
    background-image: url('~assets/footer.png');
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .logo {
    width: 30%;
  }
  .tokped {
    width: 100px;
    height: 35px;
  }
  .shopee {
    width: 100px;
    height: 40px;
  }
  .footer2 {
    padding-top: 5%;
    background-image: url('~assets/footer1.png');
    background-repeat: no-repeat;
  }
</style>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

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

    console.log($q.platform.is.ios)
    return {
      tab: ref(''),
      menuList,
      onItemClick () {
        // console.log('Clicked on an Item')
      }
    }
  }
}
</script>
