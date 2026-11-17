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
                statement: `Écrire une fonction <code>compter_occurrences(chaine)</code> qui prend en paramètre une chaîne de caractères non vide et renvoie un dictionnaire associant à chaque caractère son nombre d'apparitions. En déduire le caractère le plus fréquent.`,
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
    return occurrences

def plus_frequent(chaine: str) -> str:
    occ = compter_occurrences(chaine)
    max_car = chaine[0]
    for car, nb in occ.items():
        if nb > occ[max_car]:
            max_car = car
    return max_car`
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
        tag: "Séance 1 • Paradigmes",
        title: "Programmation Orientée Objet (POO)",
        shortDesc: "Classes, instances, constructeur __init__, attributs, méthodes, encapsulation et composition d'objets.",
        summary: `
            <p>La Programmation Orientée Objet permet de regrouper au sein d'une même structure (une <strong>classe</strong>) des données (les <strong>attributs</strong>) et les traitements associés (les <strong>méthodes</strong>).</p>
            <div class="course-grid">
                <div class="concept-card">
                    <h4>1. Classe et Instance</h4>
                    <p>Une <strong>classe</strong> est un modèle abstrait défini par le mot-clé <code>class NomClasse:</code>.</p>
                    <p>Un <strong>objet (instance)</strong> est créé en appelant la classe : <code>obj = NomClasse(arg1, arg2)</code>.</p>
                </div>
                <div class="concept-card">
                    <h4>2. Constructeur & <code>self</code></h4>
                    <p>La méthode spéciale <code>__init__(self, ...)</code> initialise les attributs de l'instance lors de sa création.</p>
                    <p>Le paramètre <code>self</code> désigne l'instance courante sur laquelle la méthode est appelée.</p>
                </div>
                <div class="concept-card">
                    <h4>3. Encapsulation & Interface</h4>
                    <p>On manipule l'état interne d'un objet via ses <strong>méthodes</strong> (accesseurs / mutateurs) plutôt que de modifier directement ses attributs.</p>
                    <p>Convention : un attribut préfixé par <code>_</code> signale un usage interne.</p>
                </div>
                <div class="concept-card">
                    <h4>4. Méthodes spéciales</h4>
                    <p><code>__str__(self)</code> : renvoie une représentation lisible de l'objet (utilisée par <code>print(obj)</code>).</p>
                    <p><code>__repr__(self)</code> : représentation non ambiguë pour le débogage.</p>
                </div>
            </div>
        `,
        exercises: [
            {
                id: "exo-1-1",
                title: "Exercice type 1 : Gestion d'un compte bancaire",
                statement: `Compléter la classe <code>CompteBancaire</code> possédant deux attributs : <code>titulaire</code> (str) et <code>solde</code> (float, initialisé à 0 par défaut). Implémenter les méthodes <code>deposer(montant)</code>, <code>retirer(montant)</code> (qui renvoie <code>True</code> si le solde est suffisant, <code>False</code> sinon sans modifier le solde) et <code>__str__()</code>.`,
                starterCode: `class CompteBancaire:
    def __init__(self, titulaire: str, solde: float = 0.0):
        # À compléter
        pass

    def deposer(self, montant: float) -> None:
        # À compléter
        pass

    def retirer(self, montant: float) -> bool:
        # À compléter
        pass

    def __str__(self) -> str:
        # À compléter
        pass

# Tests
c1 = CompteBancaire("Alice", 100.0)
c1.deposer(50.0)
assert c1.solde == 150.0
assert c1.retirer(200.0) == False
assert c1.retirer(80.0) == True
assert c1.solde == 70.0
print(c1)
print("Tests CompteBancaire validés !")`,
                solutionCode: `class CompteBancaire:
    def __init__(self, titulaire: str, solde: float = 0.0):
        self.titulaire = titulaire
        self.solde = solde

    def deposer(self, montant: float) -> None:
        if montant > 0:
            self.solde += montant

    def retirer(self, montant: float) -> bool:
        if 0 < montant <= self.solde:
            self.solde -= montant
            return True
        return False

    def __str__(self) -> str:
        return f"Compte de {self.titulaire} : {self.solde} €"`
            },
            {
                id: "exo-1-2",
                title: "Exercice type 2 : Composition d'objets (Fraction & comparaison)",
                statement: `On modélise une fraction par une classe <code>Fraction</code> d'attributs <code>num</code> (numérateur entier) et <code>denom</code> (dénominateur entier strictement positif). Écrire la méthode <code>est_egale(self, autre)</code> qui renvoie <code>True</code> si les deux fractions sont mathématiquement égales (produit en croix), et <code>multiplier(self, autre)</code> qui renvoie une <strong>nouvelle instance</strong> de <code>Fraction</code>.`,
                starterCode: `class Fraction:
    def __init__(self, num: int, denom: int):
        assert denom > 0, "Le dénominateur doit être strictement positif"
        self.num = num
        self.denom = denom

    def est_egale(self, autre: 'Fraction') -> bool:
        # À compléter
        pass

    def multiplier(self, autre: 'Fraction') -> 'Fraction':
        # À compléter
        pass

    def __str__(self) -> str:
        return f"{self.num}/{self.denom}"

# Tests
f1 = Fraction(1, 2)
f2 = Fraction(2, 4)
f3 = Fraction(3, 5)
assert f1.est_egale(f2) == True
assert f1.est_egale(f3) == False
f4 = f1.multiplier(f3)
assert f4.num == 3 and f4.denom == 10
print("Produit :", f4)
print("Tests Fraction validés !")`,
                solutionCode: `class Fraction:
    def __init__(self, num: int, denom: int):
        assert denom > 0, "Le dénominateur doit être strictement positif"
        self.num = num
        self.denom = denom

    def est_egale(self, autre: 'Fraction') -> bool:
        return self.num * autre.denom == self.denom * autre.num

    def multiplier(self, autre: 'Fraction') -> 'Fraction':
        return Fraction(self.num * autre.num, self.denom * autre.denom)

    def __str__(self) -> str:
        return f"{self.num}/{self.denom}"`
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

    let exercisesHTML = "";
    session.exercises.forEach((exo) => {
        exercisesHTML += `
            <div class="exercise-box">
                <h4>${exo.title}</h4>
                <p style="margin-top: 0.5rem;">${exo.statement}</p>
                <div class="exercise-actions">
                    <button class="btn-outline" onclick="loadCodeInEditor(\`${encodeURIComponent(exo.starterCode)}\`)">
                        Charger dans l'éditeur Python
                    </button>
                    <button class="btn-secondary" onclick="toggleCorrection('${exo.id}')">
                        Afficher / Masquer la correction
                    </button>
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
        <h3 style="margin-top: 1.5rem;">Exercices types</h3>
        ${exercisesHTML}
    `;

    // Pré-charge automatiquement le premier exercice de la séance dans l'éditeur
    if (session.exercises.length > 0) {
        document.getElementById("python-editor").value = session.exercises[0].starterCode;
        document.getElementById("python-output").textContent = "";
    }

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

window.loadCodeInEditor = function(encodedCode) {
    const editor = document.getElementById("python-editor");
    editor.value = decodeURIComponent(encodedCode);
    editor.scrollIntoView({ behavior: "smooth", block: "center" });
};

window.toggleCorrection = function(exoId) {
    const box = document.getElementById(`corr-${exoId}`);
    box.classList.toggle("visible");
};

document.addEventListener("DOMContentLoaded", () => {
    renderSessionsGrid();
    document.getElementById("back-btn").addEventListener("click", showGrid);
});