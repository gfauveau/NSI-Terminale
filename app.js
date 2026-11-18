const sessionsData = [
    {
        id: "seance-0",
        tag: "Séance 0 • Prérequis",
        title: "Récapitulatif des bases de 1re",
        shortDesc: "Types construits (listes, tuples, dictionnaires), parcours, spécifications, tests et algorithmes fondamentaux.",
        summary: `
            <p>Avant d'aborder la programmation orientée objet, la récursivité et les structures arborescentes, 
            cette séance permet de consolider les fondamentaux de Première indispensables pour l'épreuve pratique et écrite.</p>
            <div class="course-grid">
                <div class="concept-card">
                    <h4>1. Types construits</h4>
                    <p><strong>Listes (tableaux) :</strong> mutables, indexées à partir de 0 (<code>tab[i]</code>, <code>tab.append(x)</code>).</p>
                    <p><strong>Tuples :</strong> non mutables (<code>coord = (x, y)</code>).</p>
                    <p><strong>Dictionnaires :</strong> associations clé/valeur en $O(1)$ moyen (<code>d.keys()</code>, <code>d.values()</code>, <code>d.items()</code>).</p>
                </div>
                <div class="concept-card">
                    <h4>2. Parcours & Compréhensions</h4>
                    <p>Parcours par valeur (<code>for elt in tab:</code>) ou par indice (<code>for i in range(len(tab)):</code>).</p>
                    <p>Listes en compréhension : <code>[x**2 for x in range(10) if x % 2 == 0]</code>.</p>
                </div>
                <div class="concept-card">
                    <h4>3. Spécification & Tests</h4>
                    <p>Toujours documenter le rôle, les paramètres et le type de retour (<code>docstring</code> + typage).</p>
                    <p>Vérifier les préconditions et les cas limites avec <code>assert</code>.</p>
                </div>
                <div class="concept-card">
                    <h4>4. Algorithmes de base</h4>
                    <p>Recherche d'extremum, calcul de moyenne, recherche dichotomique dans un tableau trié ($O(\\log_2 n)$), tris par insertion et sélection ($O(n^2)$).</p>
                </div>
            </div>
        `,
        exercises: [
            {
                id: "exo-0-1",
                title: "Exercice type 1 : Parcours et dictionnaire d'occurrences",
                statement: `Écrire une fonction <code>compter_occurrences(chaine)</code> qui prend en paramètre une chaîne de caractères non vide et renvoie un dictionnaire associant à chaque caractère son nombre d'apparitions.`,
                starterCode: `def compter_occurrences(chaine: str) -> dict:
    # À compléter
    pass

# Tests
assert compter_occurrences("abracadabra") == {'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}
print("Tests validés !")`,
                solutionCode: `def compter_occurrences(chaine: str) -> dict:
    occurrences = {}
    for caractere in chaine:
        if caractere in occurrences:
            occurrences[caractere] += 1
        else:
            occurrences[caractere] = 1
    return occurrences`
            },
            {
                id: "exo-0-2",
                title: "Exercice type 2 : Recherche dichotomique",
                statement: `Écrire une fonction <code>recherche_dichotomique(tab, cible)</code> qui renvoie l'indice de <code>cible</code> dans un tableau trié par ordre croissant, ou <code>-1</code> si l'élément est absent.`,
                starterCode: `def recherche_dichotomique(tab: list, cible: int) -> int:
    debut = 0
    fin = len(tab) - 1
    # À compléter
    return -1

# Tests
assert recherche_dichotomique([2, 5, 8, 12, 16, 23, 38, 56], 23) == 5
assert recherche_dichotomique([2, 5, 8, 12, 16, 23, 38, 56], 10) == -1
print("Dichotomie validée !")`,
                solutionCode: `def recherche_dichotomique(tab: list, cible: int) -> int:
    debut = 0
    fin = len(tab) - 1
    while debut <= fin:
        milieu = (debut + fin) // 2
        if tab[milieu] == cible:
            return milieu
        elif tab[milieu] < cible:
            debut = milieu + 1
        else:
            fin = milieu - 1
    return -1`
            }
        ]
    },
    {
        id: "seance-1",
        tag: "Séance 1 • Cours Complet",
        title: "Programmation Orientée Objet (POO)",
        shortDesc: "Paradigmes, classes, constructeur __init__, self, composition, encapsulation, méthodes spéciales (__str__, __eq__, __add__) et héritage.",
        summary: `
            <h3 class="module-title">Module 1 : Paradigmes de programmation et modularité</h3>
            <p>Un <strong>paradigme de programmation</strong> (du grec <em>paradeigma</em>, « modèle ») désigne la démarche intellectuelle adoptée pour modéliser et résoudre un problème informatique. Comme trois menuisiers assemblant un meuble (collé-pointé, visseuse ou tenons-mortaises), chaque paradigme possède ses outils et ses compromis. Python est multi-paradigme.</p>
            <table class="course-table">
                <thead>
                    <tr>
                        <th>Paradigme</th>
                        <th>Principe fondamental</th>
                        <th>Caractéristiques clés</th>
                        <th>Langages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Impératif</strong></td>
                        <td>Séquence d'instructions pas à pas</td>
                        <td>Modèle de von Neumann (variables, affectations, boucles)</td>
                        <td>C, Fortran, Python</td>
                    </tr>
                    <tr>
                        <td><strong>Fonctionnel</strong></td>
                        <td>Description du résultat (« quoi ») plutôt que du « comment »</td>
                        <td>Immutabilité, transparence référentielle, fonctions sans effet de bord</td>
                        <td>Haskell, OCaml, Lisp</td>
                    </tr>
                    <tr>
                        <td><strong>Orienté Objet (POO)</strong></td>
                        <td>Regroupement des données et traitements dans des entités</td>
                        <td>Encapsulation, objets autonomes, modularité, réutilisation</td>
                        <td>Python, Java, C++, Smalltalk</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="module-title">Module 2 : Vocabulaire fondamental & Objets déjà autour de nous</h3>
            <p>En Python, tout est déjà objet : une liste <code>m = [4, 5, 2]</code> est une instance de la classe prédéfinie <code>list</code>. On applique une méthode avec la <strong>notation pointée</strong> (<code>m.reverse()</code>), on inspecte l'interface d'un objet avec <code>dir(m)</code> et sa documentation avec <code>help(m.append)</code>.</p>
            <div class="course-grid">
                <div class="concept-card">
                    <h4>Classe (le moule)</h4>
                    <p>Plan ou gabarit abstrait définissant la structure (attributs) et les comportements (méthodes) d'une catégorie d'objets. Par convention, son nom commence par une <strong>Majuscule</strong> (CamelCase).</p>
                </div>
                <div class="concept-card">
                    <h4>Objet / Instance (le réel)</h4>
                    <p>Réalisation concrète issue d'une classe, occupant une adresse propre en mémoire (ex. <code>larry</code> est une instance de la classe <code>Chat</code>).</p>
                </div>
                <div class="concept-card">
                    <h4>Attribut (l'état)</h4>
                    <p>Variable interne rattachée à un objet représentant ses caractéristiques (ex. <code>self.x</code>, <code>self.couleur</code>, <code>self.solde</code>).</p>
                </div>
                <div class="concept-card">
                    <h4>Méthode (le comportement)</h4>
                    <p>Fonction définie à l'intérieur d'une classe qui agit sur les attributs de l'instance ou rend un service (ex. <code>deplacer()</code>, <code>deposer()</code>).</p>
                </div>
            </div>

            <h3 class="module-title">Module 3 : Implémentation en Python, Constructeur & <code>self</code></h3>
            <p>La construction propre d'un objet repose sur la méthode spéciale <code>__init__(self, ...)</code>, appelée automatiquement lors de l'instanciation. Le paramètre <code>self</code> désigne toujours l'instance courante en cours de création ou de manipulation.</p>
            <pre class="code-block">class Point:
    """Classe représentant un point dans un repère cartésien 2D."""
    compteur_objets = 0  # Attribut de classe (partagé par toutes les instances)

    def __init__(self, x, y):
        self.x = x       # Attribut d'instance
        self.y = y
        Point.compteur_objets += 1

    def deplacer(self, dx, dy):
        self.x += dx
        self.y += dy

    def distance_origine(self):
        return (self.x**2 + self.y**2)**0.5</pre>

            <h3 class="module-title">Module 4 : Composition & Relations entre Objets</h3>
            <p>Un attribut d'un objet peut lui-même être une <strong>instance d'une autre classe</strong>. Cette composition permet d'imbriquer des objets (ex. un objet <code>Personne</code> possède un attribut <code>self.chien</code> qui est une instance de <code>Chien</code>, accessible via <code>alain.chien.race</code>) et prépare directement aux listes chaînées et aux arbres.</p>

            <h3 class="module-title">Module 5 : Encapsulation, Accesseurs (Getters) & Mutateurs (Setters)</h3>
            <p>L'<strong>encapsulation</strong> consiste à protéger l'état interne d'un objet en passant par des méthodes dédiées (<em>getters</em> pour lire, <em>setters</em> pour modifier avec contrôle) plutôt qu'en modifiant directement les attributs depuis l'extérieur.</p>
            <div class="callout-warning">
                <strong>Point de vigilance Éduscol :</strong> Python ne possède pas d'attributs privés stricts comme Java ou C++. Préfixer un attribut par un underscore (<code>self._solde</code>) est une convention signalant un usage interne ; le double underscore (<code>self.__solde</code>) déclenche un renommage interne (<em>Name Mangling</em> en <code>_Classe__solde</code>).
            </div>

            <h3 class="module-title">Module 6 : Méthodes Spéciales (Dunder) & Surcharge d'Opérateurs</h3>
            <p>Par défaut, <code>print(obj)</code> affiche une adresse mémoire brute et <code>obj1 == obj2</code> compare les adresses mémoire (identité) plutôt que les valeurs. Les méthodes spéciales (encadrées de doubles underscores) permettent d'intégrer nos classes aux opérateurs natifs de Python :</p>
            <table class="course-table">
                <thead>
                    <tr>
                        <th>Méthode spéciale</th>
                        <th>Déclencheur Python</th>
                        <th>Rôle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>__init__(self, ...)</code></td>
                        <td><code>obj = MaClasse(args)</code></td>
                        <td>Constructeur : initialise les attributs de l'instance</td>
                    </tr>
                    <tr>
                        <td><code>__str__(self)</code></td>
                        <td><code>print(obj)</code> / <code>str(obj)</code></td>
                        <td>Représentation textuelle lisible destinée à l'utilisateur</td>
                    </tr>
                    <tr>
                        <td><code>__repr__(self)</code></td>
                        <td>Console / <code>repr(obj)</code></td>
                        <td>Représentation officielle non ambiguë (débogage)</td>
                    </tr>
                    <tr>
                        <td><code>__eq__(self, autre)</code></td>
                        <td><code>obj1 == obj2</code></td>
                        <td>Redéfinit le test d'égalité logique entre deux instances</td>
                    </tr>
                    <tr>
                        <td><code>__add__(self, autre)</code></td>
                        <td><code>obj1 + obj2</code></td>
                        <td>Surcharge de l'opérateur d'addition <code>+</code></td>
                    </tr>
                </tbody>
            </table>

            <h3 class="module-title">Module 7 : Héritage, Polymorphisme & Programmation Défensive</h3>
            <p>L'<strong>héritage</strong> permet de créer une <strong>classe fille</strong> (ex. <code>class Voiture(Vehicule):</code>) qui hérite des attributs et méthodes d'une <strong>classe mère</strong>. On appelle le constructeur parent via <code>super().__init__(...)</code>. Le <strong>polymorphisme</strong> permet aux classes filles de redéfinir une même méthode (ex. <code>parler()</code>) avec un comportement propre.</p>
            <div class="callout-box">
                <strong>Checklist Bac NSI :</strong>
                <ul class="checklist-list">
                    <li>Définir une classe avec <code>class Nom:</code> et son constructeur <code>__init__(self, ...)</code>.</li>
                    <li>Comprendre le rôle de <code>self</code> et distinguer classe (modèle) et instance (objet).</li>
                    <li>Utiliser l'encapsulation (getters/setters) et la composition d'objets.</li>
                    <li>Redéfinir <code>__str__</code>, <code>__repr__</code>, <code>__eq__</code> et <code>__add__</code>.</li>
                    <li>Étendre une classe par héritage avec <code>super()</code> et vérifier les types avec <code>isinstance()</code>.</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                id: "exo-1-1",
                title: "Exercice 1 (Bases & Méthodes) : La classe Point 2D",
                statement: `Créer une classe <code>Point</code> permettant de modéliser un point du plan par ses coordonnées <code>x</code> et <code>y</code>. Implémenter :
                <br>• le constructeur <code>__init__(self, x, y)</code> ;
                <br>• <code>deplacer(self, dx, dy)</code> qui effectue une translation du point ;
                <br>• <code>distance_origine(self)</code> qui renvoie $\\sqrt{x^2 + y^2}$ ;
                <br>• <code>__str__(self)</code> renvoyant <code>"(x, y)"</code>.`,
                starterCode: `class Point:
    def __init__(self, x: float, y: float):
        # À compléter
        pass

    def deplacer(self, dx: float, dy: float) -> None:
        # À compléter
        pass

    def distance_origine(self) -> float:
        # À compléter
        pass

    def __str__(self) -> str:
        # À compléter
        pass

# Tests
p1 = Point(4, 3)
assert p1.x == 4 and p1.y == 3
assert p1.distance_origine() == 5.0
p1.deplacer(-1, 2)
assert str(p1) == "(3, 5)"
print("Point après déplacement :", p1)
print("Exercice 1 validé !")`,
                solutionCode: `class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def deplacer(self, dx: float, dy: float) -> None:
        self.x += dx
        self.y += dy

    def distance_origine(self) -> float:
        return (self.x**2 + self.y**2)**0.5

    def __str__(self) -> str:
        return f"({self.x}, {self.y})"`
            },
            {
                id: "exo-1-2",
                title: "Exercice 2 (Encapsulation & Getters/Setters) : Classe Joueur & CompteBancaire",
                statement: `En suivant le principe d'encapsulation, compléter la classe <code>Joueur</code> possédant les attributs <code>nom</code>, <code>_club</code> et <code>_age</code>. Implémenter le getter <code>get_club()</code> et le setter <code>mutation(nouveau_club)</code> qui vérifie avec <code>assert</code> que <code>nouveau_club</code> est une chaîne non vide.`,
                starterCode: `class Joueur:
    def __init__(self, nom: str, club: str, age: int):
        self.nom = nom
        self._club = club
        self._age = age

    def get_club(self) -> str:
        # À compléter
        pass

    def mutation(self, nouveau_club: str) -> None:
        # Vérifier que nouveau_club est non vide puis mettre à jour _club
        pass

# Tests
j = Joueur("Nans Ducuing", "UBB", 34)
assert j.get_club() == "UBB"
j.mutation("Perpignan")
assert j.get_club() == "Perpignan"
print(f"{j.nom} joue désormais à {j.get_club()}.")
print("Exercice 2 validé !")`,
                solutionCode: `class Joueur:
    def __init__(self, nom: str, club: str, age: int):
        self.nom = nom
        self._club = club
        self._age = age

    def get_club(self) -> str:
        return self._club

    def mutation(self, nouveau_club: str) -> None:
        assert isinstance(nouveau_club, str) and len(nouveau_club) > 0, "Club invalide"
        self._club = nouveau_club`
            },
            {
                id: "exo-1-3",
                title: "Exercice 3 (Méthodes spéciales) : Fraction avec __repr__ et __eq__",
                statement: `On reprend la classe <code>Fraction(num, den)</code>.
                <br>1. Redéfinir <code>__repr__(self)</code> pour afficher <code>"num/den"</code>, ou uniquement <code>"num"</code> si <code>den == 1</code>.
                <br>2. Redéfinir <code>__eq__(self, autre)</code> pour que <code>f1 == f2</code> renvoie <code>True</code> si les fractions sont mathématiquement égales (produit en croix).`,
                starterCode: `class Fraction:
    def __init__(self, num: int, den: int):
        assert den > 0, "Dénominateur strictement positif requis"
        self.numerateur = num
        self.denominateur = den

    def __repr__(self) -> str:
        # À compléter
        pass

    def __eq__(self, autre: object) -> bool:
        # À compléter
        pass

# Tests
f1 = Fraction(3, 4)
f2 = Fraction(6, 8)
f3 = Fraction(5, 1)
assert repr(f1) == "3/4"
assert repr(f3) == "5"
assert f1 == f2
assert not (f1 == f3)
print("f1 =", f1, "| f3 =", f3, "| f1 == f2 :", f1 == f2)
print("Exercice 3 validé !")`,
                solutionCode: `class Fraction:
    def __init__(self, num: int, den: int):
        assert den > 0, "Dénominateur strictement positif requis"
        self.numerateur = num
        self.denominateur = den

    def __repr__(self) -> str:
        if self.denominateur == 1:
            return str(self.numerateur)
        return f"{self.numerateur}/{self.denominateur}"

    def __eq__(self, autre: object) -> bool:
        if not isinstance(autre, Fraction):
            return False
        return self.numerateur * autre.denominateur == self.denominateur * autre.numerateur`
            },
            {
                id: "exo-1-4",
                title: "Exercice 4 (Surcharge d'opérateurs) : Vecteur 2D et __add__",
                statement: `Compléter la classe <code>Vecteur(x, y)</code> en surchargeant l'opérateur <code>+</code> via <code>__add__(self, autre)</code> (en vérifiant avec <code>assert isinstance(autre, Vecteur)</code> que l'opérande est bien un vecteur) et en ajoutant une méthode <code>norme(self)</code>.`,
                starterCode: `class Vecteur:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __str__(self) -> str:
        return f"Vecteur({self.x}, {self.y})"

    def __eq__(self, autre: object) -> bool:
        return isinstance(autre, Vecteur) and self.x == autre.x and self.y == autre.y

    def __add__(self, autre: 'Vecteur') -> 'Vecteur':
        # À compléter
        pass

# Tests
v1 = Vecteur(1, 2)
v2 = Vecteur(-3, 4)
v3 = v1 + v2
assert v3 == Vecteur(-2, 6)
print("v1 + v2 =", v3)
print("Exercice 4 validé !")`,
                solutionCode: `class Vecteur:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __str__(self) -> str:
        return f"Vecteur({self.x}, {self.y})"

    def __eq__(self, autre: object) -> bool:
        return isinstance(autre, Vecteur) and self.x == autre.x and self.y == autre.y

    def __add__(self, autre: 'Vecteur') -> 'Vecteur':
        assert isinstance(autre, Vecteur), "On ne peut additionner que deux Vecteurs"
        return Vecteur(self.x + autre.x, self.y + autre.y)`
            },
            {
                id: "exo-1-5",
                title: "Exercice 5 (Composition d'objets) : Segment composé de deux Points",
                statement: `En utilisant la composition d'objets, créer une classe <code>Segment</code> dont le constructeur reçoit deux instances de <code>Point</code> (<code>p1</code> et <code>p2</code>). Écrire la méthode <code>longueur(self)</code> calculant la distance $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ et la méthode <code>milieu(self)</code> renvoyant une nouvelle instance de <code>Point</code>.`,
                starterCode: `class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

class Segment:
    def __init__(self, p1: Point, p2: Point):
        # À compléter
        pass

    def longueur(self) -> float:
        # À compléter
        pass

    def milieu(self) -> Point:
        # À compléter
        pass

# Tests
a = Point(1, 2)
b = Point(5, 5)
seg = Segment(a, b)
assert seg.longueur() == 5.0
m = seg.milieu()
assert isinstance(m, Point) and m.x == 3.0 and m.y == 3.5
print(f"Longueur : {seg.longueur()} | Milieu : ({m.x}, {m.y})")
print("Exercice 5 validé !")`,
                solutionCode: `class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

class Segment:
    def __init__(self, p1: Point, p2: Point):
        self.p1 = p1
        self.p2 = p2

    def longueur(self) -> float:
        return ((self.p2.x - self.p1.x)**2 + (self.p2.y - self.p1.y)**2)**0.5

    def milieu(self) -> Point:
        return Point((self.p1.x + self.p2.x) / 2, (self.p1.y + self.p2.y) / 2)`
            },
            {
                id: "exo-1-6",
                title: "Exercice 6 (Héritage & Polymorphisme) : Hiérarchie de Véhicules",
                statement: `On donne la classe mère <code>Vehicule(marque, modele, vitesse_max)</code>. Créer une classe fille <code>Voiture(Vehicule)</code> possédant un attribut supplémentaire <code>portes</code> (int). Utiliser <code>super().__init__(...)</code> dans son constructeur et redéfinir <code>__str__(self)</code> pour ajouter <code>", X portes"</code> à la chaîne renvoyée par la classe mère.`,
                starterCode: `class Vehicule:
    def __init__(self, marque: str, modele: str, vitesse_max: int):
        self.marque = marque
        self.modele = modele
        self.vitesse_max = vitesse_max

    def __str__(self) -> str:
        return f"{self.marque} {self.modele} (Vmax: {self.vitesse_max} km/h)"

class Voiture(Vehicule):
    def __init__(self, marque: str, modele: str, vitesse_max: int, nb_portes: int):
        # À compléter avec super()
        pass

    def __str__(self) -> str:
        # À compléter avec super().__str__()
        pass

# Tests
v1 = Voiture("Renault", "Clio", 160, 5)
assert isinstance(v1, Voiture) and isinstance(v1, Vehicule)
assert str(v1) == "Renault Clio (Vmax: 160 km/h), 5 portes"
print(v1)
print("Exercice 6 validé !")`,
                solutionCode: `class Vehicule:
    def __init__(self, marque: str, modele: str, vitesse_max: int):
        self.marque = marque
        self.modele = modele
        self.vitesse_max = vitesse_max

    def __str__(self) -> str:
        return f"{self.marque} {self.modele} (Vmax: {self.vitesse_max} km/h)"

class Voiture(Vehicule):
    def __init__(self, marque: str, modele: str, vitesse_max: int, nb_portes: int):
        super().__init__(marque, modele, vitesse_max)
        self.portes = nb_portes

    def __str__(self) -> str:
        return super().__str__() + f", {self.portes} portes"`
            }
        ]
    },
    {
        id: "seance-2",
        tag: "Séance 2 • Algorithmique",
        title: "Récursivité",
        shortDesc: "Cas de base, appel récursif, terminaison (variant), pile d'appels et exponentiation rapide.",
        summary: `
            <p>Une fonction est dite <strong>récursive</strong> lorsqu'elle s'appelle elle-même dans sa propre définition. C'est un outil fondamental pour parcourir les arbres et concevoir des algorithmes « diviser pour régner ».</p>
            <div class="course-grid">
                <div class="concept-card">
                    <h4>1. Les deux piliers</h4>
                    <p><strong>Cas de base (condition d'arrêt) :</strong> problème élémentaire résolu directement sans appel récursif.</p>
                    <p><strong>Cas général (appel récursif) :</strong> décomposition vers un sous-problème strictement plus petit.</p>
                </div>
                <div class="concept-card">
                    <h4>2. Terminaison & Variant</h4>
                    <p>Pour garantir que la fonction s'arrête, on identifie un <strong>variant de boucle/récursion</strong> : une grandeur entière positive qui décroît strictement à chaque appel jusqu'au cas de base.</p>
                </div>
                <div class="concept-card">
                    <h4>3. Pile d'appels (Call Stack)</h4>
                    <p>Chaque appel récursif empile un contexte d'exécution en mémoire (LIFO). Les calculs en attente sont résolus lors du <strong>dépilement</strong>.</p>
                    <p>En Python, la profondeur max par défaut est d'environ 1000 appels (<code>RecursionError</code>).</p>
                </div>
                <div class="concept-card">
                    <h4>4. Récursivité sur les chaînes / listes</h4>
                    <p>On traite souvent le premier élément (<code>tab[0]</code>) puis on rappelle la fonction sur le reste (<code>tab[1:]</code> ou via un indice <code>i + 1</code> pour éviter la copie).</p>
                </div>
            </div>
        `,
        exercises: [
            {
                id: "exo-2-1",
                title: "Exercice type 1 : Palindrome récursif",
                statement: `Un palindrome est un mot qui se lit de la même façon de gauche à droite et de droite à gauche (ex. <code>"radar"</code>, <code>"kayak"</code>). Écrire une fonction récursive <code>est_palindrome(mot)</code> qui renvoie <code>True</code> si <code>mot</code> est un palindrome et <code>False</code> sinon.`,
                starterCode: `def est_palindrome(mot: str) -> bool:
    # Cas de base : un mot de longueur 0 ou 1 est toujours un palindrome
    # Cas général : comparer mot[0] et mot[-1], puis appel récursif sur mot[1:-1]
    pass

# Tests
assert est_palindrome("radar") == True
assert est_palindrome("nsi") == False
assert est_palindrome("ressasser") == True
assert est_palindrome("") == True
print("Tests palindrome validés !")`,
                solutionCode: `def est_palindrome(mot: str) -> bool:
    if len(mot) <= 1:
        return True
    if mot[0] != mot[-1]:
        return False
    return est_palindrome(mot[1:-1])`
            },
            {
                id: "exo-2-2",
                title: "Exercice type 2 : Exponentiation rapide (Diviser pour régner)",
                statement: `Pour calculer $x^n$ ($n \\in \\mathbb{N}$), on utilise la relation récursive :
                <br>• Si $n = 0$, $x^0 = 1$
                <br>• Si $n$ est pair, $x^n = (x^{n//2})^2$
                <br>• Si $n$ est impair, $x^n = x \\times (x^{(n-1)//2})^2$
                <br>Implémenter la fonction récursive <code>puissance_rapide(x, n)</code> en veillant à ne faire qu'un seul appel récursif par étape (complexité en $O(\\log_2 n)$).`,
                starterCode: `def puissance_rapide(x: float, n: int) -> float:
    # À compléter
    pass

# Tests
assert puissance_rapide(2, 0) == 1
assert puissance_rapide(2, 10) == 1024
assert puissance_rapide(3, 5) == 243
print("Tests exponentiation rapide validés !")`,
                solutionCode: `def puissance_rapide(x: float, n: int) -> float:
    if n == 0:
        return 1
    demi = puissance_rapide(x, n // 2)
    if n % 2 == 0:
        return demi * demi
    else:
        return x * demi * demi`
            }
        ]
    }
];

