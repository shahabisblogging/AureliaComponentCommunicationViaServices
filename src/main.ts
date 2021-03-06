import { Aurelia } from 'aurelia-framework'
import environment from './environment';
import { App } from 'app';
import { initialState } from 'shared/states/state';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('shared');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.use.plugin('aurelia-toolbelt');

  aurelia.use.plugin('aurelia-store', { initialState });

  return aurelia.start().then(() => aurelia.setRoot(App));
}
