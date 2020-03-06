import Loadable from 'react-loadable';

const loading = { loading: props => (props.error ? 'Error' : 'Loading') };

const routesConfig = [
  {
    // path: '/',
    // component: Loadable({
    //   loader: () => import('../components/MenuBtns'),
    //   ...loading,
    // }),
    // routes: [
    //   {
    path: '/login',
    name: 'login',
    component: Loadable({
      loader: () => import('../pages/Login'),
      ...loading,
    }),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Loadable({
      loader: () => import('../pages/Dashboard'),
      ...loading,
    }),
  },
  {
    path: '/table',
    name: 'table',
    component: Loadable({
      loader: () => import('../pages/Table'),
      ...loading,
    }),
  },
  //   ],
  // },
];

export default routesConfig;