function renderSessionsGrid() {
    const grid = document.getElementById("sessions-grid-view");
    grid.innerHTML = "";

    sessionsData.forEach((session) => {
        const card = document.createElement("article");
        card.className = "session-card";
        card.innerHTML = `
            <div>
                <span class="card-tag">${session.tag}</span>
                <h2>${session.title}</h2>
                <p>${session.shortDesc}</p>
            </div>
            <div class="card-footer">
                <span>${session.exercises.length} exercices types</span>
                <span>Ouvrir →</span>
            </div>
        `;
        card.onclick = () => openSession(session);
        grid.appendChild(card);
    });
}

function openSession(session) {
    const gridView = document.getElementById("sessions-grid-view");
    const detailView = document.getElementById("session-detail-view");
    const container = document.getElementById("course-container");

    gridView.classList.add("hidden");
    detailView.classList.remove("hidden");

    const disabledAttr = isPyodideReady ? "" : "disabled";
    let exercisesHTML = "";

    session.exercises.forEach((exo) => {
        exercisesHTML += `
            <div class="exercise-box">
                <h4>${exo.title}</h4>
                <p style="margin-top: 0.5rem;">${exo.statement}</p>

                <div class="mini-ide">
                    <div class="mini-ide-toolbar">
                        <span class="mini-ide-label">Éditeur Python (Ctrl+Entrée pour exécuter)</span>
                        <div class="mini-ide-buttons">
                            <button class="btn-run" ${disabledAttr} onclick="runExerciseCode('${exo.id}')">▶ Exécuter</button>
                            <button class="btn-reset" onclick="resetExerciseCode('${exo.id}')">↺ Réinitialiser</button>
                            <button class="btn-corr" onclick="toggleCorrection('${exo.id}')">Correction</button>
                        </div>
                    </div>
                    <textarea id="editor-${exo.id}"></textarea>
                    <div id="output-${exo.id}" class="mini-console">Prêt à exécuter...</div>
                </div>

                <div id="corr-${exo.id}" class="correction-box">
                    <strong>Proposition de correction :</strong>
                    <pre class="code-block">${exo.solutionCode}</pre>
                </div>
            </div>
        `;
    });

    container.innerHTML = `
        <span class="badge">${session.tag}</span>
        <h2 class="session-title">${session.title}</h2>
        ${session.summary}
        <h3 style="margin-top: 2rem; color: var(--accent);">Exercices types à compléter</h3>
        ${exercisesHTML}
    `;

    session.exercises.forEach((exo) => {
        window.createExerciseEditor(exo.id, exo.starterCode);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]).catch((err) => console.error(err));
    }
}

function showGrid() {
    document.getElementById("session-detail-view").classList.add("hidden");
    document.getElementById("sessions-grid-view").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.toggleCorrection = function(exoId) {
    const box = document.getElementById(`corr-${exoId}`);
    box.classList.toggle("visible");
};

document.addEventListener("DOMContentLoaded", () => {
    renderSessionsGrid();
    document.getElementById("back-btn").addEventListener("click", showGrid);
});