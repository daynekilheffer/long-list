var FundsList = require('./list');

module.exports = {
  controller : function () {
  },
  view: function (ctrl, args) {
    return m('tr', [
      m('th', {onclick: args.sort.byName}, 'Name'),
      m('th', 'Ticker'),
      m('th', 'Asset class'), // mismatch
      m('th', 'Expense ratio'),
      m('th', 'Price'),
      m('th', 'Change')
    ]);
  }
}
