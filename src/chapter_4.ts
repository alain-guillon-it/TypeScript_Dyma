

const chapter_4 = () => {

    // start title
    console.group("Chapitre 4 - Les classe")

        // start Conception de deux classes
        console.groupCollapsed("Conception de deux classes")
        class Personne
        {
            protected prenom: string;
            protected nom: string
            protected age: number;
            protected technologies: string[];

            static presentation = "Cette classe est une entité propre à une personne";

            constructor(prenom: string, nom: string, age: number, ...technologies: string[] ) {
                this.prenom = prenom;
                this.nom = nom;
                this.age = age;
                this.technologies = [...technologies]
            }

            getPrenom(): string {
                return this.prenom
            }
            getNom(): string {
                return this.nom
            }
            getAge(): number {
                return this.age
            }
            getTechnologie(): string[] {
                return this.technologies
            }
        }
        console.log(Personne)
        
        // typage d'une classe
        class Etudiant extends Personne
        {
            private ecole: string

            static presentation = "Cette classe fait référence à un élève issue d'une école";


            constructor(ecole: string, prenom, nom: string, age: number, ...technologies: string[]) {
                super(prenom, nom, age, ...technologies)
                this.ecole = ecole;
            }

            getFullData():string {
                return `
                    - ${this.nom} ${this.prenom} est inscrit à l'école: ${this.ecole}.
                    - De part son age (${this.age} ans), on peut dire qu'il est en reconversion professionel.
                    - Il a pour objectif de maîtriser ces technologies: ${this.technologies}
                `
            }
        }
        console.log(Etudiant);
        console.groupEnd(); // fin Conception de deux classes

        // start instanciation des classes
        console.groupCollapsed("Instanciation des classes");
            const alain = new Personne("Alain", "Guillon", 38, "JavaScript", "TypeScript", "NodeJS", "React");
            const tarek = new Personne("Tarek", "Taguine", 27, "JavaScript", "NodeJS", "React");
            console.log(alain);
            console.log(tarek);
            const etudiant_1 = new Etudiant("It-Akademy", alain.getPrenom(), alain.getNom(), alain.getAge(), ...alain.getTechnologie() );
            const etudiant_2 = new Etudiant("It-Akademy", tarek.getPrenom(), tarek.getNom(), tarek.getAge(), ...tarek.getTechnologie());
            console.log(etudiant_1);
            console.log(etudiant_2);
        console.groupEnd() // end instanciation des classes

        // start afficher une méthode
        console.groupCollapsed("Afficher une méthode")
            console.log(etudiant_1.getFullData());
            console.log(etudiant_2.getFullData());
        console.groupEnd() // end afficher une méthode

        // start afficher les méthodes statique
        console.groupCollapsed("Afficher les méthodes statique de chacune des classes")
            console.log(Etudiant.presentation)
            console.log(Personne.presentation)
        console.groupEnd() // end afficher les méthodes statique

    console.groupEnd() // end title
};

module.exports = {
    chapter_4
}