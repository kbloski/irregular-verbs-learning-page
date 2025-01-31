import { VerbConfigurationType, VerbGroupType } from "@/types/VerbType";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    verbs: string[];
};

export function GET(
    req: NextApiRequest,
) {
    const verbs = ["run", "jump", "read", "write"];

    return new Response( JSON.stringify({ jsonData }));
}

const jsonData : VerbConfigurationType[] = [
    {
        id: 0,
        groupType: VerbGroupType.FULLY_IRREGULAR,
        verb: {
            tense: "be",
            translation: "być",
        },
        past: {
            tense: "was/were",
            translation: "był",
        },
        pastParticiple: {
            tense: "been",
            translation: "były",
        },
    },
    {
        id: 1,
        groupType: VerbGroupType.FULLY_IRREGULAR,
        verb: {
            tense: "can",
            translation: "móc",
        },
        past: {
            tense: "could",
            translation: "mógł/mogła",
        },
        pastParticiple: {
            tense: "could",
            translation: "mógł",
        },
    },
    {
        id: 2,
        groupType: VerbGroupType.FULLY_IRREGULAR,
        verb: {
            tense: "do",
            translation: "robić",
        },
        past: {
            tense: "did",
            translation: "robił",
        },
        pastParticiple: {
            tense: "done",
            translation: "zrobiony",
        },
    },
    {
        id: 3,
        groupType: VerbGroupType.FULLY_IRREGULAR,
        verb: {
            tense: "go",
            translation: "iść",
        },
        past: {
            tense: "went",
            translation: "poszedł/poszła",
        },
        pastParticiple: {
            tense: "gone",
            translation: "poszedł",
        },
    },
    {
        id: 4,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "cost",
            translation: "kosztować",
        },
        past: {
            tense: "cost",
            translation: "kosztował",
        },
        pastParticiple: {
            tense: "cost",
            translation: "kosztowany",
        },
    },
    {
        id: 5,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "cut",
            translation: "ciąć",
        },
        past: {
            tense: "cut",
            translation: "ciął",
        },
        pastParticiple: {
            tense: "cut",
            translation: "cięty",
        },
    },
    {
        id: 6,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "hit",
            translation: "uderzać",
        },
        past: {
            tense: "hit",
            translation: "uderzył/uderzyła",
        },
        pastParticiple: {
            tense: "hit",
            translation: "uderzony",
        },
    },
    {
        id: 7,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "put",
            translation: "położyć",
        },
        past: {
            tense: "put",
            translation: "położył",
        },
        pastParticiple: {
            tense: "put",
            translation: "położony",
        },
    },
    {
        id: 8,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "read",
            translation: "czytać",
        },
        past: {
            tense: "read",
            translation: "czytał/czytała",
        },
        pastParticiple: {
            tense: "read",
            translation: "przeczytany",
        },
    },
    {
        id: 9,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "set",
            translation: "ustawić",
        },
        past: {
            tense: "set",
            translation: "ustawił/ustawiła",
        },
        pastParticiple: {
            tense: "set",
            translation: "ustawiony",
        },
    },
    {
        id: 10,
        groupType: VerbGroupType.IDENTICALS,
        verb: {
            tense: "shut",
            translation: "zamykać",
        },
        past: {
            tense: "shut",
            translation: "zamknął/zamknęła",
        },
        pastParticiple: {
            tense: "shut",
            translation: "zamknięty",
        },
    },
    {
        id: 11,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "bend",
            translation: "zginać",
        },
        past: {
            tense: "bent",
            translation: "zgiął/zgięła",
        },
        pastParticiple: {
            tense: "bent",
            translation: "zgięty",
        },
    },
    {
        id: 12,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "bring",
            translation: "przynosić",
        },
        past: {
            tense: "brought",
            translation: "przyniósł/przyniosła",
        },
        pastParticiple: {
            tense: "brought",
            translation: "przyniesiony",
        },
    },
    {
        id: 13,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "build",
            translation: "budować",
        },
        past: {
            tense: "built",
            translation: "zbudował/zbudowała",
        },
        pastParticiple: {
            tense: "built",
            translation: "zbudowany",
        },
    },
    {
        id: 14,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "burn",
            translation: "palić",
        },
        past: {
            tense: "burned/burnt",
            translation: "spalił/spaliła",
        },
        pastParticiple: {
            tense: "burned/burnt",
            translation: "spalony",
        },
    },
    {
        id: 15,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "buy",
            translation: "kupować",
        },
        past: {
            tense: "bought",
            translation: "kupił/kupiła",
        },
        pastParticiple: {
            tense: "bought",
            translation: "kupiony",
        },
    },
    {
        id: 16,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "catch",
            translation: "łapać",
        },
        past: {
            tense: "caught",
            translation: "złapał/złapała",
        },
        pastParticiple: {
            tense: "caught",
            translation: "złapany",
        },
    },
    {
        id: 17,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "feel",
            translation: "czuć",
        },
        past: {
            tense: "felt",
            translation: "czuł/czuła",
        },
        pastParticiple: {
            tense: "felt",
            translation: "czuty",
        },
    },
    {
        id: 18,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "fight",
            translation: "walczyć",
        },
        past: {
            tense: "fought",
            translation: "walczył/walczyła",
        },
        pastParticiple: {
            tense: "fought",
            translation: "walczony",
        },
    },
    {
        id: 19,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "find",
            translation: "znaleźć",
        },
        past: {
            tense: "found",
            translation: "znalazł/znalazła",
        },
        pastParticiple: {
            tense: "found",
            translation: "znaleziony",
        },
    },
    {
        id: 20,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "get",
            translation: "dostać",
        },
        past: {
            tense: "got",
            translation: "dostał/dostała",
        },
        pastParticiple: {
            tense: "gotten",
            translation: "dostany",
        },
    },
    {
        id: 21,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "hang",
            translation: "wieszać",
        },
        past: {
            tense: "hung",
            translation: "powiesił/powiesiła",
        },
        pastParticiple: {
            tense: "hung",
            translation: "powieszony",
        },
    },
    {
        id: 22,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "have",
            translation: "mieć",
        },
        past: {
            tense: "had",
            translation: "miał/miała",
        },
        pastParticiple: {
            tense: "had",
            translation: "miał",
        },
    },
    {
        id: 23,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "hear",
            translation: "słyszeć",
        },
        past: {
            tense: "heard",
            translation: "słyszał/słyszała",
        },
        pastParticiple: {
            tense: "heard",
            translation: "słyszany",
        },
    },
    {
        id: 24,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "keep",
            translation: "trzymać",
        },
        past: {
            tense: "kept",
            translation: "trzymał/trzymała",
        },
        pastParticiple: {
            tense: "kept",
            translation: "trzymany",
        },
    },
    {
        id: 25,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "lay",
            translation: "kłaść",
        },
        past: {
            tense: "laid",
            translation: "położył/położyła",
        },
        pastParticiple: {
            tense: "laid",
            translation: "położony",
        },
    },
    {
        id: 26,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "lead",
            translation: "prowadzić",
        },
        past: {
            tense: "led",
            translation: "prowadził/prowadziła",
        },
        pastParticiple: {
            tense: "led",
            translation: "prowadzony",
        },
    },
    {
        id: 27,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "learn",
            translation: "uczyć się",
        },
        past: {
            tense: "learned/learnt",
            translation: "uczył się",
        },
        pastParticiple: {
            tense: "learned/learnt",
            translation: "nauczony",
        },
    },
    {
        id: 28,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "leave",
            translation: "opuszczać",
        },
        past: {
            tense: "left",
            translation: "opuścił/opuściła",
        },
        pastParticiple: {
            tense: "left",
            translation: "opuszczony",
        },
    },
    {
        id: 29,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "lend",
            translation: "pożyczać",
        },
        past: {
            tense: "lent",
            translation: "pożyczył/pożyczyła",
        },
        pastParticiple: {
            tense: "lent",
            translation: "pożyczony",
        },
    },
    {
        id: 30,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "lose",
            translation: "tracić",
        },
        past: {
            tense: "lost",
            translation: "stracił/straciła",
        },
        pastParticiple: {
            tense: "lost",
            translation: "stracony",
        },
    },
    {
        id: 31,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "make",
            translation: "robić",
        },
        past: {
            tense: "made",
            translation: "zrobił/zrobiła",
        },
        pastParticiple: {
            tense: "made",
            translation: "zrobiony",
        },
    },
    {
        id: 32,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "mean",
            translation: "znaczyć",
        },
        past: {
            tense: "meant",
            translation: "znaczył",
        },
        pastParticiple: {
            tense: "meant",
            translation: "znaczący",
        },
    },
    {
        id: 33,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "meet",
            translation: "spotykać",
        },
        past: {
            tense: "met",
            translation: "spotkał/spotkała",
        },
        pastParticiple: {
            tense: "met",
            translation: "spotkany",
        },
    },
    {
        id: 34,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "pay",
            translation: "płacić",
        },
        past: {
            tense: "paid",
            translation: "zapłacił/zapłaciła",
        },
        pastParticiple: {
            tense: "paid",
            translation: "zapłacony",
        },
    },
    {
        id: 35,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "say",
            translation: "powiedzieć",
        },
        past: {
            tense: "said",
            translation: "powiedział/powiedziała",
        },
        pastParticiple: {
            tense: "said",
            translation: "powiedziany",
        },
    },
    {
        id: 36,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "sell",
            translation: "sprzedawać",
        },
        past: {
            tense: "sold",
            translation: "sprzedał/sprzedała",
        },
        pastParticiple: {
            tense: "sold",
            translation: "sprzedany",
        },
    },
    {
        id: 37,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "send",
            translation: "wysłać",
        },
        past: {
            tense: "sent",
            translation: "wysłał/wysłała",
        },
        pastParticiple: {
            tense: "sent",
            translation: "wysłany",
        },
    },
    {
        id: 38,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "shine",
            translation: "świecić",
        },
        past: {
            tense: "shone",
            translation: "świecił/świeciła",
        },
        pastParticiple: {
            tense: "shone",
            translation: "świecony",
        },
    },
    {
        id: 39,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "shoot",
            translation: "strzelać",
        },
        past: {
            tense: "shot",
            translation: "strzelił/strzeliła",
        },
        pastParticiple: {
            tense: "shot",
            translation: "strzelony",
        },
    },
    {
        id: 40,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "sit",
            translation: "siedzieć",
        },
        past: {
            tense: "sat",
            translation: "siedział/siedziała",
        },
        pastParticiple: {
            tense: "sat",
            translation: "siedzący",
        },
    },
    {
        id: 41,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "sleep",
            translation: "spać",
        },
        past: {
            tense: "slept",
            translation: "spać",
        },
        pastParticiple: {
            tense: "slept",
            translation: "spany",
        },
    },
    {
        id: 42,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "smell",
            translation: "pachnieć",
        },
        past: {
            tense: "smelt",
            translation: "pachniał/pachniała",
        },
        pastParticiple: {
            tense: "smelt",
            translation: "pachnący",
        },
    },
    {
        id: 43,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "spell",
            translation: "literować",
        },
        past: {
            tense: "spelt",
            translation: "literował",
        },
        pastParticiple: {
            tense: "spelt",
            translation: "literowany",
        },
    },
    {
        id: 44,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "spend",
            translation: "wydawać",
        },
        past: {
            tense: "spent",
            translation: "wydany",
        },
        pastParticiple: {
            tense: "spent",
            translation: "wydany",
        },
    },
    {
        id: 45,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "spill",
            translation: "rozlać",
        },
        past: {
            tense: "spilt",
            translation: "rozlał/rozlała",
        },
        pastParticiple: {
            tense: "spilt",
            translation: "rozlany",
        },
    },
    {
        id: 46,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "stand",
            translation: "stać",
        },
        past: {
            tense: "stood",
            translation: "stał/stała",
        },
        pastParticiple: {
            tense: "stood",
            translation: "stojący",
        },
    },
    {
        id: 47,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "teach",
            translation: "uczyć",
        },
        past: {
            tense: "taught",
            translation: "uczył/uczyła",
        },
        pastParticiple: {
            tense: "taught",
            translation: "nauczony",
        },
    },
    {
        id: 48,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "tell",
            translation: "powiedzieć",
        },
        past: {
            tense: "told",
            translation: "powiedział/powiedziała",
        },
        pastParticiple: {
            tense: "told",
            translation: "powiedziany",
        },
    },
    {
        id: 49,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "think",
            translation: "myśleć",
        },
        past: {
            tense: "thought",
            translation: "myślał/myślała",
        },
        pastParticiple: {
            tense: "thought",
            translation: "myślany",
        },
    },
    {
        id: 50,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "throw",
            translation: "rzucać",
        },
        past: {
            tense: "threw",
            translation: "rzucił/rzuciła",
        },
        pastParticiple: {
            tense: "thrown",
            translation: "rzucony",
        },
    },
    {
        id: 51,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "understand",
            translation: "rozumieć",
        },
        past: {
            tense: "understood",
            translation: "rozumiał/rozumiała",
        },
        pastParticiple: {
            tense: "understood",
            translation: "zrozumiany",
        },
    },
    {
        id: 52,
        groupType: VerbGroupType.FIRST_DIFFERENT,
        verb: {
            tense: "win",
            translation: "wygrywać",
        },
        past: {
            tense: "won",
            translation: "wygrał/wygrała",
        },
        pastParticiple: {
            tense: "won",
            translation: "wygrany",
        },
    },
    {
        id: 53,
        groupType: VerbGroupType.MIDDLE_DIFFERENT,
        verb: {
            tense: "become",
            translation: "stawać się",
        },
        past: {
            tense: "became",
            translation: "stał się",
        },
        pastParticiple: {
            tense: "become",
            translation: "stały się",
        },
    },
    {
        id: 54,
        groupType: VerbGroupType.MIDDLE_DIFFERENT,
        verb: {
            tense: "come",
            translation: "przyjść",
        },
        past: {
            tense: "came",
            translation: "przyszedł/przyszła",
        },
        pastParticiple: {
            tense: "come",
            translation: "przybyły",
        },
    },
    {
        id: 55,
        groupType: VerbGroupType.MIDDLE_DIFFERENT,
        verb: {
            tense: "overcome",
            translation: "przezwyciężać",
        },
        past: {
            tense: "overcame",
            translation: "przezwyciężył",
        },
        pastParticiple: {
            tense: "overcome",
            translation: "przezwyciężony",
        },
    },
    {
        id: 56,
        groupType: VerbGroupType.MIDDLE_DIFFERENT,
        verb: {
            tense: "run",
            translation: "biegać",
        },
        past: {
            tense: "ran",
            translation: "biegł/biegła",
        },
        pastParticiple: {
            tense: "run",
            translation: "biegał",
        },
    },
    {
        id: 57,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "bite",
            translation: "gryźć",
        },
        past: {
            tense: "bit",
            translation: "gryzł/gryzła",
        },
        pastParticiple: {
            tense: "bitten",
            translation: "ugryziony",
        },
    },
    {
        id: 58,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "break",
            translation: "łamać",
        },
        past: {
            tense: "broke",
            translation: "złamał/złamała",
        },
        pastParticiple: {
            tense: "broken",
            translation: "złamany",
        },
    },
    {
        id: 59,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "choose",
            translation: "wybierać",
        },
        past: {
            tense: "chose",
            translation: "wybrał/wybrała",
        },
        pastParticiple: {
            tense: "chosen",
            translation: "wybrany",
        },
    },
    {
        id: 60,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "drive",
            translation: "prowadzić",
        },
        past: {
            tense: "drove",
            translation: "prowadził/prowadziła",
        },
        pastParticiple: {
            tense: "driven",
            translation: "prowadzony",
        },
    },
    {
        id: 61,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "eat",
            translation: "jeść",
        },
        past: {
            tense: "ate",
            translation: "jadł/jadła",
        },
        pastParticiple: {
            tense: "eaten",
            translation: "zjedzony",
        },
    },
    {
        id: 62,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "fall",
            translation: "upadać",
        },
        past: {
            tense: "fell",
            translation: "upadł/upadła",
        },
        pastParticiple: {
            tense: "fallen",
            translation: "upadły",
        },
    },
    {
        id: 63,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "forget",
            translation: "zapomnieć",
        },
        past: {
            tense: "forgot",
            translation: "zapomniał/zapomniała",
        },
        pastParticiple: {
            tense: "forgotten",
            translation: "zapomniany",
        },
    },
    {
        id: 64,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "give",
            translation: "dawać",
        },
        past: {
            tense: "gave",
            translation: "dał/dała",
        },
        pastParticiple: {
            tense: "given",
            translation: "dany",
        },
    },
    {
        id: 65,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "hide",
            translation: "chować",
        },
        past: {
            tense: "hid",
            translation: "schował/schowała",
        },
        pastParticiple: {
            tense: "hidden",
            translation: "schowany",
        },
    },
    {
        id: 66,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "ride",
            translation: "jeździć",
        },
        past: {
            tense: "rode",
            translation: "jeździł/jeździła",
        },
        pastParticiple: {
            tense: "ridden",
            translation: "jeżdżony",
        },
    },
    {
        id: 67,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "see",
            translation: "widzieć",
        },
        past: {
            tense: "saw",
            translation: "widział/widziała",
        },
        pastParticiple: {
            tense: "seen",
            translation: "widziany",
        },
    },
    {
        id: 68,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "shake",
            translation: "trząść",
        },
        past: {
            tense: "shook",
            translation: "trząsł/trzęsła",
        },
        pastParticiple: {
            tense: "shaken",
            translation: "trzęsiony",
        },
    },
    {
        id: 69,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "speak",
            translation: "mówić",
        },
        past: {
            tense: "spoke",
            translation: "mówił/mówiła",
        },
        pastParticiple: {
            tense: "spoken",
            translation: "mówiony",
        },
    },
    {
        id: 70,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "steal",
            translation: "kraść",
        },
        past: {
            tense: "stole",
            translation: "ukradł/ukradła",
        },
        pastParticiple: {
            tense: "stolen",
            translation: "ukradziony",
        },
    },
    {
        id: 71,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "take",
            translation: "brać",
        },
        past: {
            tense: "took",
            translation: "wziął/wzięła",
        },
        pastParticiple: {
            tense: "taken",
            translation: "wzięty",
        },
    },
    {
        id: 72,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "wake",
            translation: "budzić się",
        },
        past: {
            tense: "woke",
            translation: "obudził/obudziła",
        },
        pastParticiple: {
            tense: "woken",
            translation: "obudzony",
        },
    },
    {
        id: 73,
        groupType: VerbGroupType.VERB_en,
        verb: {
            tense: "write",
            translation: "pisać",
        },
        past: {
            tense: "wrote",
            translation: "pisał/pisała",
        },
        pastParticiple: {
            tense: "written",
            translation: "pisany",
        },
    },
    {
        id: 74,
        groupType: VerbGroupType.VERB_an_un,
        verb: {
            tense: "begin",
            translation: "zaczynać",
        },
        past: {
            tense: "began",
            translation: "zaczął/zaczęła",
        },
        pastParticiple: {
            tense: "begun",
            translation: "zaczęty",
        },
    },
    {
        id: 75,
        groupType: VerbGroupType.VERB_an_un,
        verb: {
            tense: "drink",
            translation: "pić",
        },
        past: {
            tense: "drank",
            translation: "pił/piła",
        },
        pastParticiple: {
            tense: "drunk",
            translation: "wypity",
        },
    },
    {
        id: 76,
        groupType: VerbGroupType.VERB_an_un,
        verb: {
            tense: "ring",
            translation: "dzwonić",
        },
        past: {
            tense: "rang",
            translation: "dzwonił/dzwoniła",
        },
        pastParticiple: {
            tense: "rung",
            translation: "zadzwoniony",
        },
    },
    {
        id: 77,
        groupType: VerbGroupType.VERB_an_un,
        verb: {
            tense: "sing",
            translation: "śpiewać",
        },
        past: {
            tense: "sang",
            translation: "śpiewał/śpiewała",
        },
        pastParticiple: {
            tense: "sung",
            translation: "śpiewany",
        },
    },
    {
        id: 78,
        groupType: VerbGroupType.VERB_an_un,
        verb: {
            tense: "sink",
            translation: "tonąć",
        },
        past: {
            tense: "sank",
            translation: "tonął",
        },
        pastParticiple: {
            tense: "sunk",
            translation: "tonący",
        },
    },
    {
        id: 79,
        groupType: VerbGroupType.VERB_an_un,
        verb: {
            tense: "swim",
            translation: "pływać",
        },
        past: {
            tense: "swam",
            translation: "pływał/pływała",
        },
        pastParticiple: {
            tense: "swum",
            translation: "pływający",
        },
    },
    {
        id: 80,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "blow",
            translation: "dmuchać",
        },
        past: {
            tense: "blew",
            translation: "dmuchał/dmuchała",
        },
        pastParticiple: {
            tense: "blown",
            translation: "dmuchany",
        },
    },
    {
        id: 81,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "draw",
            translation: "rysować",
        },
        past: {
            tense: "drew",
            translation: "rysował/rysowała",
        },
        pastParticiple: {
            tense: "drawn",
            translation: "narysowany",
        },
    },
    {
        id: 82,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "fly",
            translation: "latać",
        },
        past: {
            tense: "flew",
            translation: "latał/latała",
        },
        pastParticiple: {
            tense: "flown",
            translation: "wzleciał",
        },
    },
    {
        id: 83,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "grow",
            translation: "rosnąć",
        },
        past: {
            tense: "grew",
            translation: "rósł/rosła",
        },
        pastParticiple: {
            tense: "grown",
            translation: "urosły",
        },
    },
    {
        id: 84,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "know",
            translation: "wiedzieć",
        },
        past: {
            tense: "knew",
            translation: "wiedział/wiedziała",
        },
        pastParticiple: {
            tense: "known",
            translation: "wiedział",
        },
    },
    {
        id: 85,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "show",
            translation: "pokazywać",
        },
        past: {
            tense: "showed",
            translation: "pokazał/pokazała",
        },
        pastParticiple: {
            tense: "shown",
            translation: "pokazany",
        },
    },
    {
        id: 86,
        groupType: VerbGroupType.VERB_wn,
        verb: {
            tense: "wear",
            translation: "nosić",
        },
        past: {
            tense: "wore",
            translation: "nosił/nosiła",
        },
        pastParticiple: {
            tense: "worn",
            translation: "noszony",
        },
    },
];