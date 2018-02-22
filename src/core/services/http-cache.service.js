HttpCache.$inject = ['CacheFactory'];

export default function HttpCache(CacheFactory) {
  var service = {
    clearAll: clearAll,
    remove: remove,
    get: get,
    put: put
  };

  return service;

  function clearAll() {
    var cache = CacheFactory.get('httpCache');

    cache.removeAll();
  }

  function remove(path) {
    var cache = CacheFactory.get('httpCache');

    _.forEach(cache.keys(), function (key) {
      if (_.includes(key, path)) {
        cache.remove(key);
      }
    });
  }

  function get(path) {
    var cache = CacheFactory.get('httpCache');
    return cache.get(path);
  }

  function put(path, data) {
    var cache = CacheFactory.get('httpCache');

    cache.put(path, data);
  }
}
