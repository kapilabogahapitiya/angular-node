export default function UrlParserService() {
  var service = {
    getSegments: getSegments,
    getLastSegment: getLastSegment
  };
  return service;

  // Methods
  function getSegments(url) {
    var parser = getParser(url);
    return parser.pathname.split('/');
  }

  function getLastSegment(url) {
    var segments = getSegments(url);
    return segments[segments.length - 1];
  }

  // Private functions
  function getParser(url) {
    var parser = document.createElement('a');
    parser.href = url;
    return parser;
  }
}
