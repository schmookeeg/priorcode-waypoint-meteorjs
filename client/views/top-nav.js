  Template.topNav.helpers({
    site: function()
    {
      return Sites.findOne({});
    }

  });