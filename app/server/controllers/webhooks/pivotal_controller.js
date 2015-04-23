PivotalController = RouteController.extend({
  action: function () {
    var data = this.request.body;
    if (data && data.changes) {
      var c = data.changes[0];
      console.log(c.id, c.new_values);
      Stories.update({id: c.id}, {$set: c.new_values});
      this.response.end('activity received.\n');
    } else {
      this.response.end('no activity data received.\n');
    }
  }
});
