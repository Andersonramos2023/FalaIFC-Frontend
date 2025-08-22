import { createRouter,createWebHistory} from 'vue-router';
import HomeViews from '@/Views/HomeViews.vue';
import HomeInfoViews from '@/Views/curso/informatica/homeInfoViews.vue';
import HomeQuimi from '@/Views/curso/quimaca/HomeQuimi.vue';
import HomeAgroViews from '@/Views/curso/agropecuria/HomeAgroViews.vue';


const routes = [

//INFORMÁTICA
  {
    path: '/informatica',
    name: 'Informática',
    component: () => import('@/Views/curso/informatica/ViewsInfo/infoViews.vue'),
  },
  {
    path:'/VerCursoInfo',
    name:'Ver Curso',
    component:() => import('@/Views/curso/informatica/ViewsInfo/VerCursoInfoViews.vue'),
  },

  {
    path:'/CorreioProfInfo',
    name:'Correio',
    component: () => import('@/Views/curso/informatica/ViewsInfo/CorreioProfInfoViews.vue') ,
  },
  {

path:'/ConteudoSalvoInfo',
name:'Conteúdo Salvo',
component: () => import('@/Views/curso/informatica/ViewsInfo/ConteudoSalvoInfoViews.vue'),

  },
  {
path:'/DireitosAutoraisInfo',
name:'Direitos autorais',
component:() => import('@/Views/curso/informatica/ViewsInfo/DireitosAutoraisInfoViews.vue'),
  },
  {
path:'/PoliticaDePrivacidadeInfo',
name:'Política de Privacidade',
component:() => import('@/Views/curso/informatica/ViewsInfo/PoliticaDePrivacidadeInfoViews.vue'),

  },

{

  path:'/TempoDeEstudoInfo',
  name:'Tempo de Estudo',
  component: () => import('@/Views/curso/informatica/ViewsInfo/TempoDeEstudoInfoViews.vue'),


},
  //PESQUISAINFO

  {
path:'/matrizMatematica',
name:'Matriz Matemática',

component: () => import('@/Views/curso/informatica/Pesquisa/MatrizPsq.vue'),
  },
{
  path:'/VideoInfo',
  name:'Vdeos',
  component: () => import( '@/Views/curso/informatica/Pesquisa/VideoInfo.vue')

},
{
path:'/FisicaInfo',
name:'Fisica',
component:() => import('@/Views/curso/informatica/Pesquisa/FisicaInfo.vue'),
},
{
  path:'/AtividadeInfo',
  name:'Atividade',
  component: () => import( '@/Views/curso/informatica/Pesquisa/atividadeInfo.vue')

},

{
  path:'/FisicaAtividadeInfo',
  name:'Fisica Atividade',
  component: () => import( '@/Views/curso/informatica/Pesquisa/FisicaAtividadeInfo.vue')

},
  //  QUIMÍCA
  {
    path: '/Quimica',
    name: 'QuimicaIncio',
    component: () => import('@/Views/curso/quimaca/ViewsQuimi/QuimiViews.vue'),

  },

  {
    path:'/VerCursoQuimi',
    name:'Ver Curso Quimíca',
    component:() => import('@/Views/curso/quimaca/ViewsQuimi/VerCursoQuimiViews.vue'),
  },

  {
    path:'/CorreioProfQuimi',
    name:'CorreioProf Quimíca',
    component: () => import('@/Views/curso/quimaca/ViewsQuimi/CorreioProfQuimiViews.vue') ,
  },
  {

path:'/ConteudoSalvoQuimi',
name:'Conteúdo Salvo Quimíca',
component: () => import('@/Views/curso/quimaca/ViewsQuimi/ConteudoSalvoQuimiViews.vue') ,

  },
  {
path:'/DireitosAutoraisQuimi',
name:'Direitos autorais Quimíca',
component:() => import('@/Views/curso/quimaca/ViewsQuimi/DireitosAutoraisQuimiViews.vue'),
  },
  {
path:'/PoliticaDePrivacidadeQuimi',
name:'Política de Privacidade Quimi ',
component:() => import('@/Views/curso/quimaca/ViewsQuimi/PoliticaDePrivacidadeQuimiViews.vue'),
  },
  //AGROPECUARIA

  {
    path: '/agropecuaria',
    name: 'Agropecuária',
    component: () => import('@/Views/curso/agropecuria/ViewsAgro/AgroViews.vue'),
  },


  {
    path:'/VerCursoAgro',
    name:'Ver Curso Agro',
    component:() => import('@/Views/curso/agropecuria/ViewsAgro/VerCursoAgroViews.vue'),
  },

  {
    path:'/CorreioProfAgro',
    name:'CorreioProf Agro',
    component: () => import('@/Views/curso/agropecuria/ViewsAgro/CorreioProfAgroViews.vue') ,
  },
  {

path:'/ConteudoSalvoAgro',
name:'Conteúdo Salvo Agro',
component: () => import('@/Views/curso/agropecuria/ViewsAgro/ConteudoSalvoAgroViews.vue') ,

  },
  {
path:'/DireitosAutoraisAgro',
name:'Direitos autorais Agro',
component:() => import('@/Views/curso/agropecuria/ViewsAgro/DireitosAutoraisAgroViews.vue'),
  },
  {
path:'/PoliticaDePrivacidadeAgro',
name:'Política de Privacidade Agro',
component:() => import('@/Views/curso/agropecuria/ViewsAgro/PoliticaDePrivacidadeAgroViews.vue'),
  },




      {
        path: '/HomeAgro',
        name: 'agrope',
        component: HomeAgroViews,
      },


      {
        path: '/HomeQuimica',
        name: 'Quimíca',
        component: HomeQuimi,
      },

  {
path: '/HomeInfo',
name:'HomeInfo',
component:HomeInfoViews,
  },
{
path: '/',
name: 'Home',
component: HomeViews,

},
{
path: '/DireitosAutorais',
name: 'Direitos',
component: () => import('@/Views/curso/informatica/ViewsInfo/DireitosAutoraisInfoViews.vue'),
},
{
  path:'/PoliticaDePrivacidade',
  name:'Politica',
  component: () => import('@/Views/PoliticaDePrivacidade.vue')
},
{
path:'/Login',
name:'Login',
component: () => import('@/Views/LoginViws.vue')
},
{
path:'/ConteudoSalvo',
name:'ConteudoSalvo',
component: () => import('@/Views/curso/informatica/ViewsInfo/ConteudoSalvoInfoViews.vue')
},
{
path:'/CorreioProf',
name:'CorreioProf',
component: () => import('@/Views/CorreioProfViews.vue')
},
{
  path:'/VerCurso',
  name:'VerCurso',
  component: () => import('@/Views/VerCursoViews.vue')

},
{

  path:'/TempoDeEstudo',
  name:'TempoDeEstudo',
  component: () => import('@/Views/TempoDeEstudoViews.vue')


}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
