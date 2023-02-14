/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chapter_4.ts":
/*!**************************!*\
  !*** ./src/chapter_4.ts ***!
  \**************************/
/***/ ((module) => {

const chapter_4 = () => {
    // start title
    console.group("Chapitre 4 - Les classe");
    // start Conception de deux classes
    console.groupCollapsed("Conception de deux classes");
    class Personne {
        constructor(prenom, nom, age, ...techologies) {
            this._prenom = prenom;
            this._nom = nom;
            this._age = age;
            this._technologies = [...techologies];
        }
    }
    console.log(Personne);
    // typage d'une classe
    class Etudiant extends Personne {
        constructor(ecole, personne) {
            super(personne._prenom, personne._nom, personne._age, ...personne._technologies);
            this._ecole = ecole;
        }
        getFullData() {
            return `
                    - ${this._nom} ${this._prenom} est inscrit à l'école: ${this._ecole}.
                    - De part son age (${this._age} ans), on peut dire qu'il est en reconversion professionel.
                    - Il a pour objectif de maîtriser ces technologies: ${this._technologies}
                `;
        }
    }
    console.log(Etudiant);
    console.groupEnd(); // fin Conception de deux classes
    // start instanciation des classes
    console.group("Instanciation des classes");
    const alain = new Personne("Alain", "Guillon", 38, "JavaScript", "TypeScript", "NodeJS", "React");
    const tarek = new Personne("Tarek", "Taguine", 27, "JavaScript", "NodeJS", "React");
    console.log(alain);
    console.log(tarek);
    const etudiant_1 = new Etudiant("It-Akademy", alain);
    const etudiant_2 = new Etudiant("It-Akademy", tarek);
    console.log(etudiant_1);
    console.log(etudiant_2);
    console.groupEnd(); // end instanciation des classes
    // start afficher une méthode
    console.group("Afficher une méthode");
    console.log(etudiant_1.getFullData());
    console.log(etudiant_2.getFullData());
    console.groupEnd();
    console.groupEnd(); // end title
};
module.exports = {
    chapter_4
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
const dyma = __webpack_require__(/*! ./chapter_4.ts */ "./src/chapter_4.ts");
dyma.chapter_4();

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map