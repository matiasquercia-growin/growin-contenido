export default {
  async rewrites() {
    return [
      { source: '/fechas-especiales', destination: '/fechas-especiales/index.html' },
      { source: '/fechas-especiales/calculadora', destination: '/fechas-especiales/calculadora.html' },
    ];
  },
};
