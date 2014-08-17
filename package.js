Package.describe({
  summary: 'A simple natural-language duration parser.'
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];

  api.add_files(['pre.js'], where);
  api.add_files(['lib/juration/juration.js'], where);
  api.add_files(['post.js'], where);

  if (api.export) {
    api.export('juration');
  }
});

