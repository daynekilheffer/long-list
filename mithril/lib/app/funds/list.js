module.exports = function () {
  var self = this;
  this.funds = m.prop([]);

  this.map = function (callback) {
    return this.funds().map(callback);
  };

  this.init = function () {
    return m.request({method: 'GET', url: '/data/funds.json'}).then(function (data) {
      self.funds(data.fund.entity);
    });
  };
}
