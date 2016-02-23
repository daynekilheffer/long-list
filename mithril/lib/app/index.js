var FundsList = require('./funds/list');
var FundsTable = require('./funds/table');

var list = new FundsList();

list.init();

var App = {
  controller: function () {
    this.list = m.prop(list);
    this.sorted;
    this.sort = {
      byName : function (e) {
        e.preventDefault();
        this.list().funds().sort(function (a, b) {
          return parseInt(a.profile.fundId, 10) - parseInt(b.profile.fundId, 10);
        });
      }.bind(this)
    };
  },
  view: function (ctrl) {
    return m(FundsTable, {funds: ctrl.list().funds, sort: ctrl.sort});
  }
}

m.mount(document.getElementById('root-container'), App);
