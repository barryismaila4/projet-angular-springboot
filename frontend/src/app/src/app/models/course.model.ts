import { DanceSchool } from './dance-school.model';

export class Course {
    id: number | null; // Permettre à l'ID d'être null
    title: string;
    contenu: string;
    instructor: string;
    danceSchool: DanceSchool; // Référence à DanceSchool

    constructor(
        id: number | null,
        title: string,
        contenu: string,
        instructor: string,
        danceSchool: DanceSchool
    ) {
        this.id = id;
        this.title = title;
        this.contenu = contenu;
        this.instructor = instructor;
        this.danceSchool = danceSchool;
    }
}