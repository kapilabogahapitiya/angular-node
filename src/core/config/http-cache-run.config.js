HttpCacheRun.$inject = ['$http', 'CacheFactory'];

export default function HttpCacheRun($http, CacheFactory) {
  if(!CacheFactory.get('httpCache')) {
    $http.defaults.cache = CacheFactory('httpCache', {
      maxAge: 2 * 60 * 1000, // Items added to this cache expire after 2 minutes
      cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
      deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
    });
  }
}