module.exports = {
  controller : function (args) {
  },
  view: function (ctrl, args) {
    return m('tr', {key: args.fund.profile.fundId}, [
      m('td', [
        m('a', {href: 'some.url/?fundId=' + args.fund.profile.fundId}, args.fund.profile.longName)
      ]),
      m('td', args.fund.profile.ticker || '-'),
      m('td', args.fund.profile.style || '-'), // mismatch
      m('td', args.fund.profile.expenseRatio || '-'),
      m('td', args.fund.dailyPrice.regular.price || '-'),
      m('td', args.fund.dailyPrice.regular.priceChangeAmount || '-')
    ]);
  }
}
