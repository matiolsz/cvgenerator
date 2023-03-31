import { Education } from "./education.model";
import { Experience } from "./experience.model";

export class UserCV {

    fullName!: string;
    overallDescription!: string;
    role!: string;
    experience!: string;
    typeOfProjects!: string;
    technologyStack!: string;
    educationList!: Education[];
    languages!: string;
    detailedExperienceList!: Experience[];
}