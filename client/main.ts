///<reference path="../.bower/meteor-typescript-libs/meteor.d.ts" />

// counter starts at 0
Session.setDefault("counter", 0);

Template['hello'].helpers({
    counter: () => {
      return Session.get("counter");
    }
});

Template['hello'].events({
    'click button': () => {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
});

