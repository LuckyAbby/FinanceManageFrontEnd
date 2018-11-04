
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
  proxy: {
    "/api": {
      "target": "http://182.254.137.15:8080/finance/product/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
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
