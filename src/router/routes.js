
const routes = [
  {
    path: '/selsafical',
    component: () => import('src/layouts/selsafical/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('src/pages/selsafical/Index.vue') },
      { path: 'produk', name: 'produk', component: () => import('src/pages/selsafical/produk.vue') },
      { path: 'tentangKami', name: 'tentangKami', component: () => import('src/pages/selsafical/tentang_kami.vue') },
      // { path: 'produkRinci', name: 'produkRinci', component: () => import('pages/produkRinci.vue') },
      { path: 'mengapaKami', name: 'mengapaKami', component: () => import('src/pages/selsafical/mengapaKami.vue') },
      { path: 'gulaJahe', name: 'gulaJahe', component: () => import('pages/gula/gulaArenJahe.vue') },
      { path: 'gulaJaheMerah', name: 'gulaJaheMareh', component: () => import('pages/gula/gulaArenJaheMerah.vue') },
      { path: 'gulaBerasKencur', name: 'gulaBerasKencur', component: () => import('pages/gula/gulaArenBerasKencur.vue') },
      { path: 'gulaCetak', name: 'gulaCetak', component: () => import('pages/gula/gulaCetak.vue') },
      { path: 'gulaArenOriginal', name: 'gulaArenOriginal', component: () => import('pages/gula/gulaArenOriginal.vue') },
      { path: 'gulaArenTemulawak', name: 'gulaArenTemulawak', component: () => import('pages/gula/gulaArenTemulawak.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    children: [
      { path: '', name: 'loginGapari', component: () => import('pages/loginGapari.vue') },
      { path: 'loginUser', name: 'loginUser', component: () => import('src/pages/selsafical/loginUser.vue') },
      { path: 'registerUser', name: 'registerUser', component: () => import('src/pages/selsafical/registerUser.vue') },
      { path: 'registerGapari', name: 'registerGapari', component: () => import('pages/registerGapari.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', name: 'dash', component: () => import('pages/dasboard.vue') },
      { path: 'website', name: 'website', component: () => import('pages/website.vue') }
      // { path: 'col', name: 'col', component: () => import('pages/col.vue') }
      // { path: 'loginGapari', name: 'loginGapari', component: () => import('pages/loginGapari.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
