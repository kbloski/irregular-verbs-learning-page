export enum VerbGroupType {
    FULLY_IRREGULAR = "FULLY_IRREGULAR",
    IDENTICALS = "IDENTICALS",
    FIRST_DIFFERENT = "FIRST_DIFFERENT",
    MIDDLE_DIFFERENT = "MIDDLE_DIFFERENT",
    VERB_en = "VERB_en",
    VERB_an_un = "VERB_an_un",
    VERB_wn = "VERB_wn",
}

export type VerbConfigurationType = {
    id: number;
    groupType: VerbGroupType;
    present: {
        tense: string;
        translation: string;
    };
    past: {
        tense: string;
        translation: string;
    };
    pastParticiple: {
        tense: string;
        translation: string;
    };
};