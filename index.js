const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Thé Noir", prix: 7.99 }
];

const rechercheProduit = document.getElementById("recherche");
const affichageProduit = document.getElementById("produit");
const afficherTotalProduit = document.getElementById("total");

// fonction de suppression de produits en fonction de son ID

const supprimerProduit = (id) => {
    // creation d'un tableau sans le produit supprimer    
    const updateProduit = produits.filter(item => item.id !== id);

    // defini la nouvelle longue du tableau
    produits.length = 0;

    // fusionner le nouveau tableau
    produits.push(...updateProduit);

    // affiche les produits
    affichage();
}

// fonction d'affichage du produit 
const affichage = () => {
    // utilisation de la fonction map pour afficher les produits
    const produitHTML = produits.map(produit => 
        `<div>
            <p>${produit.nom}</p>
            <p>Prix: ${produit.prix}€</p>
            <button onclick="supprimerProduit(${produit.id})">Supprimer</button>
        </div>`
    )

    // attribution de la variable produit a la variable affichage produit
    affichageProduit.innerHTML = produitHTML;

    // on affiche le total du prix en fonction des produits afficher
    totalProduit(produits); 
};

// fonction de recherche

const recherche = (event) => {
    // il permet de gerer les entrees utilisateurs
    const newSearch = event.target.value; 
    
    // variables de recherche
    const filteredProduit = produits.filter(produit => produit.nom.toLowerCase().includes(newSearch.toLowerCase()));

    // on utilise la fonction map mais cette fois avec la variable de recherche
    const produitHTML = filteredProduit.map(produit => 
        `<div>
            <p>${produit.nom}</p>
            <p>Prix: ${produit.prix}€</p>
            <button onclick="supprimerProduit(${produit.id})">Supprimer</button>
        </div>`
    )
    
    // attribution de la variable recherche a la variable affichage produit
    affichageProduit.innerHTML = produitHTML;

    // on affiche le total du prix en fonction de la recherche
    totalProduit(filteredProduit);
}

// Ajout de l'écouteur d'événements
rechercheProduit.addEventListener("input", recherche);

// fonction total du prix
const totalProduit = (produit) => {

    // variable avec la propriete reduce pour calculer le total
    const total = produit.reduce((total, item) => total + item.prix, 0);
    
    // attribution de la variable total a la variable affichage produit
    afficherTotalProduit.innerHTML = `<p>${total}$</p>`
}

affichage();