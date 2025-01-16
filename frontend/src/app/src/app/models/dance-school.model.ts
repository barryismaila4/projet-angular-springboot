import { DanceCategory } from "./dance-category.model";

export class DanceSchool {
    id: number;
    name: string;
    localisation: string;
    openday: string;
    closeday: string;
    opentime: string;
    closetime: string;
    danceCategory: DanceCategory; // Référence à DanceCategory

    constructor(
        id: number,
        name: string,
        localisation: string,
        openday: string,
        closeday: string,
        opentime: string,
        closetime: string,
        danceCategory: DanceCategory
    ) {
        this.id = id;
        this.name = name;
        this.localisation = localisation;
        this.openday = openday;
        this.closeday = closeday;
        this.opentime = opentime;
        this.closetime = closetime;
        this.danceCategory = danceCategory;
    }
}