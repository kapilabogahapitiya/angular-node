LocalStorageConfig.$inject = ['localStorageServiceProvider'];

export default function LocalStorageConfig(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('firstNear.')
    .setStorageType('sessionStorage');
}
