# P7_DeSantis_Sabrina_030322

# Groupomania
## _Projet 7 Openclassrooms_

## Description
Création d'un réseau social d'entreprise. 
#### Exigences du projet 
- la présentation des fonctionnalités doit être simple ;
- la création d’un compte doit être simple et possible depuis un téléphone mobile ;
- le profil doit contenir très peu d’informations pour que sa complétion soit rapide ;
- la suppression du compte doit être possible ;
- l’accès à un forum où les salariés publient des contenus multimédias doit être présent ;
- l’accès à un forum où les salariés publient des textes doit être présent ;
- les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés ;
- le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre
salariés ;

#### Technologies
HTML, CSS, SASS, Node, Express, MySQL2 et Vue 3

## Installation
Cloner le projet :
```sh
git clone https://github.com/Saboodev/P7_DeSantis_Sabrina_030322.git
```
Database: 
```sh
$ mysql -u root -p groupomania < groupomania.sql

mysql> USE groupomania;
```

Backend :
```sh
cd backend
npm install
nodemon server
```

Frontend :
```sh
cd frontend
cd groupomania
npm install
npm run dev
```

Créer un fichier .env dans le dossier config 

```sh
PORT = "3000"

DB_HOST = 'insérer vos informations'
DB_USER = 'insérer vos informations'
DB_NAME = "groupomania"
DB_PASSWORD = 'insérer vos informations'
```

#### Accès au compte admin

- Email : admin@admin.com
- Password : Azerty123!


