const proxy = new Proxy(
  {},
  {
    get(target, key) {
      if (key === '__esModule') {
        // Возвращаем true, чтобы Jest воспринимал это как ES-модуль
        return true;
      }
      return key;
    },
  }
);

module.exports = proxy;
