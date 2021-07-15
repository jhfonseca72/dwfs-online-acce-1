
/*
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="./node_modules/mapbox-gl/dist/mapbox-gl.js"></script>
*/
window.module = {};
await import("https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js").then(_ => {
  console.log(module.exports);
});
export default {}

