(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  this.sort = function (sortFunc) {
    this.funds().sort(sortFunc);
  };
}

},{}],2:[function(require,module,exports){
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

},{"./list":1}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./table-header":2,"./table-row":3}],5:[function(require,module,exports){
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

},{"./funds/list":1,"./funds/table":4}],6:[function(require,module,exports){
require('./app');

},{"./app":5}]},{},[6]);
