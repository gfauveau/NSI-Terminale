const sessionsData = [
    {
        id: "seance-0",
        tag: "Séance 0 • Révisions 1re",
        title: "Récapitulatif des bases de 1re",
        shortDesc: "Types construits, mutabilité, parcours, dictionnaires, complexités des tris et dichotomie, QCM bilan et exercices.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Types de base, Mutabilité et Références mémoire</h3>
                </div>
                <p>En Python, toute variable pointe vers un objet en mémoire. La distinction entre types <strong>immuables</strong> (non modifiables après création) et <strong>mutables</strong> (modifiables sur place) est cruciale pour éviter les effets de bord lors des passages de paramètres dans une fonction.</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Type Python</th>
                            <th>Syntaxe</th>
                            <th>Mutabilité</th>
                            <th>Opérations clés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Entier / Flottant / Booléen</strong></td>
                            <td><code>42</code>, <code>3.14</code>, <code>True</code></td>
                            <td>Immuable</td>
                            <td><code>//</code> (quotient entier), <code>%</code> (reste), <code>**</code> (puissance)</td>
                        </tr>
                        <tr>
                            <td><strong>Chaîne (<code>str</code>)</strong></td>
                            <td><code>"NSI"</code></td>
                            <td>Immuable</td>
                            <td><code>len(s)</code>, <code>s[i]</code>, tranches <code>s[1:4]</code>, <code>s.split()</code></td>
                        </tr>
                        <tr>
                            <td><strong>Tuple (<code>tuple</code>)</strong></td>
                            <td><code>(12, 45)</code></td>
                            <td>Immuable</td>
                            <td>Dépaquetage : <code>x, y = coord</code> (idéal pour renvoyer plusieurs valeurs)</td>
                        </tr>
                        <tr>
                            <td><strong>Liste / Tableau (<code>list</code>)</strong></td>
                            <td><code>[4, 5, 2]</code></td>
                            <td><strong>Mutable</strong></td>
                            <td><code>tab[i] = v</code>, <code>tab.append(x)</code>, <code>tab.pop()</code></td>
                        </tr>
                        <tr>
                            <td><strong>Dictionnaire (<code>dict</code>)</strong></td>
                            <td><code>{"a": 1, "b": 2}</code></td>
                            <td><strong>Mutable</strong></td>
                            <td>Accès en $O(1)$ : <code>d[cle]</code>, <code>cle in d</code>, <code>d.keys()</code>, <code>d.values()</code>, <code>d.items()</code></td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-warning">
                    <strong>Piège classique de copie :</strong> Écrire <code>b = a</code> sur une liste ne crée pas une nouvelle liste, mais un <strong>alias</strong> (deux noms pointant vers le même tableau en mémoire). Pour copier réellement un tableau à une dimension, on utilise <code>b = a.copy()</code> ou <code>b = list(a)</code>.
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Boucles, Parcours et Listes en compréhension</h3>
                </div>
                <p>Choisir le bon mode de parcours rend le code plus lisible et limite les erreurs d'indice (<code>IndexError</code>).</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Parcours par valeur vs par indice</h4>
                        <pre class="code-block"># 1. Par valeur (lecture seule)
for note in notes:
    somme += note

# 2. Par indice (modification ou comparaison)
for i in range(len(notes) - 1):
    if notes[i] > notes[i + 1]:
        trie = False</pre>
                    </div>
                    <div class="concept-card">
                        <h4>Dictionnaires & Compréhensions</h4>
                        <pre class="code-block"># Parcours complet d'un dictionnaire
for cle, val in stock.items():
    print(f"{cle} : {val}")

# Liste en compréhension avec filtre
pairs = [x**2 for x in range(10) if x % 2 == 0]</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Spécification, Programmation défensive et Tests</h3>
                </div>
                <p>En Terminale (notamment lors de l'épreuve pratique), toute fonction écrite doit être proprement spécifiée et testée sur les cas généraux comme sur les <strong>cas limites</strong> (tableau vide, un seul élément, valeur absente).</p>
                <div class="two-col-grid">
                    <pre class="code-block">def moyenne(tab: list[float]) -> float:
    """
    Calcule la moyenne des éléments de tab.
    Précondition : tab est non vide.
    """
    assert len(tab) > 0, "Tableau vide interdit"
    return sum(tab) / len(tab)</pre>
                    <div class="concept-card">
                        <h4>Les 3 réflexes qualité</h4>
                        <p>• <strong>Annotations de type :</strong> indiquer les types attendus des paramètres et du retour (<code>-> float</code>).</p>
                        <p>• <strong>Docstring :</strong> décrire le rôle de la fonction et ses préconditions.</p>
                        <p>• <strong>Jeu de tests <code>assert</code> :</strong> vérifier le comportement attendu sans modifier le code de la fonction.</p>
                    </div>
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Complexités et Algorithmes de référence de 1re</h3>
                </div>
                <p>La <strong>complexité temporelle</strong> mesure l'évolution du nombre d'opérations élémentaires en fonction de la taille $n$ des données en entrée dans le pire des cas.</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Algorithme</th>
                            <th>Précondition</th>
                            <th>Complexité (pire cas)</th>
                            <th>Principe & Invariant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Recherche séquentielle / Extremum</strong></td>
                            <td>Aucune</td>
                            <td>$O(n)$ (linéaire)</td>
                            <td>Parcours complet du tableau élément par élément.</td>
                        </tr>
                        <tr>
                            <td><strong>Tri par sélection</strong></td>
                            <td>Aucune</td>
                            <td>$O(n^2)$ (quadratique)</td>
                            <td>À chaque étape $i$, on cherche le minimum dans <code>tab[i:]</code> et on l'échange avec <code>tab[i]</code>.</td>
                        </tr>
                        <tr>
                            <td><strong>Tri par insertion</strong></td>
                            <td>Aucune</td>
                            <td>$O(n^2)$ (pire cas)<br>$O(n)$ (déjà trié)</td>
                            <td>À chaque étape $i$, on insère <code>tab[i]</code> à sa place dans la partie gauche déjà triée <code>tab[:i]</code>.</td>
                        </tr>
                        <tr>
                            <td><strong>Recherche dichotomique</strong></td>
                            <td><strong>Tableau trié</strong></td>
                            <td>$O(\\log_2 n)$ (logarithmique)</td>
                            <td>On divise par 2 l'intervalle de recherche <code>[debut, fin]</code> à chaque itération.</td>
                        </tr>
                        <tr>
                            <td><strong>Algorithmes gloutons</strong></td>
                            <td>Problème d'optimisation</td>
                            <td>Dépend du tri ($O(n \\log n)$)</td>
                            <td>Choix localement optimal à chaque étape (ex. rendu de monnaie, sac à dos fractionnaire).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- MODULE 5 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 5</span>
                    <h3>Représentation des données & Architecture</h3>
                </div>
                <div class="course-grid">
                    <div class="concept-card">
                        <h4>Entiers & Binaire</h4>
                        <p>• Sur $n$ bits non signés : valeurs de $0$ à $2^n - 1$.</p>
                        <p>• Sur $n$ bits en <strong>complément à 2</strong> (signés) : de $-2^{n-1}$ à $2^{n-1} - 1$.</p>
                        <p>• Hexadécimal : 1 chiffre hexa = 4 bits (un quartet).</p>
                    </div>
                    <div class="concept-card">
                        <h4>Flottants (IEEE 754)</h4>
                        <p>Les nombres décimaux comme $0.1$ n'ont pas d'écriture binaire finie : <code>0.1 + 0.2 == 0.3</code> vaut <code>False</code>. On compare toujours deux flottants à $\\varepsilon$ près : <code>abs(a - b) < 1e-9</code>.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Tables CSV & Réseaux</h4>
                        <p>• Tables : projection (colonnes), sélection (lignes), tri par clé (<code>sorted(table, key=...)</code>).</p>
                        <p>• Réseaux : adresse IPv4 + masque de sous-réseau (<code>ET</code> logique bit à bit).</p>
                    </div>
                </div>
                <div class="callout-success">
                    <strong>Checklist de validation Séance 0 :</strong>
                    <ul class="checklist-list">
                        <li>Savoir parcourir un tableau par indice ou par valeur et construire un dictionnaire d'occurrences.</li>
                        <li>Distinguer les types mutables (<code>list</code>, <code>dict</code>) des types immuables (<code>tuple</code>, <code>str</code>).</li>
                        <li>Connaître les complexités : $O(1)$ (accès dictionnaire), $O(\\log_2 n)$ (dichotomie), $O(n)$ (parcours), $O(n^2)$ (tris quadratiques).</li>
                        <li>Savoir écrire et vérifier un invariant de boucle ainsi que des assertions de test.</li>
                    </ul>
                </div>
            </div>
        `,
        qcm: [
            {
                question: "1. Quelle est l'affichage produit par le code suivant ?<br><code>a = [1, 2, 3]<br>b = a<br>b.append(4)<br>print(a)</code>",
                options: [
                    "[1, 2, 3]",
                    "[1, 2, 3, 4]",
                    "Une erreur TypeError",
                    "[4]"
                ],
                answer: 1,
                explanation: "Les listes sont mutables : b = a crée un alias vers la même liste en mémoire. Modifier b modifie donc également a."
            },
            {
                question: "2. Quelle structure de données permet de tester l'appartenance d'une clé (<code>cle in structure</code>) en temps constant $O(1)$ en moyenne ?",
                options: [
                    "Une liste (list)",
                    "Un tuple (tuple)",
                    "Un dictionnaire (dict)",
                    "Une chaîne de caractères (str)"
                ],
                answer: 2,
                explanation: "Grâce aux tables de hachage, la recherche d'une clé dans un dictionnaire Python s'effectue en $O(1)$ moyen, contre $O(n)$ dans une liste."
            },
            {
                question: "3. Quelle est la complexité dans le pire des cas de la recherche dichotomique dans un tableau trié de $n$ éléments ?",
                options: [
                    "$O(1)$",
                    "$O(\\log_2 n)$",
                    "$O(n)$",
                    "$O(n^2)$"
                ],
                answer: 1,
                explanation: "À chaque étape, la taille de la zone de recherche est divisée par 2 : il faut au plus $\\lfloor \\log_2(n) \\rfloor + 1$ étapes (ex. 10 étapes maximum pour 1024 éléments)."
            },
            {
                question: "4. Parmi les instructions suivantes, laquelle déclenche une erreur <code>TypeError</code> ?",
                options: [
                    "<code>t = (1, 2, 3); x = t[0]</code>",
                    "<code>s = 'bonjour'; s[0] = 'B'</code>",
                    "<code>d = {'a': 1}; d['b'] = 2</code>",
                    "<code>L = [10, 20]; L[1] = 30</code>"
                ],
                answer: 1,
                explanation: "Les chaînes de caractères (str) et les tuples sont immuables en Python : on ne peut pas modifier un caractère sur place par affectation."
            },
            {
                question: "5. Sur 8 bits en complément à 2, quel est l'intervalle des entiers relatifs représentables ?",
                options: [
                    "De $0$ à $255$",
                    "De $-127$ à $+127$",
                    "De $-128$ à $+127$",
                    "De $-256$ à $+255$"
                ],
                answer: 2,
                explanation: "Sur $n = 8$ bits signés en complément à 2, l'intervalle est $[-2^{n-1}, 2^{n-1}-1]$, soit $[-128, +127]$ (256 valeurs au total)."
            },
            {
                question: "6. Quelle est la particularité du tri par insertion lorsque le tableau en entrée est déjà trié ?",
                options: [
                    "Sa complexité reste quadratique en $O(n^2)$",
                    "Sa complexité devient linéaire en $O(n)$",
                    "Il échoue avec une erreur d'indice",
                    "Sa complexité devient logarithmique en $O(\\log_2 n)$"
                ],
                answer: 1,
                explanation: "Si le tableau est déjà trié, la boucle interne while du tri par insertion s'arrête immédiatement à chaque tour : il n'y a que $n - 1$ comparaisons, soit $O(n)$."
            }
        ],
        exercises: [
            {
                id: "exo-0-1",
                title: "Exercice 1 (Dictionnaires) : Comptage d'occurrences et élément majoritaire",
                statement: `Écrire une fonction <code>compter_occurrences(chaine)</code> qui renvoie un dictionnaire associant à chaque caractère son nombre d'apparitions dans <code>chaine</code>, puis une fonction <code>plus_frequent(chaine)</code> renvoyant le caractère ayant le plus grand nombre d'occurrences.`,
                starterCode: `def compter_occurrences(chaine: str) -> dict:
    # À compléter
    pass

def plus_frequent(chaine: str) -> str:
    assert len(chaine) > 0, "La chaîne doit être non vide"
    # À compléter
    pass

# Tests
assert compter_occurrences("abracadabra") == {'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}
assert plus_frequent("abracadabra") == 'a'
print("Exercice 1 validé !")`,
                solutionCode: `def compter_occurrences(chaine: str) -> dict:
    occurrences = {}
    for caractere in chaine:
        if caractere in occurrences:
            occurrences[caractere] += 1
        else:
            occurrences[caractere] = 1
    return occurrences

def plus_frequent(chaine: str) -> str:
    assert len(chaine) > 0, "La chaîne doit être non vide"
    occ = compter_occurrences(chaine)
    max_car = chaine[0]
    for car, nb in occ.items():
        if nb > occ[max_car]:
            max_car = car
    return max_car`
            },
            {
                id: "exo-0-2",
                title: "Exercice 2 (Complexité $O(\\log_2 n)$) : Recherche dichotomique",
                statement: `Écrire une fonction <code>recherche_dichotomique(tab, cible)</code> qui renvoie l'indice de <code>cible</code> dans un tableau trié par ordre croissant, ou <code>-1</code> si l'élément est absent.`,
                starterCode: `def recherche_dichotomique(tab: list, cible: int) -> int:
    debut = 0
    fin = len(tab) - 1
    # À compléter
    return -1

# Tests
assert recherche_dichotomique([2, 5, 8, 12, 16, 23, 38, 56], 23) == 5
assert recherche_dichotomique([2, 5, 8, 12, 16, 23, 38, 56], 10) == -1
assert recherche_dichotomique([], 5) == -1
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
            },
            {
                id: "exo-0-3",
                title: "Exercice 3 (Algorithme de tri) : Tri par sélection sur place",
                statement: `Compléter la fonction <code>tri_selection(tab)</code> qui trie le tableau <code>tab</code> par ordre croissant sur place. À chaque étape <code>i</code>, rechercher l'indice <code>ind_min</code> du plus petit élément dans la sous-liste <code>tab[i:]</code> puis échanger <code>tab[i]</code> et <code>tab[ind_min]</code>.`,
                starterCode: `def tri_selection(tab: list) -> None:
    n = len(tab)
    for i in range(n - 1):
        ind_min = i
        # Rechercher l'indice du minimum à droite de i
        # Échanger tab[i] et tab[ind_min]
        pass

# Tests
exemple = [29, 10, 14, 37, 13]
tri_selection(exemple)
assert exemple == [10, 13, 14, 29, 37]
print("Tableau trié :", exemple)
print("Tri par sélection validé !")`,
                solutionCode: `def tri_selection(tab: list) -> None:
    n = len(tab)
    for i in range(n - 1):
        ind_min = i
        for j in range(i + 1, n):
            if tab[j] < tab[ind_min]:
                ind_min = j
        tab[i], tab[ind_min] = tab[ind_min], tab[i]`
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

    def __str__(self) -> str:
        return f"({self.x}, {self.y})"`
            },
            {
                id: "exo-1-2",
                title: "Exercice 2 (Encapsulation & Getters/Setters) : Classe Joueur",
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
                statement: `Compléter la classe <code>Vecteur(x, y)</code> en surchargeant l'opérateur <code>+</code> via <code>__add__(self, autre)</code> (en vérifiant avec <code>assert isinstance(autre, Vecteur)</code> que l'opérande est bien un vecteur).`,
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
        tag: "Séance 2 • Cours Complet",
        title: "La Récursivité",
        shortDesc: "Cas de base, appel récursif, pile d'exécution (LIFO), dépassement de pile, récursivité double, mémoïsation et Diviser pour Régner.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Définition, Règle d'or et Exemples fondateurs</h3>
                </div>
                <p>Une fonction est dite <strong>récursive</strong> lorsqu'elle fait appel à elle-même dans sa propre définition pour résoudre un problème en le décomposant en sous-problèmes de taille strictement réduite.</p>
                <div class="callout-info">
                    <strong>Règle d'or de la récursivité :</strong> Tout algorithme récursif valide doit obligatoirement comporter :
                    <br>1. <strong>Un cas de base (condition d'arrêt) :</strong> valeur de l'argument pour laquelle le résultat est renvoyé immédiatement sans appel récursif (comme le rez-de-chaussée d'un escalier).
                    <br>2. <strong>Un appel récursif avec réduction stricte :</strong> le paramètre évolue (ex. <code>n - 1</code>, <code>n // 2</code>, <code>lst[1:]</code>) afin de converger à coup sûr vers le cas de base.
                </div>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Exemple 1 : Somme des $n$ premiers entiers</h4>
                        <pre class="code-block">def mystere(n: int) -> int:
    if n == 0:
        return 0  # Cas de base
    else:
        return n + mystere(n - 1)

# mystere(4) -> 4 + (3 + (2 + (1 + 0))) = 10</pre>
                    </div>
                    <div class="concept-card">
                        <h4>Exemple 2 : Factorielle ($n!$)</h4>
                        <pre class="code-block">def factorielle(n: int) -> int:
    if n == 0:
        return 1  # Cas de base : 0! = 1
    else:
        return n * factorielle(n - 1)

# factorielle(5) -> 5 * 4 * 3 * 2 * 1 = 120</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Mécanisme interne : la Pile d'Exécution (Call Stack)</h3>
                </div>
                <p>Lors de l'exécution d'une fonction récursive, l'interpréteur empile chaque appel en mémoire vive dans une <strong>pile d'exécution</strong> fonctionnant selon le principe <strong>LIFO</strong> (<em>Last In, First Out</em> — Dernier Entré, Premier Sorti).</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Phase d'exécution</th>
                            <th>Comportement de la pile pour <code>mystere(3)</code></th>
                            <th>État des calculs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Descente (Empilement)</strong></td>
                            <td><code>mystere(3)</code> $\\rightarrow$ <code>mystere(2)</code> $\\rightarrow$ <code>mystere(1)</code> $\\rightarrow$ <code>mystere(0)</code></td>
                            <td>Chaque contexte d'appel est mis en attente au sommet de la pile.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Cas de base atteint</strong></td>
                            <td><code>mystere(0)</code> renvoie <code>0</code></td>
                            <td>La descente s'arrête au sommet de la pile.</td>
                        </tr>
                        <tr>
                            <td><strong>3. Remontée (Dépilement)</strong></td>
                            <td><code>1 + 0 = 1</code> $\\rightarrow$ <code>2 + 1 = 3</code> $\\rightarrow$ <code>3 + 3 = 6</code></td>
                            <td>Les opérations en attente sont résolues du haut vers le bas jusqu'au résultat final.</td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-warning">
                    <strong>Piège du dépassement de pile (Stack Overflow) :</strong> La taille de la pile d'appels est limitée en mémoire. En Python, la profondeur maximale par défaut est d'environ <strong>1 000 appels imbriqués</strong> : au-delà (ou en cas d'oubli du cas de base), Python lève l'exception <code>RecursionError: maximum recursion depth exceeded</code>.
                </div>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Méthodologie en 4 étapes & Structures de données</h3>
                </div>
                <div class="course-grid">
                    <div class="concept-card">
                        <h4>Méthode de conception</h4>
                        <p><strong>1.</strong> Identifier le <strong>type de retour</strong> (entier, booléen, liste, chaîne...).</p>
                        <p><strong>2.</strong> Écrire le(s) <strong>cas de base</strong> et la valeur retournée.</p>
                        <p><strong>3.</strong> Définir la <strong>réduction</strong> du problème (variant décroissant).</p>
                        <p><strong>4.</strong> Combiner l'appel récursif en respectant le type de retour.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Récursivité sur les listes (Tête / Queue)</h4>
                        <pre class="code-block">def somme_liste(lst):
    if len(lst) == 0:
        return 0
    return lst[0] + somme_liste(lst[1:])</pre>
                        <p><em>Attention :</em> le slicing <code>lst[1:]</code> copie la liste à chaque étape ($O(n)$).</p>
                    </div>
                    <div class="concept-card">
                        <h4>Dichotomie récursive sans copie</h4>
                        <pre class="code-block">def dicho_rec(tab, x, i, j):
    if i > j:
        return False
    m = (i + j) // 2
    if tab[m] == x: return True
    elif tab[m] < x:
        return dicho_rec(tab, x, m + 1, j)
    else:
        return dicho_rec(tab, x, i, m - 1)</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Récursivité double, Récursivité explosive & Mémoïsation</h3>
                </div>
                <p>Une fonction présente une <strong>récursivité double</strong> lorsqu'elle effectue deux appels récursifs dans son corps, comme pour la suite de Fibonacci ($F_0 = 0$, $F_1 = 1$, $F_n = F_{n-1} + F_{n-2}$). Sans précaution, l'arbre d'appels croît exponentiellement en $\\Theta(2^n)$ car les mêmes sous-problèmes sont recalculés des milliers de fois.</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Version naïve explosive — $\\Theta(2^n)$</h4>
                        <pre class="code-block">def fibo_naif(n):
    if n <= 1:
        return n
    return fibo_naif(n - 1) + fibo_naif(n - 2)

# fibo_naif(40) prend ~30 secondes
# car fibo(2) est recalculé des millions de fois !</pre>
                    </div>
                    <div class="concept-card">
                        <h4>Avec Mémoïsation (dictionnaire) — $\\Theta(n)$</h4>
                        <pre class="code-block">def fibo_memo(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibo_memo(n-1, memo) + fibo_memo(n-2, memo)
    return memo[n]</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 5 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 5</span>
                    <h3>Paradigme « Diviser pour Régner » & Complexités</h3>
                </div>
                <p>Le paradigme <strong>Diviser pour Régner</strong> (<em>Divide and Conquer</em>) consiste à découper un problème de taille $n$ en sous-problèmes indépendants de taille divisée par 2, à les résoudre récursivement, puis à combiner leurs résultats (ex. <strong>Exponentiation rapide</strong>, <strong>Tri Fusion</strong>).</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Relation de récurrence</th>
                            <th>Algorithme emblématique</th>
                            <th>Complexité temporelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$T(n) = T(n - 1) + \\Theta(1)$</td>
                            <td>Factorielle, Somme récursive, Puissance naïve</td>
                            <td>$\\Theta(n)$ (Linéaire)</td>
                        </tr>
                        <tr>
                            <td>$T(n) = T(n / 2) + \\Theta(1)$</td>
                            <td>Recherche dichotomique (avec indices), Exponentiation rapide</td>
                            <td>$\\Theta(\\log_2 n)$ (Logarithmique)</td>
                        </tr>
                        <tr>
                            <td>$T(n) = 2 T(n / 2) + \\Theta(n)$</td>
                            <td>Tri Fusion (<em>Merge Sort</em>)</td>
                            <td>$\\Theta(n \\log_2 n)$ (Quasi-linéaire)</td>
                        </tr>
                        <tr>
                            <td>$T(n) = 2 T(n - 1) + \\Theta(1)$</td>
                            <td>Tours de Hanoï ($2^n - 1$ déplacements), Fibonacci naïf</td>
                            <td>$\\Theta(2^n)$ (Exponentielle)</td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-success">
                    <strong>Checklist Bac NSI :</strong>
                    <ul class="checklist-list">
                        <li>Identifier systématiquement le <strong>cas de base</strong> et vérifier la <strong>terminaison</strong> (variant décroissant).</li>
                        <li>Savoir dérouler à la main la <strong>pile d'appels</strong> d'une fonction récursive simple ou double.</li>
                        <li>Éviter le slicing coûteux (<code>lst[1:]</code>) en passant des indices de bornes <code>(i, j)</code>.</li>
                        <li>Comprendre pourquoi la <strong>mémoïsation</strong> transforme une complexité exponentielle en linéaire.</li>
                    </ul>
                </div>
            </div>
        `,
        exercises: [
            {
                id: "exo-2-1",
                title: "Exercice 1 (Récursivité sur les entiers) : Somme des chiffres d'un entier",
                statement: `Écrire une fonction récursive <code>somme_chiffres(n)</code> qui prend en paramètre un entier naturel $n \\ge 0$ et renvoie la somme de ses chiffres en base 10 (ex. <code>somme_chiffres(2026) == 10</code>).
                <br><em>Indice :</em> le dernier chiffre vaut <code>n % 10</code> et le nombre privé de son dernier chiffre vaut <code>n // 10</code>.`,
                starterCode: `def somme_chiffres(n: int) -> int:
    # Cas de base : si n < 10, renvoyer n
    # Cas général : n % 10 + appel récursif sur n // 10
    pass

# Tests
assert somme_chiffres(0) == 0
assert somme_chiffres(7) == 7
assert somme_chiffres(2026) == 10
assert somme_chiffres(9876) == 30
print("Exercice 1 validé !")`,
                solutionCode: `def somme_chiffres(n: int) -> int:
    if n < 10:
        return n
    return (n % 10) + somme_chiffres(n // 10)`
            },
            {
                id: "exo-2-2",
                title: "Exercice 2 (Algorithme d'Euclide) : PGCD récursif",
                statement: `L'algorithme d'Euclide calcule le plus grand commun diviseur de deux entiers naturels $a$ et $b$ grâce à la relation : $\\text{pgcd}(a, 0) = a$ et $\\text{pgcd}(a, b) = \\text{pgcd}(b, a \\bmod b)$ pour $b > 0$. Implémenter la fonction récursive <code>pgcd(a, b)</code>.`,
                starterCode: `def pgcd(a: int, b: int) -> int:
    # À compléter
    pass

# Tests
assert pgcd(48, 18) == 6
assert pgcd(1071, 462) == 21
assert pgcd(17, 5) == 1
print("PGCD validé !")`,
                solutionCode: `def pgcd(a: int, b: int) -> int:
    if b == 0:
        return a
    return pgcd(b, a % b)`
            },
            {
                id: "exo-2-3",
                title: "Exercice 3 (Chaînes de caractères) : Palindrome récursif",
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
                id: "exo-2-4",
                title: "Exercice 4 (Sans copie de liste) : Recherche dichotomique récursive",
                statement: `Compléter la fonction récursive <code>dicho_rec(tab, cible, i, j)</code> qui recherche <code>cible</code> dans le sous-tableau trié <code>tab[i..j]</code> et renvoie son indice, ou <code>-1</code> si l'élément est absent.`,
                starterCode: `def dicho_rec(tab: list, cible: int, i: int, j: int) -> int:
    # Cas de base : intervalle vide (i > j) -> renvoyer -1
    # Calculer le milieu m = (i + j) // 2 et comparer tab[m] à cible
    pass

# Tests
t = [3, 7, 12, 19, 25, 31, 42, 58]
assert dicho_rec(t, 25, 0, len(t) - 1) == 4
assert dicho_rec(t, 3, 0, len(t) - 1) == 0
assert dicho_rec(t, 20, 0, len(t) - 1) == -1
print("Dichotomie récursive validée !")`,
                solutionCode: `def dicho_rec(tab: list, cible: int, i: int, j: int) -> int:
    if i > j:
        return -1
    m = (i + j) // 2
    if tab[m] == cible:
        return m
    elif tab[m] < cible:
        return dicho_rec(tab, cible, m + 1, j)
    else:
        return dicho_rec(tab, cible, i, m - 1)`
            },
            {
                id: "exo-2-5",
                title: "Exercice 5 (Diviser pour régner) : Exponentiation rapide en $O(\\log_2 n)$",
                statement: `Pour calculer $x^n$ ($n \\in \\mathbb{N}$), on utilise la relation récursive :
                <br>• Si $n = 0$, $x^0 = 1$
                <br>• Si $n$ est pair, $x^n = (x^{n//2})^2$
                <br>• Si $n$ est impair, $x^n = x \\times (x^{(n-1)//2})^2$
                <br>Implémenter <code>puissance_rapide(x, n)</code> en veillant à ne faire qu'un seul appel récursif par étape.`,
                starterCode: `def puissance_rapide(x: float, n: int) -> float:
    # À compléter
    pass

# Tests
assert puissance_rapide(2, 0) == 1
assert puissance_rapide(2, 10) == 1024
assert puissance_rapide(3, 5) == 243
print("Exponentiation rapide validée !")`,
                solutionCode: `def puissance_rapide(x: float, n: int) -> float:
    if n == 0:
        return 1
    demi = puissance_rapide(x, n // 2)
    if n % 2 == 0:
        return demi * demi
    else:
        return x * demi * demi`
            },
            {
                id: "exo-2-6",
                title: "Exercice 6 (Défi classique) : Les Tours de Hanoï",
                statement: `Compléter la fonction récursive <code>hanoi(n, depart, intermediaire, arrivee)</code> qui ajoute dans la liste <code>coups</code> chaque déplacement sous la forme d'un tuple <code>(depart, arrivee)</code> pour déplacer $n$ disques de la tour <code>depart</code> vers la tour <code>arrivee</code>. Vérifier que pour $n = 3$, le nombre de coups est bien $2^3 - 1 = 7$.`,
                starterCode: `def hanoi(n: int, depart: str, intermediaire: str, arrivee: str, coups: list) -> None:
    if n == 1:
        coups.append((depart, arrivee))
    else:
        # 1. Déplacer n-1 disques de depart vers intermediaire
        # 2. Déplacer le disque restant de depart vers arrivee
        # 3. Déplacer n-1 disques de intermediaire vers arrivee
        pass

# Tests
mouvements = []
hanoi(3, "A", "B", "C", mouvements)
assert len(mouvements) == 7
assert mouvements[0] == ("A", "C") and mouvements[-1] == ("A", "C")
print("Séquence pour 3 disques :", mouvements)
print("Tours de Hanoï validées !")`,
                solutionCode: `def hanoi(n: int, depart: str, intermediaire: str, arrivee: str, coups: list) -> None:
    if n == 1:
        coups.append((depart, arrivee))
    else:
        hanoi(n - 1, depart, arrivee, intermediaire, coups)
        coups.append((depart, arrivee))
        hanoi(n - 1, intermediaire, depart, arrivee, coups)`
            }
        ]
    },
    {
        id: "seance-3",
        tag: "Séance 3 • Théorie & Histoire",
        title: "Décidabilité, Calculabilité & Histoire",
        shortDesc: "Programme comme donnée, problème de l'arrêt (Turing & Church), langages Turing-complets, pionnières de l'informatique (Ada Lovelace, Grace Hopper, Margaret Hamilton) et QCM.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Un programme comme donnée d'un autre programme</h3>
                </div>
                <p>Lorsque nous exécutons un script Python via la commande <code>python3 test.py</code> dans un terminal, le fichier <code>test.py</code> n'est rien d'autre qu'une <strong>chaîne de caractères</strong> (un code-source) passée en paramètre d'entrée à un autre programme : l'interpréteur <code>python3</code>.</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Dualité Code / Donnée</h4>
                        <p>• Tout programme peut être manipulé comme une simple <strong>donnée</strong> par un autre programme (compilateur, interpréteur, antivirus, analyseur syntaxique).</p>
                        <p>• Un programme peut même recevoir son <strong>propre code-source</strong> en entrée : c'est le principe des <em>quines</em> (programmes qui affichent leur propre code sans lire de fichier).</p>
                    </div>
                    <div class="concept-card">
                        <h4>Exemple de Quine en Python</h4>
                        <pre class="code-block">a = 'a = %r; print(a %% a)'
print(a % a)

# Ce programme affiche exactement
# son propre code-source !</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Le Problème de l'Arrêt (Indécidabilité)</h3>
                </div>
                <p>Peut-on écrire un programme universel <code>halt(prog, x)</code> capable d'analyser n'importe quel programme <code>prog</code> et son entrée <code>x</code> pour prédire à coup sûr s'il va s'arrêter (<code>True</code>) ou boucler à l'infini (<code>False</code>) ?</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Démonstration par l'absurde (Alan Turing, 1936)</h4>
                        <p>Supposons que <code>halt(prog, x)</code> existe. Construisons le programme « paradoxal » <code>sym</code> :</p>
                        <pre class="code-block">def sym(prog):
    if halt(prog, prog) == True:
        while True:
            pass  # Boucle infinie
    else:
        return 1  # S'arrête</pre>
                    </div>
                    <div class="concept-card">
                        <h4>La contradiction sur <code>sym(sym)</code></h4>
                        <p>• <strong>Cas 1 :</strong> Si <code>halt(sym, sym)</code> renvoie <code>True</code> (donc <code>sym(sym)</code> est censé s'arrêter), alors <code>sym(sym)</code> entre dans la boucle infinie <code>while True</code>. <strong>Contradiction !</strong></p>
                        <p>• <strong>Cas 2 :</strong> Si <code>halt(sym, sym)</code> renvoie <code>False</code> (donc <code>sym(sym)</code> est censé boucler), alors <code>sym(sym)</code> renvoie <code>1</code> et s'arrête. <strong>Contradiction !</strong></p>
                    </div>
                </div>
                <div class="callout-warning">
                    <strong>Théorème de l'arrêt (Indécidabilité) :</strong> L'hypothèse de départ est fausse : il ne peut pas exister de programme universel capable de décider si n'importe quel programme s'arrête sur une entrée donnée. Plus généralement (<strong>Théorème de Rice</strong>), toute propriété sémantique non triviale d'un programme (« va-t-il renvoyer 0 ? », « va-t-il lever une erreur ? ») est <strong>indécidable</strong>.
                </div>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Calculabilité, Machines de Turing & Classes P / NP</h3>
                </div>
                <p>En 1936, <strong>Alan Turing</strong> (via son modèle abstrait de <em>machine de Turing</em> lisant et écrivant des symboles sur un ruban infini) et <strong>Alonzo Church</strong> (via le <em>lambda-calcul</em>) démontrent indépendamment que certaines fonctions mathématiques ne sont <strong>pas calculables</strong> par un algorithme, répondant ainsi par la négative au problème de la décision (<em>Entscheidungsproblem</em>) posé par David Hilbert en 1928.</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Notion théorique</th>
                            <th>Définition & Portée</th>
                            <th>Exemples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Langage Turing-complet</strong></td>
                            <td>Langage capable de simuler n'importe quelle machine de Turing. Tous les langages généraux ont exactement le même pouvoir de calcul.</td>
                            <td>Python, C, Java, Scratch, Haskell, Brainfuck</td>
                        </tr>
                        <tr>
                            <td><strong>Problème indécidable</strong></td>
                            <td>Problème de décision (réponse Oui/Non) pour lequel aucun algorithme ne peut toujours donner la bonne réponse en temps fini.</td>
                            <td>Problème de l'arrêt, équivalence de deux programmes</td>
                        </tr>
                        <tr>
                            <td><strong>Classe P (Hors-Programme)</strong></td>
                            <td>Problèmes résolubles par un algorithme déterministe en temps <strong>polynomial</strong> ($O(n)$, $O(n^2)$, $O(n^k)$).</td>
                            <td>Tri d'une liste, recherche dichotomique, test de primalité AKS</td>
                        </tr>
                        <tr>
                            <td><strong>Classe NP (Hors-Programme)</strong></td>
                            <td>Problèmes dont on sait <strong>vérifier</strong> une solution proposée en temps polynomial ($P \\subseteq NP$, question ouverte $P = NP$ ?).</td>
                            <td>Sudoku, problème du voyageur de commerce, sac à dos</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- MODULE 4 : POINT HISTOIRE -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Point Histoire</span>
                    <h3>Trois pionnières entrées dans l'histoire de l'informatique</h3>
                </div>
                <p>Bien avant les ordinateurs modernes, et jusqu'à la conquête spatiale, des femmes ont posé les fondations théoriques et logicielles de l'informatique :</p>
                <div class="course-grid">
                    <div class="concept-card">
                        <h4>Ada Lovelace (1815 – 1852)</h4>
                        <p><strong>Première programmeuse de l'histoire :</strong> fille du poète Lord Byron et formée par le logicien Auguste De Morgan, elle collabore avec Charles Babbage sur la <em>machine analytique</em>.</p>
                        <p>Dans sa célèbre <strong>Note G</strong>, elle rédige le premier véritable algorithme destiné à être exécuté par une machine (calcul des nombres de Bernoulli) et pressent que les machines manipuleront bien plus que des nombres.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Grace Hopper (1906 – 1992)</h4>
                        <p><strong>Compilateurs & COBOL :</strong> engagée dans la Navy sur les calculateurs <em>Mark I</em> et <em>Mark II</em> (où son équipe popularise le terme <strong>bug</strong> à la suite d'un papillon de nuit coincé dans un relais), elle conçoit l'un des premiers compilateurs (<strong>FLOW-MATIC</strong>) et inspire le langage <strong>COBOL</strong>.</p>
                        <p>Habituée à programmer en <strong>base 8 (octal)</strong>, elle y effectuait même ses calculs du quotidien !</p>
                    </div>
                    <div class="concept-card">
                        <h4>Margaret Hamilton (née en 1936)</h4>
                        <p><strong>Ingénierie logicielle & Apollo 11 :</strong> après avoir collaboré avec Edward Lorenz sur la modélisation météo (théorie du chaos), elle dirige au MIT l'équipe du logiciel de vol des missions <strong>Apollo</strong>.</p>
                        <p>Son système de <strong>gestion dynamique des priorités</strong> a sauvé l'alunissage d'Apollo 11 en 1969 face à une surcharge de calculs. Elle a forgé le terme <em>software engineering</em>.</p>
                    </div>
                </div>
                <div class="callout-success">
                    <strong>Synthèse Séance 3 :</strong>
                    <ul class="checklist-list">
                        <li>Comprendre qu'un programme est une suite de caractères pouvant servir de donnée à un autre programme.</li>
                        <li>Savoir expliquer pourquoi le <strong>problème de l'arrêt</strong> est indécidable (démonstration d'Alan Turing, 1936).</li>
                        <li>Savoir ce qu'est un langage <strong>Turing-complet</strong> et citer les apports d'<strong>Ada Lovelace</strong>, <strong>Grace Hopper</strong> et <strong>Margaret Hamilton</strong>.</li>
                    </ul>
                </div>
            </div>
        `,
        qcm: [
            {
                question: "1. Que démontre le théorème de l'arrêt établi par Alan Turing en 1936 ?",
                options: [
                    "Tout programme Python finit toujours par s'arrêter si on lui laisse assez de mémoire",
                    "Il est impossible d'écrire un programme universel capable de déterminer si n'importe quel programme s'arrête sur une entrée donnée",
                    "Seuls les langages compilés permettent d'éviter les boucles infinies",
                    "Un programme ne peut jamais recevoir son propre code-source en paramètre"
                ],
                answer: 1,
                explanation: "Par un raisonnement par l'absurde (construction d'un programme paradoxal prenant son propre code en entrée), Turing prouve que le problème de l'arrêt est indécidable."
            },
            {
                question: "2. Dire que Python, C et Scratch sont des langages « Turing-complets » signifie que :",
                options: [
                    "Ils s'exécutent exactement à la même vitesse sur un processeur",
                    "Ils ont exactement le même pouvoir de calcul et peuvent résoudre les mêmes problèmes calculables",
                    "Ils ont tous été inventés par Alan Turing",
                    "Ils permettent de résoudre les problèmes indécidables"
                ],
                answer: 1,
                explanation: "Tous les langages Turing-complets peuvent simuler une machine de Turing : la calculabilité d'un problème ne dépend donc pas du langage de programmation choisi."
            },
            {
                question: "3. Qui est considérée comme l'auteure du tout premier programme informatique de l'histoire (Note G sur le calcul des nombres de Bernoulli) ?",
                options: [
                    "Margaret Hamilton",
                    "Grace Hopper",
                    "Ada Lovelace",
                    "Katherine Johnson"
                ],
                answer: 2,
                explanation: "En 1843, Ada Lovelace rédige dans sa Note G sur la machine analytique de Charles Babbage le premier algorithme détaillé destiné à être exécuté par une machine."
            },
            {
                question: "4. À quelle pionnière doit-on les premiers compilateurs (FLOW-MATIC), la naissance du langage COBOL et la popularisation du terme « bug » ?",
                options: [
                    "Grace Hopper",
                    "Ada Lovelace",
                    "Margaret Hamilton",
                    "Hedy Lamarr"
                ],
                answer: 0,
                explanation: "Grace Murray Hopper a conçu l'éditeur de liens A-0 et le compilateur FLOW-MATIC (ancêtre de COBOL) et popularisé le mot « bug » avec l'équipe du calculateur Mark II."
            },
            {
                question: "5. Quelle innovation de Margaret Hamilton a permis d'éviter l'échec de l'alunissage d'Apollo 11 en 1969 ?",
                options: [
                    "L'invention du premier microprocesseur en silicium",
                    "Un système logiciel de gestion dynamique des priorités abandonnant les tâches secondaires en cas de surcharge",
                    "Le passage des calculs de la base 8 à la base 16",
                    "La création du langage Python"
                ],
                answer: 1,
                explanation: "Lorsque le radar de rendez-vous a saturé l'ordinateur de bord d'Apollo 11, l'architecture asynchrone à gestion des priorités conçue par l'équipe de Margaret Hamilton a maintenu les tâches vitales d'alunissage."
            }
        ],
        exercises: [
            {
                id: "exo-3-1",
                title: "Exercice 1 (Analyse de terminaison) : Repérer les cas de non-arrêt",
                statement: `On considère la fonction <code>compte_a_rebours(n)</code> ci-dessous.
                <br>1. Exécuter le code pour observer son comportement.
                <br>2. Modifier la condition d'arrêt (<code>while ...</code>) afin que la fonction s'arrête <strong>toujours</strong>, même si l'utilisateur passe un nombre flottant (ex. <code>10.8</code>) ou un entier négatif (ex. <code>-3</code>).`,
                starterCode: `def compte_a_rebours(n):
    # Condition actuelle fragile (boucle infinie si n = 10.8 ou n = -3) :
    # À sécuriser !
    while n > 0:
        print(round(n, 2))
        n = n - 1
    print("Terminé !")

# Tests
compte_a_rebours(3)
compte_a_rebours(3.8)
compte_a_rebours(-5)
print("Tous les appels se sont terminés !")`,
                solutionCode: `def compte_a_rebours(n):
    while n > 0:
        print(round(n, 2))
        n = n - 1
    print("Terminé !")

# Remarque : avec while n != 0:, n = 10.8 passe à 0.8 puis -0.2 sans jamais valoir 0.
# Avec while n > 0:, la décroissance stricte garantit l'arrêt pour tout réel n.`
            },
            {
                id: "exo-3-2",
                title: "Exercice 2 (Programme comme donnée) : Évaluateur de mini-instructions",
                statement: `Pour illustrer qu'un programme peut interpréter un autre programme sous forme de chaîne de caractères, écrire une fonction <code>executer_mini_langage(instructions, valeur_init)</code> qui prend une liste d'instructions textuelles parmi <code>"INC"</code> (+1), <code>"DEC"</code> (-1), <code>"DOUBLE"</code> (*2) et renvoie la valeur finale calculée à partir de <code>valeur_init</code>.`,
                starterCode: `def executer_mini_langage(instructions: list[str], valeur_init: int) -> int:
    acc = valeur_init
    # Parcourir la liste instructions et appliquer chaque opération sur acc
    # Lever une ValueError si une instruction est inconnue
    return acc

# Tests
prog = ["INC", "DOUBLE", "INC", "DEC", "DOUBLE"]
assert executer_mini_langage(prog, 4) == 20
print("Résultat de l'interpréteur :", executer_mini_langage(prog, 4))
print("Exercice 2 validé !")`,
                solutionCode: `def executer_mini_langage(instructions: list[str], valeur_init: int) -> int:
    acc = valeur_init
    for instr in instructions:
        if instr == "INC":
            acc += 1
        elif instr == "DEC":
            acc -= 1
        elif instr == "DOUBLE":
            acc *= 2
        else:
            raise ValueError(f"Instruction inconnue : {instr}")
    return acc`
            },
            {
                id: "exo-3-3",
                title: "Exercice 3 (Modèle de Turing) : Simulateur d'automate à ruban",
                statement: `On modélise le ruban d'une machine de Turing par une liste de bits (<code>0</code> et <code>1</code>) et une tête de lecture à la position <code>pos = 0</code>. Écrire la fonction <code>inverser_ruban(ruban)</code> qui parcourt le ruban de gauche à droite en inversant chaque bit (<code>0</code> devient <code>1</code> et <code>1</code> devient <code>0</code>) jusqu'à atteindre la fin du ruban.`,
                starterCode: `def inverser_ruban(ruban: list[int]) -> list[int]:
    pos = 0
    while pos < len(ruban):
        # Inverser le bit sous la tête de lecture ruban[pos]
        # Déplacer la tête d'une case vers la droite
        pass
    return ruban

# Tests
assert inverser_ruban([1, 0, 1, 1, 0]) == [0, 1, 0, 0, 1]
assert inverser_ruban([]) == []
print("Ruban inversé :", inverser_ruban([1, 0, 1, 1, 0]))
print("Exercice 3 validé !")`,
                solutionCode: `def inverser_ruban(ruban: list[int]) -> list[int]:
    pos = 0
    while pos < len(ruban):
        ruban[pos] = 1 - ruban[pos]
        pos += 1
    return ruban`
            }
        ]
    },
];

