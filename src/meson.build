pkgdatadir = get_option('datadir') / meson.project_name()
gnome = import('gnome')

src_res = gnome.compile_resources('io.github.josephmawa.Egghead.src',
  'res' / 'io.github.josephmawa.Egghead.src.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

data_res = gnome.compile_resources('io.github.josephmawa.Egghead.data',
  'res' / 'io.github.josephmawa.Egghead.data.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('PACKAGE_VERSION', meson.project_version())
bin_conf.set('PACKAGE_NAME', meson.project_name())
bin_conf.set('WEBSITE_URL', get_option('website_url'))
bin_conf.set('ISSUE_URL', get_option('issue_url'))
bin_conf.set('SUPPORT_URL',get_option('support_url'))
bin_conf.set('prefix', get_option('prefix'))
bin_conf.set('libdir', get_option('prefix') / get_option('libdir'))
bin_conf.set('datadir', get_option('prefix') / get_option('datadir'))
bin_conf.set('resource_path', '/io/github/josephmawa/Egghead')

configure_file(
  input: 'bin' / 'io.github.josephmawa.Egghead.in',
  output: 'io.github.josephmawa.Egghead',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
