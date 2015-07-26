Package.describe({
  summary: 'A simple natural-language duration parser.',
  version: "1.0.0",
  git: "https://github.com/wizonesolutions/meteor-juration.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  where = where || ['client', 'server'];

  api.add_files(['pre.js'], where);
  api.add_files(['lib/juration/juration.js'], where);
  api.add_files(['post.js'], where);

  if (api.export) {
    api.export('juration');
  }
});