function renderSessionsGrid() {
    const grid = document.getElementById("sessions-grid-view");
    grid.innerHTML = "";

    sessionsData.forEach((session) => {
        const qcmBadge = session.qcm ? ` • ${session.qcm.length} QCM` : "";
        const card = document.createElement("article");
        card.className = "session-card";
        card.innerHTML = `
            <div>
                <span class="card-tag">${session.tag}</span>
                <h2>${session.title}</h2>
                <p>${session.shortDesc}</p>
            </div>
            <div class="card-footer">
                <span>${session.exercises.length} exercices${qcmBadge}</span>
                <span>Ouvrir →</span>
            </div>
        `;
        card.onclick = () => openSession(session);
        grid.appendChild(card);
    });
}

function buildQcmHTML(session) {
    if (!session.qcm || session.qcm.length === 0) return "";

    let itemsHTML = "";
    session.qcm.forEach((item, qIdx) => {
        let optionsHTML = "";
        item.options.forEach((opt, optIdx) => {
            optionsHTML += `
                <label class="qcm-option" id="opt-${session.id}-${qIdx}-${optIdx}">
                    <input type="radio" name="qcm-${session.id}-${qIdx}" value="${optIdx}">
                    <span>${opt}</span>
                </label>
            `;
        });

        itemsHTML += `
            <div class="qcm-item">
                <div class="qcm-question">${item.question}</div>
                <div class="qcm-options">${optionsHTML}</div>
                <div class="qcm-explanation" id="exp-${session.id}-${qIdx}">
                    <strong>Explication :</strong> ${item.explanation}
                </div>
            </div>
        `;
    });

    return `
        <h3 class="exercises-section-title">QCM d'auto-évaluation (Prérequis 1re)</h3>
        <div class="qcm-container" id="qcm-box-${session.id}">
            ${itemsHTML}
            <div class="qcm-footer">
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn-run" onclick="checkQcm('${session.id}')">✓ Vérifier mes réponses</button>
                    <button class="btn-reset" onclick="resetQcm('${session.id}')">↺ Réinitialiser le QCM</button>
                </div>
                <span class="qcm-score-badge" id="score-${session.id}"></span>
            </div>
        </div>
    `;
}

