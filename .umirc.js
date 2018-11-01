
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'FinanceManageFrontEnd',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  routes: [{
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        component: 'Product',
      }, {
        path: '/product/:id',
        component: 'Product/$product.js',
      }, {
        path: '/assets',
        component: 'Assets',
      }, {
        path: '/details',
        component: 'Details',
      }, {
        path: '/userInfo',
        component: 'UserInfo',
      },
    ]
  }],
}
