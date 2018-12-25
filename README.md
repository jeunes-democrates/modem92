Pardonne fow my french

# Federal

Un template jekyll pour présenter une équipe, notamment utile pour une fédération de parti politique ou une liste électorale.

![Frisco template screenshot](images/_screenshot.jpg)

Federal est un fork de [Frisco](https://github.com).

## Features

* Integration Medium
* Contact form
* Présentation du staff
* Formulaire de contact
* Configurable footer
* Mailchimp
* RSS/Atom feed
* SEO tags
* Google Analytics

## Paramétrer

1. Add your site and author details in `_config.yml`.
2. Add your Google Analytics and Disqus keys to `_config.yml`.
3. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or Jekyll locally).

## Forker

Federal a été développé via [Jekyll](http://jekyllrb.com/) version 3.3.1, et supportera probablement les versions ultérieures.

Les dépendances s'installent avec [Bundler](http://bundler.io/) :

~~~bash
$ bundle install
~~~

On lance ensuite la commande `jekyll` via Bundler pour être sûr d'être dans la bonne version :

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

Frisco is already optimised for adding, updating and removing pages, staff, advice, company details and footer elements in CloudCannon.

### Posts

* Add, update or remove a post in the *Posts* collection.
* The **Staff Author** field links to members in the **Staff Members** collection.
* Documentation pages are organised in the navigation by category, with URLs based on the path inside the `_docs` folder.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Formulaire de contact

* Utiliser par exemple [FormSpree](https://formspree.io/).

### Staff

* Créer un fichier .md par personne dans le dossier `staff`. Ils s'afficheront par ordre alphabétique.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.
