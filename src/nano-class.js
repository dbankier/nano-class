// prevents binding the view changes back to the model 
// if the view has a `oneway` attribute/property
function applyClass(o) {
  var template = _.template(o.view.nclass);
  var value = template(o.$model);
  o.$.addClass(o.view, value);
}
module.exports = function(options) {
  var timeouts = {};
  return function(nano) {
    function applyPlugin(o, next) {
      if (o.prop === "nclass") {
        o.$.resetClass(o.view);
        applyClass(o);
      } else {
        next();
      }
    }
    nano.hook('model:change', applyPlugin);
    nano.hook('view:init', applyPlugin);
  };
};
