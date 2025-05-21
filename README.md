# Exercice 1 : Personnalisation du cart drawer avec seuils promotionnels et ajout automatique d'un cadeau en temps réel

## 1.1 Intégration technique

Ajout d'une section dans le fichier snippets/cart-drawer.liquid qui permettent d'afficher dans un premier temps si la panier a atteint la somme minimum de 50€ afin d'obtenir la livraison gratuite.

## 1.2 Affichage dynamique des messages promotionnels

Ajout d'une autre section dans le fichier snippets/cart-drawer.liquid qui permettent d'afficher si le panier est supérieur à 100€ pour obtenir un produit gratuit.

## 1.3 Ajout automatique du produit cadeau sans refresh de la page

Ajout de code dans la fonction connectedCallback() du fichier assets/cart.js qui permet de checker (si les conditions d'autorise) si le produit cadeau est déjà dans le panier, et le cas échéant de l'ajouter.
