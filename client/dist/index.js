new Vue({
  el: "#app",
  data: {
    title: "Dashboard"
  },
  created: function() {
    document.title = this.title;
  }
});
