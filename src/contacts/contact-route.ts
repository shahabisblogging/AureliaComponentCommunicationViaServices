import { RouterConfiguration, Router } from "aurelia-router";

export class ContactRoute {


  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';

    config.map([
      { route: '', name: 'contacts', moduleId: 'contacts/contact-main', nav: false, title: '' },
      { route: 'new', name: 'new_contact', moduleId: 'contacts/contact-new', nav: false, title: '' },
      { route: ':id', name: 'contact-detail', moduleId: 'contacts/contact-details', nav: false, title: '' },
      { route: ':id/edit', name: 'contact-edit', moduleId: 'contacts/contact-edit', nav: false, title: '' }
    ]);
  }
}
