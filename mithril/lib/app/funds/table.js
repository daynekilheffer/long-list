var FundHeader = require('./table-header');
var FundRow = require('./table-row');

module.exports = {
  controller : function (args) {
  },
  view: function (ctrl, args) {
    var rows = args.funds().map(function (fund) {
      return m(FundRow, {fund: fund});
    });
    return m('table', [m('a', {onclick: args.sort.byName}, 'test'), rows]);
  }
}
