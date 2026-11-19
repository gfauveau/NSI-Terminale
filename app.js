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
    {
        id: "seance-4",
        tag: "Séance 4 • Qualité & Tests",
        title: "Bonnes pratiques de programmation",
        shortDesc: "Norme PEP 8, conventions de nommage, docstrings, programmation défensive avec assert, méthode TDD et tests unitaires doctest.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Conventions syntaxiques : la norme PEP 8</h3>
                </div>
                <p>En Python, le guide de style officiel s'appelle la <strong>PEP 8</strong> (<em>Python Enhancement Proposal 8</em>). Même si le non-respect de ces règles ne bloque pas toujours l'interpréteur, il rend le code difficile à relire et à maintenir en équipe.</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Gestion des espaces (typographie)</h4>
                        <pre class="code-block"># À ÉVITER :
a=3
if color == (0,255,0) : print( 'vert' )

# CONFORME PEP 8 :
a = 3
if color == (0, 255, 0):
    print('vert')</pre>
                        <p>• Une espace avant et après les opérateurs (<code>=</code>, <code>==</code>, <code>+</code>).<br>• Jamais d'espace juste après <code>(</code>, <code>[</code> ou avant <code>)</code>, <code>]</code>, <code>,</code>, <code>:</code>.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Conventions de nommage</h4>
                        <table class="course-table" style="margin-top: 0.5rem;">
                            <thead>
                                <tr>
                                    <th>Élément Python</th>
                                    <th>Convention</th>
                                    <th>Exemple</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Variables & fonctions</td>
                                    <td><code>snake_case</code></td>
                                    <td><code>taux_interet</code></td>
                                </tr>
                                <tr>
                                    <td>Indices de boucle</td>
                                    <td>1 lettre</td>
                                    <td><code>i</code>, <code>j</code>, <code>k</code></td>
                                </tr>
                                <tr>
                                    <td>Constantes</td>
                                    <td><code>MAJUSCULES</code></td>
                                    <td><code>TAILLE_MAX = 100</code></td>
                                </tr>
                                <tr>
                                    <td>Classes (POO)</td>
                                    <td><code>PascalCase</code></td>
                                    <td><code>CompteBancaire</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Commentaires utiles vs Docstrings</h3>
                </div>
                <p>Un code bien écrit doit avant tout être <strong>auto-documenté</strong> grâce à des noms de variables et de fonctions explicites : on évite les commentaires paraphrasant une instruction évidente. En revanche, toute fonction publique doit posséder une <strong>docstring</strong> (chaîne entre triples guillemets <code>"""..."""</code> placée juste après l'en-tête <code>def</code>) décrivant son rôle, ses paramètres et son retour.</p>
                <div class="two-col-grid">
                    <pre class="code-block">def capital_apres_n_annees(capital, taux, annees):
    """
    Renvoie le capital acquis après n années.
    - capital (float) : montant initial
    - taux (float) : taux annuel (ex: 0.02 pour 2 %)
    - annees (int) : durée du placement
    """
    return capital * (1 + taux)**annees</pre>
                    <div class="concept-card">
                        <h4>Consulter une documentation en Python</h4>
                        <p>Les docstrings sont conservées en mémoire dans l'attribut spécial <code>__doc__</code> de chaque fonction et sont affichées par la fonction native <code>help()</code> :</p>
                        <pre class="code-block">>>> help(capital_apres_n_annees)
>>> print(len.__doc__)</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Programmation défensive : sécuriser avec <code>assert</code></h3>
                </div>
                <p>La <strong>programmation défensive</strong> consiste à vérifier dès l'entrée d'une fonction que les arguments respectent bien les <strong>préconditions</strong> de la spécification, afin d'interrompre immédiatement le programme avec un message clair plutôt que de propager un calcul faux.</p>
                <pre class="code-block">def moyenne_trimestrielle(liste_notes: list[float]) -> float:
    """Calcule la moyenne des notes comprises entre 0 et 20."""
    assert len(liste_notes) > 0, "Erreur : la liste de notes est vide"
    assert min(liste_notes) >= 0 and max(liste_notes) <= 20, "Erreur : note hors [0, 20]"
    return sum(liste_notes) / len(liste_notes)</pre>
                <div class="callout-info">
                    <strong>Syntaxe :</strong> <code>assert condition, "Message d'erreur explicite"</code>. Si <code>condition</code> vaut <code>False</code>, Python lève une exception <code>AssertionError</code> accompagnée du message.
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Stratégies de tests : TDD, Jeux d'assert et <code>doctest</code></h3>
                </div>
                <p>En programmation comme en mathématiques, <strong>un jeu de tests qui réussit ne prouve jamais à 100 % qu'un programme est exempt de bugs</strong> (il montre seulement que le code fonctionne sur les cas testés). En revanche, un test qui échoue prouve avec certitude l'existence d'une erreur à corriger.</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>1. Approche TDD (Test-Driven Development)</h4>
                        <p>• <strong>Étape 1 :</strong> Écrire les tests (<code>assert</code>) avant même de coder la fonction (cas normaux + cas limites).</p>
                        <p>• <strong>Étape 2 :</strong> Écrire le code minimal de la fonction pour faire passer tous les tests au vert.</p>
                        <p>• <strong>Étape 3 :</strong> Refactoriser et optimiser le code en vérifiant que les tests restent validés.</p>
                    </div>
                    <div class="concept-card">
                        <h4>2. Tests intégrés avec le module <code>doctest</code></h4>
                        <pre class="code-block">def compte_voyelles(mot: str) -> int:
    """
    Renvoie le nombre de voyelles de mot.
    >>> compte_voyelles("python")
    2
    >>> compte_voyelles("HTTP")
    0
    """
    return sum(1 for c in mot.lower() if c in "aeiouy")

import doctest
doctest.testmod()</pre>
                    </div>
                </div>
                <div class="callout-success">
                    <strong>Checklist Bac NSI :</strong>
                    <ul class="checklist-list">
                        <li>Nommer ses variables/fonctions en <code>snake_case</code> et ses classes en <code>PascalCase</code> (PEP 8).</li>
                        <li>Rédiger une <code>docstring</code> claire et vérifier les préconditions avec <code>assert</code>.</li>
                        <li>Construire des tests unitaires couvrant les cas généraux et les <strong>cas limites</strong> (liste vide, 0, négatif).</li>
                    </ul>
                </div>
            </div>
        `,
        qcm: [
            {
                question: "1. Quelle écriture respecte la convention officielle PEP 8 pour le nommage d'une fonction et d'une classe en Python ?",
                options: [
                    "<code>def CalculerMoyenne():</code> et <code>class compte_bancaire:</code>",
                    "<code>def calculer_moyenne():</code> et <code>class CompteBancaire:</code>",
                    "<code>def calculerMoyenne():</code> et <code>class COMPTE_BANCAIRE:</code>",
                    "<code>def calculer-moyenne():</code> et <code>class comptebancaire:</code>"
                ],
                answer: 1,
                explanation: "En Python (PEP 8), les fonctions et variables s'écrivent en snake_case (minuscules séparées par des underscores) et les classes en PascalCase (majuscule à chaque mot)."
            },
            {
                question: "2. Quelle ligne est typographiquement conforme aux règles d'espacement de la PEP 8 ?",
                options: [
                    "<code>if x>0 : print( x )</code>",
                    "<code>if x > 0: print(x)</code>",
                    "<code>if ( x > 0 ): print(x)</code>",
                    "<code>if x > 0 : print(x)</code>"
                ],
                answer: 1,
                explanation: "La PEP 8 impose une espace autour des opérateurs de comparaison (>), aucune espace avant les deux-points (:) ni à l'intérieur des parenthèses."
            },
            {
                question: "3. Où doit être placée la docstring d'une fonction et comment la consulter en console ?",
                options: [
                    "Tout en bas du fichier avec <code># doc</code>, consultable via <code>dir(f)</code>",
                    "Juste après la ligne <code>def ...:</code> entre triples guillemets <code>\"\"\"...\"\"\"</code>, consultable via <code>help(f)</code> ou <code>f.__doc__</code>",
                    "Dans un fichier séparé nommé <code>readme.py</code>",
                    "Uniquement dans le constructeur <code>__init__</code>"
                ],
                answer: 1,
                explanation: "La docstring est la première instruction d'une fonction ou d'une classe entre triples guillemets ; Python la stocke dans l'attribut __doc__ et l'affiche avec help()."
            },
            {
                question: "4. Que se passe-t-il lors de l'exécution de <code>assert x >= 0, 'x doit être positif'</code> si <code>x</code> vaut <code>-4</code> ?",
                options: [
                    "Python affiche un avertissement et continue l'exécution",
                    "Python remplace automatiquement <code>x</code> par <code>0</code>",
                    "Python interrompt le programme en levant une exception <code>AssertionError</code> avec le message indiqué",
                    "Python renvoie <code>False</code>"
                ],
                answer: 2,
                explanation: "L'instruction assert vérifie une condition logique : si elle est fausse, l'exécution s'arrête immédiatement avec une AssertionError."
            },
            {
                question: "5. Quel est l'ordre exact des étapes dans la méthode de développement TDD (Test-Driven Development) ?",
                options: [
                    "Coder la fonction $\\rightarrow$ Optimiser le code $\\rightarrow$ Écrire les tests",
                    "Écrire les tests (qui échouent) $\\rightarrow$ Coder la fonction pour valider les tests $\\rightarrow$ Refactoriser",
                    "Écrire la docstring $\\rightarrow$ Supprimer les assertions $\\rightarrow$ Compiler",
                    "Exécuter <code>doctest.testmod()</code> avant d'écrire les tests"
                ],
                answer: 1,
                explanation: "En TDD, on formalise d'abord les spécifications sous forme de tests unitaires avant même d'implémenter le corps de la fonction."
            },
            {
                question: "6. Comment le module <code>doctest</code> repère-t-il les tests à exécuter dans une docstring ?",
                options: [
                    "Il recherche le mot-clé <code>assert</code> dans les commentaires",
                    "Il recherche les lignes commençant par les trois chevrons <code>>>></code> suivies du résultat attendu à la ligne suivante",
                    "Il exécute toutes les fonctions dont le nom commence par <code>test_</code>",
                    "Il analyse uniquement les annotations de type"
                ],
                answer: 1,
                explanation: "doctest simule une session interactive Python en repérant les invites >>> dans la docstring et en comparant la sortie réelle avec la ligne attendue juste en dessous."
            },
            {
                question: "7. Quelle affirmation concernant les tests logiciels est rigoureusement exacte ?",
                options: [
                    "Si 10 tests passent sans erreur, le programme est mathématiquement prouvé sans aucun bug",
                    "Un jeu de tests qui réussit ne garantit pas l'absence totale de bugs, mais un test qui échoue prouve qu'il existe une erreur",
                    "Il est inutile de tester les cas limites comme une liste vide ou zéro",
                    "Les tests remplacent les préconditions"
                ],
                answer: 1,
                explanation: "Comme un contre-exemple en mathématiques, un test échoué suffit à prouver un défaut, tandis que la réussite d'un échantillon fini de tests ne prouve pas la correction sur toutes les entrées possibles."
            }
        ],
        exercises: []
    },
    {
        id: "seance-5",
        tag: "Séance 5 • Structures Linéaires",
        title: "Listes, Piles & Files",
        shortDesc: "Interface vs implémentation, listes chaînées vs tableaux dynamiques, Piles (LIFO), Files (FIFO, 2 piles, pointeurs tête/queue), QCM et 5 exercices types.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Interface vs Implémentation (Abstraction)</h3>
                </div>
                <p>Une <strong>structure de données linéaire</strong> organise une collection d'éléments de manière séquentielle, sans hiérarchie interne. Pour concevoir des programmes modulaires, on sépare toujours le point de vue de l'utilisateur de celui du concepteur :</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Interface (point de vue Utilisateur)</h4>
                        <p>Ensemble des opérations abstraites autorisées pour manipuler la structure (ex. <code>empiler</code>, <code>depiler</code>, <code>est_vide</code>).</p>
                        <p><em>Règle Bac :</em> On ne doit jamais accéder directement aux attributs internes (comme <code>p.data</code>) si une interface est fournie.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Implémentation (point de vue Concepteur)</h4>
                        <p>Choix technique du stockage en mémoire (tableau dynamique <code>list</code>, maillons chaînés, double pile).</p>
                        <p>Grâce à l'encapsulation en POO, on peut changer l'implémentation sans modifier le code des utilisateurs.</p>
                    </div>
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Listes Chaînées vs Tableaux Dynamiques (Python <code>list</code>)</h3>
                </div>
                <p>Contrairement à ce que son nom suggère, le type <code>list</code> de Python n'est pas une liste chaînée mais un <strong>tableau dynamique</strong> dont les éléments sont contigus en mémoire. À l'inverse, une <strong>liste chaînée</strong> est constituée de maillons (cellules) reliés par des références mémoire.</p>
                <div class="two-col-grid">
                    <pre class="code-block">class Cellule:
    """Maillon d'une liste chaînée."""
    def __init__(self, contenu, suivante=None):
        self.contenu = contenu
        self.suivante = suivante

# Liste chaînée : 3 -> 5 -> 1 -> None
lst = Cellule(3, Cellule(5, Cellule(1, None)))
print(lst.contenu)           # 3 (Tête)
print(lst.suivante.contenu)  # 5</pre>
                    <table class="course-table" style="margin: 0;">
                        <thead>
                            <tr>
                                <th>Opération</th>
                                <th>Liste Chaînée</th>
                                <th>Tableau (<code>list</code>)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Accès au $k$-ième élément</td>
                                <td>$O(n)$ (parcours)</td>
                                <td><strong>$O(1)$</strong> (indexation)</td>
                            </tr>
                            <tr>
                                <td>Ajout / Retrait en <strong>tête</strong></td>
                                <td><strong>$O(1)$</strong></td>
                                <td>$O(n)$ (décalages)</td>
                            </tr>
                            <tr>
                                <td>Ajout / Retrait en <strong>fin</strong></td>
                                <td>$O(n)$ (ou $O(1)$ avec pointeur fin)</td>
                                <td><strong>$O(1)$ amorti</strong> (<code>append</code> / <code>pop</code>)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Les Piles (Stacks — Mode LIFO)</h3>
                </div>
                <p>Une <strong>pile</strong> fonctionne selon le principe <strong>LIFO</strong> (<em>Last In, First Out</em> — Dernier Entré, Premier Sorti), comme une pile d'assiettes : on insère (<code>empiler</code>) et on retire (<code>depiler</code>) uniquement au <strong>sommet</strong>. Applications : bouton « Retour » du navigateur, fonction « Annuler » (Ctrl+Z), pile d'appels récursifs, Notation Polonaise Inversée (NPI).</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Implémentation 1 : avec une <code>list</code> Python</h4>
                        <pre class="code-block">class Pile:
    def __init__(self):
        self.data = []

    def est_vide(self):
        return len(self.data) == 0

    def empile(self, x):
        self.data.append(x)  # Sommet à droite : O(1)

    def depile(self):
        assert not self.est_vide(), "Pile vide"
        return self.data.pop()  # O(1)</pre>
                    </div>
                    <div class="concept-card">
                        <h4>Implémentation 2 : avec une Liste Chaînée</h4>
                        <pre class="code-block">class PileChainee:
    def __init__(self):
        self.sommet = None  # Tête de chaîne

    def est_vide(self):
        return self.sommet is None

    def empile(self, val):
        self.sommet = Cellule(val, self.sommet)  # O(1)

    def depile(self):
        assert not self.est_vide(), "Pile vide"
        v = self.sommet.contenu
        self.sommet = self.sommet.suivante  # O(1)
        return v</pre>
                    </div>
                </div>
                <div class="callout-warning">
                    <strong>Règle d'or en algorithmique sur les Piles/Files :</strong> Parcourir une pile pour compter ses éléments ou chercher une valeur la vide ! Il faut systématiquement utiliser une <strong>pile temporaire</strong> pour restaurer la pile d'origine dans son ordre initial.
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Les Files (Queues — Mode FIFO)</h3>
                </div>
                <p>Une <strong>file</strong> fonctionne selon le principe <strong>FIFO</strong> (<em>First In, First Out</em> — Premier Entré, Premier Sorti), comme une file d'attente : on ajoute en <strong>queue</strong> (<code>enfiler</code>) et on retire en <strong>tête</strong> (<code>defiler</code>). Applications : file d'impression, ordonnancement des processus, parcours en largeur (BFS) d'un graphe.</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Approche A : File à Deux Piles — $O(1)$ amorti</h4>
                        <pre class="code-block">class FileDeuxPiles:
    def __init__(self):
        self.entree = Pile()
        self.sortie = Pile()

    def est_vide(self):
        return self.entree.est_vide() and self.sortie.est_vide()

    def enfile(self, x):
        self.entree.empile(x)  # O(1)

    def defile(self):
        assert not self.est_vide(), "File vide"
        if self.sortie.est_vide():
            while not self.entree.est_vide():
                self.sortie.empile(self.entree.depile())
        return self.sortie.depile()</pre>
                    </div>
                    <div class="concept-card">
                        <h4>Approche B : Pointeurs Tête & Queue — $O(1)$ strict</h4>
                        <pre class="code-block">class FileChainee:
    def __init__(self):
        self.tete = None   # Sortie (défiler)
        self.queue = None  # Entrée (enfiler)

    def est_vide(self):
        return self.tete is None

    def enfile(self, val):
        nouveau = Cellule(val)
        if self.est_vide():
            self.tete = nouveau
        else:
            self.queue.suivante = nouveau
        self.queue = nouveau</pre>
                    </div>
                </div>
            </div>

            <!-- MODULE 5 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 5</span>
                    <h3>Synthèse des Complexités & Mémento Bac</h3>
                </div>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Structure</th>
                            <th>Mode d'accès</th>
                            <th>Insertion</th>
                            <th>Suppression</th>
                            <th>Accès élément $k$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Pile (Stack)</strong></td>
                            <td>LIFO</td>
                            <td>$O(1)$ au sommet</td>
                            <td>$O(1)$ au sommet</td>
                            <td>Non autorisé ($O(n)$)</td>
                        </tr>
                        <tr>
                            <td><strong>File (Chaînée / 2 Piles)</strong></td>
                            <td>FIFO</td>
                            <td>$O(1)$ en queue</td>
                            <td>$O(1)$ en tête</td>
                            <td>Non autorisé ($O(n)$)</td>
                        </tr>
                        <tr>
                            <td><strong>File naïve (<code>list</code> Python)</strong></td>
                            <td>FIFO</td>
                            <td>$O(n)$ avec <code>insert(0, x)</code></td>
                            <td>$O(1)$ avec <code>pop()</code></td>
                            <td>$O(1)$ par index</td>
                        </tr>
                        <tr>
                            <td><strong>Liste Chaînée</strong></td>
                            <td>Séquentiel</td>
                            <td>$O(1)$ en tête</td>
                            <td>$O(1)$ en tête</td>
                            <td>$O(n)$ par parcours</td>
                        </tr>
                        <tr>
                            <td><strong>Tableau Dynamique (<code>list</code>)</strong></td>
                            <td>Indexé contigu</td>
                            <td>$O(1)$ amorti en fin</td>
                            <td>$O(1)$ en fin</td>
                            <td>$O(1)$ par index</td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-success">
                    <strong>Mémento Bac NSI :</strong>
                    <ul class="checklist-list">
                        <li>Retenir la dissymétrie des listes Python : <code>append()</code> et <code>pop()</code> en $O(1)$, contre <code>insert(0, x)</code> et <code>pop(0)</code> en $O(n)$.</li>
                        <li>Toujours restaurer une pile ou une file après un parcours à l'aide d'une structure auxiliaire.</li>
                        <li>Respecter strictement l'interface donnée dans l'énoncé sans manipuler la représentation interne.</li>
                    </ul>
                </div>
            </div>
        `,
        qcm: [
            {
                question: "1. Quelle est la principale différence de complexité entre une liste chaînée et un tableau dynamique Python (<code>list</code>) ?",
                options: [
                    "La liste chaînée permet un accès direct au $k$-ième élément en $O(1)$",
                    "Le tableau dynamique permet un accès direct par indice en $O(1)$, tandis que la liste chaînée permet une insertion en tête en $O(1)$",
                    "Les deux structures ont exactement les mêmes complexités sur toutes les opérations",
                    "L'insertion en tête d'une <code>list</code> Python via <code>insert(0, x)</code> s'effectue en $O(1)$"
                ],
                answer: 1,
                explanation: "Dans un tableau contigu, calculer l'adresse de tab[k] est en O(1), mais insérer en tête impose de décaler n éléments (O(n)). Dans une liste chaînée, il suffit de modifier un pointeur en tête (O(1))."
            },
            {
                question: "2. On empile successivement <code>10</code>, <code>20</code>, puis <code>30</code> dans une pile vide <code>p</code>. On dépile une fois, puis on empile <code>40</code>. Quel élément se trouve au sommet de <code>p</code> ?",
                options: [
                    "10",
                    "20",
                    "30",
                    "40"
                ],
                answer: 3,
                explanation: "La pile fonctionne en LIFO : [10] -> [10, 20] -> [10, 20, 30] -> dépile 30 -> [10, 20] -> empile 40 -> [10, 20, 40]. Le sommet est 40."
            },
            {
                question: "3. On enfile successivement <code>'A'</code>, <code>'B'</code>, puis <code>'C'</code> dans une file vide <code>f</code>. Quel élément sera renvoyé par le premier appel à <code>f.defiler()</code> ?",
                options: [
                    "'A'",
                    "'B'",
                    "'C'",
                    "None"
                ],
                answer: 0,
                explanation: "Une file fonctionne en FIFO (First In, First Out) : le premier élément entré ('A') est le premier à sortir."
            },
            {
                question: "4. Pourquoi déconseille-t-on d'implémenter une file avec une simple <code>list</code> Python en utilisant <code>enfile(x)</code> via <code>data.insert(0, x)</code> ?",
                options: [
                    "Parce que <code>insert(0, x)</code> génère une erreur si la liste est vide",
                    "Parce que <code>insert(0, x)</code> décale tous les éléments existants en mémoire, ce qui a une complexité linéaire $O(n)$",
                    "Parce que <code>pop()</code> ne fonctionne pas sur une liste",
                    "Parce que les listes Python sont immuables"
                ],
                answer: 1,
                explanation: "Insérer à l'indice 0 d'un tableau dynamique oblige Python à décaler toutes les cases d'un rang vers la droite : chaque enfilement coûte O(n) au lieu de O(1)."
            },
            {
                question: "5. Comment fonctionne une file implémentée à l'aide de deux piles (<code>entree</code> et <code>sortie</code>) lorsque l'on appelle <code>defiler()</code> alors que <code>sortie</code> est vide ?",
                options: [
                    "On renvoie directement le sommet de la pile <code>entree</code>",
                    "On dépile tous les éléments de <code>entree</code> pour les empiler dans <code>sortie</code> (ce qui inverse leur ordre), puis on dépile le sommet de <code>sortie</code>",
                    "On vide les deux piles et on lève une erreur",
                    "On échange les noms des deux piles"
                ],
                answer: 1,
                explanation: "Transvaser la pile entree dans la pile sortie inverse l'ordre LIFO une seconde fois, rétablissant ainsi l'ordre FIFO d'arrivée des éléments."
            },
            {
                question: "6. Quelle structure de données linéaire est naturellement utilisée par l'algorithme de parcours en largeur (BFS) d'un graphe ou d'un arbre ?",
                options: [
                    "Une pile (LIFO)",
                    "Une file (FIFO)",
                    "Un tuple immuable",
                    "Un ensemble non ordonné"
                ],
                answer: 1,
                explanation: "Le parcours en largeur explore les sommets par ordre de distance croissante (niveau par niveau), ce qui correspond exactement au traitement premier arrivé, premier servi d'une file FIFO."
            }
        ],
        exercises: [
            {
                id: "exo-5-1",
                title: "Exercice 1 (Listes chaînées) : Longueur et recherche dans une chaîne de Cellules",
                statement: `On utilise la classe <code>Cellule(contenu, suivante)</code>. Écrire deux fonctions récursives ou itératives :
                <br>1. <code>longueur_liste(lst)</code> qui renvoie le nombre de maillons de la liste chaînée <code>lst</code> (0 si <code>lst is None</code>).
                <br>2. <code>contient(lst, cible)</code> qui renvoie <code>True</code> si <code>cible</code> apparaît dans la liste chaînée et <code>False</code> sinon.`,
                starterCode: `class Cellule:
    def __init__(self, contenu, suivante=None):
        self.contenu = contenu
        self.suivante = suivante

def longueur_liste(lst: Cellule) -> int:
    # À compléter
    pass

def contient(lst: Cellule, cible) -> bool:
    # À compléter
    pass

# Tests
ma_liste = Cellule(10, Cellule(20, Cellule(30, None)))
assert longueur_liste(None) == 0
assert longueur_liste(ma_liste) == 3
assert contient(ma_liste, 20) == True
assert contient(ma_liste, 99) == False
print("Exercice 1 validé !")`,
                solutionCode: `class Cellule:
    def __init__(self, contenu, suivante=None):
        self.contenu = contenu
        self.suivante = suivante

def longueur_liste(lst: Cellule) -> int:
    if lst is None:
        return 0
    return 1 + longueur_liste(lst.suivante)

def contient(lst: Cellule, cible) -> bool:
    courant = lst
    while courant is not None:
        if courant.contenu == cible:
            return True
        courant = courant.suivante
    return False`
            },
            {
                id: "exo-5-2",
                title: "Exercice 2 (Manipulation sans destruction) : Hauteur d'une Pile",
                statement: `En utilisant <strong>uniquement l'interface publique</strong> de la classe <code>Pile</code> (<code>est_vide()</code>, <code>empile(x)</code>, <code>depile()</code>), écrire une fonction <code>hauteur_pile(p)</code> qui renvoie le nombre d'éléments de <code>p</code> tout en restituant <code>p</code> dans son état exact d'origine à la fin de la fonction.`,
                starterCode: `class Pile:
    def __init__(self):
        self.__data = []
    def est_vide(self) -> bool:
        return len(self.__data) == 0
    def empile(self, x) -> None:
        self.__data.append(x)
    def depile(self):
        assert not self.est_vide(), "Pile vide"
        return self.__data.pop()

def hauteur_pile(p: Pile) -> int:
    # Utiliser une pile temporaire p_temp pour compter puis restaurer p
    pass

# Tests
p = Pile()
for val in [1, 2, 3, 4]:
    p.empile(val)
assert hauteur_pile(p) == 4
assert p.depile() == 4  # Vérifie que l'ordre d'origine est intact
assert hauteur_pile(p) == 3
print("Hauteur calculée et pile préservée !")`,
                solutionCode: `def hauteur_pile(p: Pile) -> int:
    p_temp = Pile()
    compteur = 0
    while not p.est_vide():
        p_temp.empile(p.depile())
        compteur += 1
    while not p_temp.est_vide():
        p.empile(p_temp.depile())
    return compteur`
            },
            {
                id: "exo-5-3",
                title: "Exercice 3 (Application classique des Piles) : Vérification du bon parenthésage",
                statement: `Écrire une fonction <code>est_bien_parenthesee(expression)</code> qui prend une chaîne contenant des parenthèses <code>'('</code>, <code>')'</code> et des crochets <code>'['</code>, <code>']'</code> (ainsi que d'autres caractères) et renvoie <code>True</code> si chaque ouvrant est correctement fermé dans le bon ordre, et <code>False</code> sinon.`,
                starterCode: `class Pile:
    def __init__(self):
        self.data = []
    def est_vide(self):
        return len(self.data) == 0
    def empile(self, x):
        self.data.append(x)
    def depile(self):
        return self.data.pop()

def est_bien_parenthesee(expression: str) -> bool:
    p = Pile()
    # Parcourir chaque caractère de expression :
    # - si '(' ou '[' : empiler
    # - si ')' ou ']' : vérifier que la pile n'est pas vide et que le sommet correspond
    # À la fin, la pile doit être vide !
    pass

# Tests
assert est_bien_parenthesee("(a + [b * (c - d)])") == True
assert est_bien_parenthesee("([)]") == False
assert est_bien_parenthesee("((a + b)") == False
assert est_bien_parenthesee("a + b)") == False
print("Vérification de parenthésage validée !")`,
                solutionCode: `def est_bien_parenthesee(expression: str) -> bool:
    p = Pile()
    correspondance = {')': '(', ']': '['}
    for car in expression:
        if car in "([":
            p.empile(car)
        elif car in ")]":
            if p.est_vide() or p.depile() != correspondance[car]:
                return False
    return p.est_vide()`
            },
            {
                id: "exo-5-4",
                title: "Exercice 4 (Application des Piles) : Calculatrice en Notation Polonaise Inversée (NPI)",
                statement: `En Notation Polonaise Inversée (ex. <code>["3", "4", "+", "2", "*"]</code> qui vaut $(3 + 4) \\times 2 = 14$), chaque nombre est empilé, et chaque opérateur (<code>"+"</code>, <code>"-"</code>, <code>"*"</code>) dépile deux opérandes <code>b</code> puis <code>a</code>, calcule <code>a op b</code> et empile le résultat. Compléter la fonction <code>evaluer_npi(tokens)</code>.`,
                starterCode: `class Pile:
    def __init__(self):
        self.data = []
    def empile(self, x):
        self.data.append(x)
    def depile(self):
        return self.data.pop()

def evaluer_npi(tokens: list[str]) -> int:
    p = Pile()
    # Attention à l'ordre des opérandes pour la soustraction :
    # si on lit ["10", "3", "-"], le résultat est 10 - 3 = 7 !
    pass

# Tests
assert evaluer_npi(["3", "4", "+", "2", "*"]) == 14
assert evaluer_npi(["10", "3", "-"]) == 7
assert evaluer_npi(["5", "1", "2", "+", "4", "*", "+", "3", "-"]) == 14
print("Calculatrice NPI validée !")`,
                solutionCode: `def evaluer_npi(tokens: list[str]) -> int:
    p = Pile()
    for token in tokens:
        if token in {"+", "-", "*"}:
            b = p.depile()
            a = p.depile()
            if token == "+":
                p.empile(a + b)
            elif token == "-":
                p.empile(a - b)
            else:
                p.empile(a * b)
        else:
            p.empile(int(token))
    return p.depile()`
            },
            {
                id: "exo-5-5",
                title: "Exercice 5 (Implémentation d'une File) : File à Deux Piles",
                statement: `Compléter la classe <code>FileDeuxPiles</code> utilisant deux instances de <code>Pile</code> (<code>entree</code> et <code>sortie</code>) afin de réaliser les opérations <code>est_vide()</code>, <code>enfile(x)</code> et <code>defile()</code> en temps $O(1)$ amorti.`,
                starterCode: `class Pile:
    def __init__(self):
        self.data = []
    def est_vide(self):
        return len(self.data) == 0
    def empile(self, x):
        self.data.append(x)
    def depile(self):
        return self.data.pop()

class FileDeuxPiles:
    def __init__(self):
        self.entree = Pile()
        self.sortie = Pile()

    def est_vide(self) -> bool:
        # À compléter
        pass

    def enfile(self, x) -> None:
        # À compléter
        pass

    def defile(self):
        assert not self.est_vide(), "File vide"
        # Si sortie est vide, transvaser entree dans sortie
        # Dépiler et renvoyer le sommet de sortie
        pass

# Tests
f = FileDeuxPiles()
assert f.est_vide() == True
f.enfile("Client 1")
f.enfile("Client 2")
f.enfile("Client 3")
assert f.defile() == "Client 1"
f.enfile("Client 4")
assert f.defile() == "Client 2"
assert f.defile() == "Client 3"
assert f.defile() == "Client 4"
assert f.est_vide() == True
print("File à deux piles validée !")`,
                solutionCode: `class FileDeuxPiles:
    def __init__(self):
        self.entree = Pile()
        self.sortie = Pile()

    def est_vide(self) -> bool:
        return self.entree.est_vide() and self.sortie.est_vide()

    def enfile(self, x) -> None:
        self.entree.empile(x)

    def defile(self):
        assert not self.est_vide(), "File vide"
        if self.sortie.est_vide():
            while not self.entree.est_vide():
                self.sortie.empile(self.entree.depile())
        return self.sortie.depile()`
            }
        ]
    },
    {
        id: "seance-6",
        tag: "Séance 6 • Tableaux Associatifs",
        title: "Les Dictionnaires & Tables de Hachage",
        shortDesc: "Révisions 1re (opérations, 3 modes de parcours, compréhensions, tables CSV), tables de hachage, complexité en O(1), QCM et exercices types Bac.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Révisions 1re : Tableau associatif & Règles sur les clés</h3>
                </div>
                <p>Un <strong>dictionnaire</strong> implémente le type abstrait <strong>tableau associatif</strong> : contrairement aux listes indexées par des entiers consécutifs ($0, 1, 2, \\dots$), il associe des valeurs à des <strong>clés uniques</strong>.</p>
                <div class="course-grid">
                    <div class="concept-card">
                        <h4>1. Structure mutable & Ordre</h4>
                        <p>On peut ajouter, modifier ou supprimer des paires clé-valeur après création. Depuis Python 3.7, l'ordre d'insertion des clés est conservé.</p>
                    </div>
                    <div class="concept-card">
                        <h4>2. Unicité des clés</h4>
                        <p>Chaque clé est unique : affecter une nouvelle valeur à une clé existante <strong>écrase</strong> l'ancienne valeur.</p>
                    </div>
                    <div class="concept-card">
                        <h4>3. Clés obligatoirement immuables</h4>
                        <p>Les clés doivent être <strong>hachables</strong> (immuables) : <code>str</code>, <code>int</code>, <code>float</code> ou <code>tuple</code> d'immuables. Une <code>list</code> ou un <code>dict</code> est interdit !</p>
                    </div>
                    <div class="concept-card">
                        <h4>4. Valeurs libres</h4>
                        <p>Aucune contrainte sur les valeurs : elles peuvent être de n'importe quel type (nombres, listes, autres dictionnaires, objets...).</p>
                    </div>
                </div>
                <div class="callout-warning">
                    <strong>Piège classique :</strong> Tenter d'utiliser une liste comme clé (ex. <code>d[[1, 2]] = "val"</code>) déclenche immédiatement l'erreur <code>TypeError: unhashable type: 'list'</code>, car une liste peut être modifiée après coup en gardant la même adresse mémoire.
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Révisions 1re : Opérations essentielles & Les 3 Modes de Parcours</h3>
                </div>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Opération</th>
                            <th>Syntaxe Python</th>
                            <th>Comportement & Précautions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Création</strong></td>
                            <td><code>d = {}</code> ou <code>d = {"nom": "Turing", "age": 41}</code></td>
                            <td>Initialise un dictionnaire vide ou pré-rempli.</td>
                        </tr>
                        <tr>
                            <td><strong>Accès direct / sécurisé</strong></td>
                            <td><code>d["nom"]</code> ou <code>d.get("cle", defaut)</code></td>
                            <td><code>d["cle"]</code> lève <code>KeyError</code> si la clé est absente ; <code>.get()</code> renvoie la valeur par défaut.</td>
                        </tr>
                        <tr>
                            <td><strong>Ajout / Modification</strong></td>
                            <td><code>d["ville"] = "Londres"</code></td>
                            <td>Crée la paire si la clé n'existe pas, sinon met à jour sa valeur.</td>
                        </tr>
                        <tr>
                            <td><strong>Suppression</strong></td>
                            <td><code>del d["age"]</code> ou <code>d.pop("age", None)</code></td>
                            <td>Supprime l'entrée ; <code>pop()</code> renvoie en plus la valeur supprimée.</td>
                        </tr>
                        <tr>
                            <td><strong>Test d'appartenance</strong></td>
                            <td><code>"nom" in d</code></td>
                            <td>Teste uniquement parmi les <strong>clés</strong> (en $O(1)$). Pour les valeurs : <code>val in d.values()</code>.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="course-grid" style="margin-top: 1.5rem;">
                    <div class="concept-card">
                        <h4>Parcours 1 : Par les CLÉS (défaut)</h4>
                        <pre class="code-block">for cle in d:
    print(cle, d[cle])</pre>
                        <p>Équivalent à <code>for cle in d.keys():</code>.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Parcours 2 : Par les VALEURS</h4>
                        <pre class="code-block">for val in d.values():
    print(val)</pre>
                        <p>Récupère directement les valeurs sans les clés.</p>
                    </div>
                    <div class="concept-card">
                        <h4>Parcours 3 : Par PAIRES (items)</h4>
                        <pre class="code-block">for cle, val in d.items():
    print(f"{cle} -> {val}")</pre>
                        <p>Dépaquetage simultané de chaque tuple <code>(cle, val)</code>.</p>
                    </div>
                </div>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Structures imbriquées (Tables CSV) & Compréhensions</h3>
                </div>
                <p>En NSI, les tables de données (issues de fichiers CSV ou de requêtes) sont très souvent modélisées par une <strong>liste de dictionnaires</strong>, chaque dictionnaire représentant un enregistrement.</p>
                <div class="two-col-grid">
                    <pre class="code-block"># Liste d'enregistrements (Table)
eleves = [
    {"nom": "Alice", "classe": "TG1", "moy": 16.5},
    {"nom": "Bob", "classe": "TG2", "moy": 14.0},
    {"nom": "Charlie", "classe": "TG1", "moy": 17.5}
]

# Accès imbriqué :
print(eleves[0]["moy"])  # Affiche 16.5</pre>
                    <pre class="code-block"># Dictionnaire en compréhension
carres = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Filtrage conditionnel sur la table :
admis_tg1 = {
    e["nom"]: e["moy"]
    for e in eleves
    if e["classe"] == "TG1" and e["moy"] >= 15
}</pre>
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Terminale : Fonctionnement interne (Table de Hachage) & Complexités</h3>
                </div>
                <p>Comment Python parvient-il à retrouver une clé parmi un million d'entrées en un temps quasi instantané ? En coulisses, un dictionnaire est implémenté à l'aide d'une <strong>table de hachage</strong>.</p>
                <div class="callout-info">
                    <strong>Principe du hachage :</strong> Lorsqu'on accède à <code>d[cle]</code>, Python calcule une empreinte numérique via <code>hash(cle)</code> qui indique directement l'adresse (l'indice) de la case mémoire où se situe la valeur, sans avoir à parcourir les autres éléments. <em>(Culture générale : les fonctions de hachage cryptographiques comme SHA-256 servent aussi à vérifier l'intégrité des fichiers et stocker les empreintes de mots de passe.)</em>
                </div>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Opération</th>
                            <th>Dictionnaire (Table de hachage)</th>
                            <th>Liste Python (<code>list</code>)</th>
                            <th>Justification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Recherche (<code>x in struct</code>)</strong></td>
                            <td><strong>$O(1)$ en moyenne</strong></td>
                            <td>$O(n)$ (linéaire)</td>
                            <td>Calcul direct de <code>hash(x)</code> dans un dict vs parcours séquentiel dans une liste.</td>
                        </tr>
                        <tr>
                            <td><strong>Accès à une valeur</strong></td>
                            <td><strong>$O(1)$ en moyenne</strong></td>
                            <td>$O(1)$ (par indice)</td>
                            <td>Adressage direct dans les deux cas.</td>
                        </tr>
                        <tr>
                            <td><strong>Insertion</strong></td>
                            <td><strong>$O(1)$ en moyenne</strong></td>
                            <td>$O(1)$ amorti en fin</td>
                            <td>Écriture directe dans l'alvéole calculée par le hachage.</td>
                        </tr>
                        <tr>
                            <td><strong>Suppression</strong></td>
                            <td><strong>$O(1)$ en moyenne</strong></td>
                            <td>$O(n)$ (décalages)</td>
                            <td>Libération directe de l'entrée sans décaler les autres éléments.</td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-success">
                    <strong>Checklist Anti-Erreurs Bac NSI :</strong>
                    <ul class="checklist-list">
                        <li>Utiliser des crochets <code>d['cle']</code> et jamais des parenthèses <code>d('cle')</code>.</li>
                        <li>Toujours vérifier <code>if cle in d:</code> avant d'accéder à <code>d[cle]</code> pour éviter une <code>KeyError</code>.</li>
                        <li><strong>Ne jamais ajouter ni supprimer de clés pendant le parcours</strong> d'un dictionnaire (<code>for cle in d:</code>), sous peine de déclencher une <code>RuntimeError: dictionary changed size during iteration</code>.</li>
                        <li>Argumenter au Bac que la recherche d'une clé dans un dictionnaire est en <strong>$O(1)$</strong> en moyenne contre <strong>$O(n)$</strong> dans une liste.</li>
                    </ul>
                </div>
            </div>
        `,
        qcm: [
            {
                question: "1. Parmi les expressions suivantes, laquelle est valide en Python pour définir une clé de dictionnaire ?",
                options: [
                    "<code>d[[48.85, 2.35]] = 'Paris'</code>",
                    "<code>d[(48.85, 2.35)] = 'Paris'</code>",
                    "<code>d[{'ville': 'Paris'}] = 75</code>",
                    "<code>d[{1, 2}] = 'ensemble'</code>"
                ],
                answer: 1,
                explanation: "Seuls les objets immuables (hachables) peuvent servir de clés. Un tuple ne contenant que des flottants est immuable, contrairement aux listes, dictionnaires ou ensembles."
            },
            {
                question: "2. On considère <code>notes = {'Alice': 16, 'Bob': 14}</code>. Que renvoie l'expression <code>16 in notes</code> ?",
                options: [
                    "<code>True</code>",
                    "<code>False</code>",
                    "<code>'Alice'</code>",
                    "Une erreur <code>KeyError</code>"
                ],
                answer: 1,
                explanation: "L'opérateur in appliqué directement à un dictionnaire recherche uniquement parmi ses clés ('Alice', 'Bob'), pas parmi ses valeurs. Pour tester les valeurs, il faut écrire 16 in notes.values()."
            },
            {
                question: "3. Quelle est la complexité temporelle moyenne du test d'appartenance <code>cle in d</code> dans un dictionnaire de $n$ éléments ?",
                options: [
                    "$O(1)$ (temps constant)",
                    "$O(\\log_2 n)$ (temps logarithmique)",
                    "$O(n)$ (temps linéaire)",
                    "$O(n^2)$ (temps quadratique)"
                ],
                answer: 0,
                explanation: "Grâce à la table de hachage interne, Python calcule directement l'emplacement mémoire de la clé via hash(cle) en temps constant O(1) en moyenne."
            },
            {
                question: "4. Que se passe-t-il si l'on tente de supprimer une clé à l'intérieur d'une boucle <code>for cle in d:</code> ?",
                options: [
                    "La boucle ignore la clé supprimée et continue normalement",
                    "Python lève une exception <code>RuntimeError: dictionary changed size during iteration</code>",
                    "Le dictionnaire est entièrement vidé",
                    "La suppression est reportée après la boucle"
                ],
                answer: 1,
                explanation: "Il est interdit de modifier la taille d'un dictionnaire (ajout ou suppression de clés) pendant qu'on itère dessus."
            },
            {
                question: "5. Que renvoie <code>d.get('score', 0)</code> si la clé <code>'score'</code> n'existe pas dans le dictionnaire <code>d</code> ?",
                options: [
                    "Une exception <code>KeyError</code>",
                    "<code>None</code>",
                    "<code>0</code>",
                    "<code>False</code>"
                ],
                answer: 2,
                explanation: "La méthode get(cle, defaut) renvoie la valeur associée à cle si elle est présente, et la valeur par défaut fournie (ici 0) sans lever d'erreur si elle est absente."
            },
            {
                question: "6. Quel dictionnaire est construit par l'expression <code>{k: k % 2 == 0 for k in range(1, 5)}</code> ?",
                options: [
                    "<code>{2: True, 4: True}</code>",
                    "<code>{1: False, 2: True, 3: False, 4: True}</code>",
                    "<code>[False, True, False, True]</code>",
                    "<code>{0: True, 1: False, 2: True, 3: False}</code>"
                ],
                answer: 1,
                explanation: "Pour chaque entier k de 1 à 4 inclus, la clé est k et la valeur est le booléen (k % 2 == 0)."
            }
        ],
        exercises: [
            {
                id: "exo-6-1",
                title: "Exercice 1 (Algorithme type Bac) : Dénombrement & Inversion de dictionnaire",
                statement: `1. Écrire une fonction <code>frequences_mots(phrase)</code> qui découpe <code>phrase</code> avec <code>phrase.split()</code> et renvoie un dictionnaire associant chaque mot à son nombre d'apparitions.
                <br>2. Écrire une fonction <code>inverser_dico(dico)</code> qui renvoie un nouveau dictionnaire où les valeurs deviennent les clés et les clés deviennent les valeurs (en supposant les valeurs uniques et immuables).`,
                starterCode: `def frequences_mots(phrase: str) -> dict[str, int]:
    # À compléter
    pass

def inverser_dico(dico: dict) -> dict:
    # À compléter (en compréhension ou avec une boucle)
    pass

# Tests
texte = "le chat mange le poisson et le chat dort"
assert frequences_mots(texte) == {"le": 3, "chat": 2, "mange": 1, "poisson": 1, "et": 1, "dort": 1}
assert inverser_dico({"FR": "Paris", "UK": "Londres"}) == {"Paris": "FR", "Londres": "UK"}
print("Exercice 1 validé !")`,
                solutionCode: `def frequences_mots(phrase: str) -> dict[str, int]:
    compte = {}
    for mot in phrase.split():
        compte[mot] = compte.get(mot, 0) + 1
    return compte

def inverser_dico(dico: dict) -> dict:
    return {valeur: cle for cle, valeur in dico.items()}`
            },
            {
                id: "exo-6-2",
                title: "Exercice 2 (Manipulation de tables) : Exploitation d'une liste de dictionnaires",
                statement: `On dispose d'une table <code>catalogue</code> (liste de dictionnaires ayant pour clés <code>"titre"</code>, <code>"genre"</code> et <code>"note"</code>).
                <br>1. Écrire <code>filtrer_par_genre(catalogue, genre)</code> renvoyant la liste des titres appartenant au <code>genre</code> demandé.
                <br>2. Écrire <code>meilleur_film(catalogue)</code> renvoyant le titre du film ayant la note la plus élevée.`,
                starterCode: `catalogue = [
    {"titre": "Inception", "genre": "Sci-Fi", "note": 8.8},
    {"titre": "Le Parrain", "genre": "Drame", "note": 9.2},
    {"titre": "Interstellar", "genre": "Sci-Fi", "note": 8.7},
    {"titre": "Parasite", "genre": "Thriller", "note": 8.5}
]

def filtrer_par_genre(catalogue: list[dict], genre: str) -> list[str]:
    # À compléter
    pass

def meilleur_film(catalogue: list[dict]) -> str:
    assert len(catalogue) > 0, "Catalogue vide"
    # À compléter
    pass

# Tests
assert filtrer_par_genre(catalogue, "Sci-Fi") == ["Inception", "Interstellar"]
assert meilleur_film(catalogue) == "Le Parrain"
print("Exploitation de table validée !")`,
                solutionCode: `def filtrer_par_genre(catalogue: list[dict], genre: str) -> list[str]:
    return [film["titre"] for film in catalogue if film["genre"] == genre]

def meilleur_film(catalogue: list[dict]) -> str:
    assert len(catalogue) > 0, "Catalogue vide"
    top = catalogue[0]
    for film in catalogue:
        if film["note"] > top["note"]:
            top = film
    return top["titre"]`
            },
            {
                id: "exo-6-3",
                title: "Exercice 3 (Regroupement par clé) : Indexation d'élèves par classe",
                statement: `Écrire une fonction <code>regrouper_par_classe(eleves)</code> qui prend une liste de dictionnaires <code>{"nom": ..., "classe": ...}</code> et renvoie un dictionnaire associant à chaque nom de classe la <strong>liste des noms des élèves</strong> de cette classe.`,
                starterCode: `def regrouper_par_classe(eleves: list[dict]) -> dict[str, list[str]]:
    groupes = {}
    # Pour chaque élève, ajouter son nom dans groupes[classe]
    # (créer la liste vide si la classe n'est pas encore dans groupes)
    return groupes

# Tests
inscrits = [
    {"nom": "Alice", "classe": "TG1"},
    {"nom": "Bob", "classe": "TG2"},
    {"nom": "Charlie", "classe": "TG1"},
    {"nom": "Diana", "classe": "TG2"},
    {"nom": "Eliott", "classe": "TG1"}
]
res = regrouper_par_classe(inscrits)
assert res == {"TG1": ["Alice", "Charlie", "Eliott"], "TG2": ["Bob", "Diana"]}
print("Regroupement par classe :", res)
print("Exercice 3 validé !")`,
                solutionCode: `def regrouper_par_classe(eleves: list[dict]) -> dict[str, list[str]]:
    groupes = {}
    for eleve in eleves:
        cl = eleve["classe"]
        if cl not in groupes:
            groupes[cl] = []
        groupes[cl].append(eleve["nom"])
    return groupes`
            },
            {
                id: "exo-6-4",
                title: "Exercice 4 (Optimisation en $O(n)$ grâce au hachage) : Problème des deux sommes (Two Sum)",
                statement: `Étant donné une liste d'entiers <code>nombres</code> et une <code>cible</code>, on souhaite trouver deux indices distincts <code>(i, j)</code> tels que <code>nombres[i] + nombres[j] == cible</code>.
                <br>Au lieu d'une double boucle en $O(n^2)$, utiliser un dictionnaire <code>deja_vus</code> mémorisant <code>{valeur: indice}</code> au fil d'un unique parcours pour résoudre le problème en temps linéaire <strong>$O(n)$</strong>.`,
                starterCode: `def deux_sommes(nombres: list[int], cible: int) -> tuple[int, int] | None:
    deja_vus = {}
    for i, val in enumerate(nombres):
        complement = cible - val
        # Si complement est dans deja_vus, renvoyer (deja_vus[complement], i)
        # Sinon mémoriser deja_vus[val] = i
        pass
    return None

# Tests
assert deux_sommes([2, 7, 11, 15], 9) == (0, 1)
assert deux_sommes([3, 2, 4], 6) == (1, 2)
assert deux_sommes([1, 2, 3], 10) is None
print("Algorithme Two Sum en O(n) validé !")`,
                solutionCode: `def deux_sommes(nombres: list[int], cible: int) -> tuple[int, int] | None:
    deja_vus = {}
    for i, val in enumerate(nombres):
        complement = cible - val
        if complement in deja_vus:
            return (deja_vus[complement], i)
        deja_vus[val] = i
    return None`
            }
        ]
    }
];

function renderSessionsGrid() {
    const grid = document.getElementById("sessions-grid-view");
    grid.innerHTML = "";

    sessionsData.forEach((session) => {
        const hasExercises = session.exercises && session.exercises.length > 0;
        const countLabel = hasExercises
            ? `${session.exercises.length} exercices${session.qcm ? ` • ${session.qcm.length} QCM` : ""}`
            : `Fiche + ${session.qcm ? session.qcm.length + " QCM" : "Synthèse"}`;

        const card = document.createElement("article");
        card.className = "session-card";
        card.innerHTML = `
            <div>
                <span class="card-tag">${session.tag}</span>
                <h2>${session.title}</h2>
                <p>${session.shortDesc}</p>
            </div>
            <div class="card-footer">
                <span>${countLabel}</span>
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
        <h3 class="exercises-section-title">QCM d'auto-évaluation</h3>
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
    const hasExercises = session.exercises && session.exercises.length > 0;
    let exercisesHTML = "";

    if (hasExercises) {
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
    }

    const exercisesBlockHTML = hasExercises
        ? `<h3 class="exercises-section-title">Exercices types à compléter</h3>${exercisesHTML}`
        : "";

    container.innerHTML = `
        <span class="badge">${session.tag}</span>
        <h2 class="session-title">${session.title}</h2>
        ${session.summary}
        ${qcmHTML}
        ${exercisesBlockHTML}
    `;

    if (hasExercises) {
        session.exercises.forEach((exo) => {
            window.createExerciseEditor(exo.id, exo.starterCode);
        });
    }

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
