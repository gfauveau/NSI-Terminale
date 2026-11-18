const sessionsData = [
    {
        id: "seance-0",
        tag: "Séance 0 • Prérequis",
        title: "Récapitulatif des bases de 1re",
        shortDesc: "Types construits (listes, tuples, dictionnaires), parcours, spécifications, tests et algorithmes fondamentaux.",
        summary: `
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Rappels</span>
                    <h3>Les 4 piliers de Première NSI à maîtriser</h3>
                </div>
                <p>Avant d'aborder la programmation orientée objet, la récursivité et les structures arborescentes, 
                cette séance consolide les fondamentaux indispensables pour l'épreuve pratique et écrite.</p>
                <div class="course-grid">
                    <div class="concept-card">
                        <h4>1. Types construits</h4>
                        <p><strong>Listes :</strong> mutables, indexées dès 0 (<code>tab[i]</code>, <code>tab.append(x)</code>).</p>
                        <p><strong>Tuples :</strong> non mutables (<code>coord = (x, y)</code>).</p>
                        <p><strong>Dictionnaires :</strong> clé/valeur en $O(1)$ moyen (<code>d.items()</code>).</p>
                    </div>
                    <div class="concept-card">
                        <h4>2. Parcours & Compréhensions</h4>
                        <p>Par valeur : <code>for elt in tab:</code></p>
                        <p>Par indice : <code>for i in range(len(tab)):</code></p>
                        <p>Compréhension : <code>[x**2 for x in range(10) if x % 2 == 0]</code></p>
                    </div>
                    <div class="concept-card">
                        <h4>3. Spécification & Tests</h4>
                        <p>Documenter le rôle, les paramètres et le type de retour (<code>docstring</code> + annotations de type).</p>
                        <p>Vérifier les préconditions et cas limites avec <code>assert</code>.</p>
                    </div>
                    <div class="concept-card">
                        <h4>4. Algorithmes de référence</h4>
                        <p>Recherche d'extremum, moyenne, dichotomie dans un tableau trié ($O(\\log_2 n)$), tris par insertion et sélection ($O(n^2)$).</p>
                    </div>
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
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Paradigmes de programmation et modularité</h3>
                </div>
                <p>Un <strong>paradigme de programmation</strong> (du grec <em>paradeigma</em>, « modèle ») désigne la démarche intellectuelle adoptée pour modéliser et résoudre un problème informatique. Comme trois menuisiers assemblant un meuble (collé-pointé, visseuse ou tenons-mortaises), chaque paradigme possède ses outils et ses compromis. Python est un langage <strong>multi-paradigme</strong>.</p>
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
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Vocabulaire fondamental & Objets déjà autour de nous</h3>
                </div>
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
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Implémentation en Python, Constructeur & <code>self</code></h3>
                </div>
                <p>La construction propre d'un objet repose sur la méthode spéciale <code>__init__(self, ...)</code>, appelée automatiquement lors de l'instanciation. Le paramètre <code>self</code> désigne toujours l'instance courante en cours de création ou de manipulation.</p>
                <div class="two-col-grid">
                    <div>
                        <pre class="code-block">class Point:
    """Point dans un repère 2D."""
    compteur = 0  # Attribut de classe

    def __init__(self, x, y):
        self.x = x  # Attribut d'instance
        self.y = y
        Point.compteur += 1

    def deplacer(self, dx, dy):
        self.x += dx
        self.y += dy

    def distance_origine(self):
        return (self.x**2 + self.y**2)**0.5</pre>
                    </div>
                    <div class="concept-card">
                        <h4>À retenir sur <code>__init__</code> et <code>self</code></h4>
                        <p>• <strong>Attribut d'instance (<code>self.x</code>) :</strong> propre à chaque objet créé en mémoire.</p>
                        <p>• <strong>Attribut de classe (<code>Point.compteur</code>) :</strong> partagé par toutes les instances de la classe.</p>
                        <p>• <strong>Appel d'une méthode :</strong> écrire <code>p1.deplacer(-1, 2)</code> revient en interne à exécuter <code>Point.deplacer(p1, -1, 2)</code>.</p>
                    </div>
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Composition & Relations entre Objets</h3>
                </div>
                <p>Un attribut d'un objet peut lui-même être une <strong>instance d'une autre classe</strong>. Cette composition permet d'imbriquer des structures complexes et prépare directement aux listes chaînées et aux arbres.</p>
                <div class="two-col-grid">
                    <pre class="code-block">class Chien:
    def __init__(self, nom, race):
        self.nom = nom
        self.race = race

class Personne:
    def __init__(self, prenom, chien):
        self.prenom = prenom
        self.chien = chien # Instance de Chien</pre>
                    <pre class="code-block"># Instanciation imbriquée
medor = Chien("Médor", "Berger Allemand")
alain = Personne("Alain", medor)

# Accès chaîné aux attributs :
print(alain.chien.race)
# Affiche : Berger Allemand</pre>
                </div>
            </div>

            <!-- MODULE 5 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 5</span>
                    <h3>Encapsulation, Accesseurs (Getters) & Mutateurs (Setters)</h3>
                </div>
                <p>L'<strong>encapsulation</strong> consiste à protéger l'état interne d'un objet en passant par des méthodes dédiées (<em>getters</em> pour lire, <em>setters</em> pour modifier avec contrôle) plutôt qu'en modifiant directement les attributs depuis l'extérieur.</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Notation Python</th>
                            <th>Signification & Portée</th>
                            <th>Comportement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>self.attribut</code></td>
                            <td>Public</td>
                            <td>Accessible et modifiable librement depuis l'extérieur.</td>
                        </tr>
                        <tr>
                            <td><code>self._attribut</code></td>
                            <td>Protégé (Convention)</td>
                            <td>Signale aux développeurs un usage interne à la classe (à manipuler via getter/setter).</td>
                        </tr>
                        <tr>
                            <td><code>self.__attribut</code></td>
                            <td>Pseudo-privé (<em>Name Mangling</em>)</td>
                            <td>Renommé en interne en <code>_NomClasse__attribut</code> pour éviter les collisions.</td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-warning">
                    <strong>Point de vigilance Éduscol :</strong> Python ne possède pas d'attributs privés stricts comme Java ou C++. L'encapsulation repose avant tout sur une convention de bonne pratique et la programmation défensive (<code>assert</code> dans les setters).
                </div>
            </div>

            <!-- MODULE 6 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 6</span>
                    <h3>Méthodes Spéciales (Dunder) & Surcharge d'Opérateurs</h3>
                </div>
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
            </div>

            <!-- MODULE 7 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 7</span>
                    <h3>Héritage, Polymorphisme & Synthèse Bac</h3>
                </div>
                <p>L'<strong>héritage</strong> permet de créer une <strong>classe fille</strong> (ex. <code>class Voiture(Vehicule):</code>) qui hérite des attributs et méthodes d'une <strong>classe mère</strong>. On appelle le constructeur parent via <code>super().__init__(...)</code>. Le <strong>polymorphisme</strong> permet aux classes filles de redéfinir une même méthode avec un comportement propre.</p>
                <div class="two-col-grid">
                    <pre class="code-block">class Vehicule:
    def __init__(self, marque, vmax):
        self.marque = marque
        self.vmax = vmax

class Voiture(Vehicule):
    def __init__(self, marque, vmax, portes):
        super().__init__(marque, vmax)
        self.portes = portes</pre>
                    <div class="callout-success" style="margin: 0;">
                        <strong>Checklist Bac NSI :</strong>
                        <ul class="checklist-list">
                            <li>Définir une classe (<code>class Nom:</code>) et son constructeur <code>__init__</code>.</li>
                            <li>Comprendre le rôle de <code>self</code> et distinguer classe et instance.</li>
                            <li>Utiliser l'encapsulation (getters/setters) et la composition.</li>
                            <li>Redéfinir <code>__str__</code>, <code>__repr__</code>, <code>__eq__</code> et <code>__add__</code>.</li>
                            <li>Étendre une classe avec <code>super()</code> et tester avec <code>isinstance()</code>.</li>
                        </ul>
                    </div>
                </div>
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

    def __str__(self)