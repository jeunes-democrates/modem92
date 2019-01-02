![](https://img.shields.io/github/license/jeunes-democrates/modem92.svg) ![](https://img.shields.io/discord/218722212675452929.svg) ![](https://img.shields.io/twitter/follow/modem92.svg?label=Follow&style=social)

Pardon my french

# Federal

Un template jekyll pour présenter une équipe, notamment utile pour une fédération de parti politique ou une liste électorale.

![Federal template screenshot](images/_screenshot.png)

Federal est un fork de [Frisco](https://github.com/CloudCannon/frisco-jekyll-template).

## Features

* Integration Medium ![Statut ok](https://img.shields.io/badge/statut-ok-green.svg)
* Présentation du staff ![Statut ok](https://img.shields.io/badge/statut-ok-green.svg)
* Formulaire de contact ![Coming soon](https://img.shields.io/badge/coming-soon-yellow.svg)
* Mailchimp ![Statut ok](https://img.shields.io/badge/statut-ok-green.svg)
* SEO tags ![Statut ok](https://img.shields.io/badge/statut-ok-green.svg)
* Google Analytics ![Statut ok](https://img.shields.io/badge/statut-ok-green.svg)

## Paramétrer

1. Ajouter les détails du site et de l'auteur dans `_config.yml`.
2. Ajouter ID Google Analytics également dans `_config.yml`.

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

## Ajouts et édition

Plus d'infos sur [le wiki](https://github.com/jeunes-democrates/modem92/wiki).

### Formulaire de contact

* Utiliser par exemple [FormSpree](https://formspree.io/).

### Staff

* Créer un fichier .md par personne dans le dossier `staff`. Ils s'afficheront par ordre alphabétique.
