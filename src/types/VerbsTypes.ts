export enum VerbsGroupType {
    FULLY_IRREGULAR,
    IDENTICALS,
    FIRST_DIFFERENT,
    MIDDLE_DIFFERENT,
    VERB_en,
    VERB_an_un,
    VERB_wn,
    VERB_i_a_u,


}

export type VerbsType = {
    id: number;
    groupType: VerbsGroupType;
    verb: {
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