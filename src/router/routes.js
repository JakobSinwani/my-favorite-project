
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
  },
  {path: '/firestore',
  component:()=> import('../pages/Firestore.vue'),
  },
  {path: '/getters',
  component:()=> import('../pages/Getters.vue'),
  },
  {path: '/rolyhome',
  component:()=> import('../pages/Rolyhome.vue'),
  },
  {path: '/snapshot',
  component:()=> import('../pages/Snapshot.vue'),
  },
  {path: '/jun',
  component:()=> import('../pages/JunTest.vue'),
  },
  {path: '/css',
  component:()=> import('../pages/CSS.vue'),
  },
  {path: '/18',
  component:()=> import('../pages/il18.vue'),
  },
  {path: '/bus',
  component:()=> import('../pages/Bus.vue'),
  },
  {path: '/axios',
  component:()=> import('../pages/axios.vue'),
  },
  {path: '/focus',
  component:()=> import('../pages/Focus.vue'),
  },
  {path: '/prop',
  component:()=> import('../pages/PropsHell/PropsHell'),
  },
  {path: '/flex-one',
  component:()=> import('../pages/FlexBox'),
  },
  {path: '/flex-page',
  component:()=> import('../pages/Flex3'),
  },  {path: '/flex',
  component:()=> import('../pages/PropsHell/FlexBoxTwo'),
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
