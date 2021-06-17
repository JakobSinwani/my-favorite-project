
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {path: '/lp',
  component:()=> import('../pages/Lp.vue'),
  },  {path: '/bus',
  component:()=> import('../pages/Bus.vue'),
  },
  {path: '/axios',
  component:()=> import('../pages/axios.vue'),
  },
  {path: '/focus',
  component:()=> import('../pages/Focus.vue'),
  },
  {path: '/nest',
  component:()=> import('../pages/nest.vue'),
  },  {path: '/home',
  component:()=> import('../pages/HomePageTest.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