function openSession(session) {
    const gridView = document.getElementById("sessions-grid-view");
    const detailView = document.getElementById("session-detail-view");
    const container = document.getElementById("course-container");

    gridView.classList.add("hidden");
    detailView.classList.remove("hidden");

    const disabledAttr = isPyodideReady ? "" : "disabled";
    const qcmHTML = buildQcmHTML(session);
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
        ${qcmHTML}
        <h3 class="exercises-section-title">Exercices types à compléter</h3>
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

window.checkQcm = function(sessionId) {
    const session = sessionsData.find(s => s.id === sessionId);
    if (!session || !session.qcm) return;

    let score = 0;
    session.qcm.forEach((item, qIdx) => {
        const selected = document.querySelector(`input[name="qcm-${sessionId}-${qIdx}"]:checked`);
        item.options.forEach((_, optIdx) => {
            const label = document.getElementById(`opt-${sessionId}-${qIdx}-${optIdx}`);
            label.classList.remove("correct-answer", "wrong-answer");
            if (optIdx === item.answer) {
                label.classList.add("correct-answer");
            }
        });

        if (selected) {
            const chosen = parseInt(selected.value, 10);
            if (chosen === item.answer) {
                score++;
            } else {
                const wrongLabel = document.getElementById(`opt-${sessionId}-${qIdx}-${chosen}`);
                wrongLabel.classList.add("wrong-answer");
            }
        }

        const exp = document.getElementById(`exp-${sessionId}-${qIdx}`);
        if (exp) exp.classList.add("visible");
    });

    const scoreEl = document.getElementById(`score-${sessionId}`);
    if (scoreEl) {
        scoreEl.textContent = `Score : ${score} / ${session.qcm.length}`;
    }
};

window.resetQcm = function(sessionId) {
    const session = sessionsData.find(s => s.id === sessionId);
    if (!session || !session.qcm) return;

    session.qcm.forEach((item, qIdx) => {
        document.querySelectorAll(`input[name="qcm-${sessionId}-${qIdx}"]`).forEach(r => r.checked = false);
        item.options.forEach((_, optIdx) => {
            const label = document.getElementById(`opt-${sessionId}-${qIdx}-${optIdx}`);
            label.classList.remove("correct-answer", "wrong-answer");
        });
        const exp = document.getElementById(`exp-${sessionId}-${qIdx}`);
        if (exp) exp.classList.remove("visible");
    });

    const scoreEl = document.getElementById(`score-${sessionId}`);
    if (scoreEl) scoreEl.textContent = "";
};

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
