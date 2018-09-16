export enum Status {
    Unanswered = 0,
    Incorrect = 1,
    Correct = 2
}

export const pharmacology = {
    title: 'Pharmacology',
    questions: [
        {
            title: "Which of the following is the antidote for the toxin Benzodiazepines?",
            value: 100,
            answers: [{
                id: 0,
                title: "Flumazenil"
            },
            {
                id: 1,
                title: "Methylene blue"
            },
            {
                id: 2,
                title: "Deferoxamine"
            },
            {
                id: 3,
                title: "Alkalinize urine"
            },
            ],
            answer: 0,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is the antidote for the toxin Lead?",
            value: 100,
            answers: [{
                id: 0,
                title: "Naloxone"
            },
            {
                id: 1,
                title: "Nitrite"
            },
            {
                id: 2,
                title: "CaEDTA"
            },
            {
                id: 3,
                title: "Dialysis"
            },
            ],
            answer: 2,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is the primary site of activity for the drug Warfarin?",
            value: 100,
            answers: [{
                id: 0,
                title: "Kidney"
            },
            {
                id: 1,
                title: "Liver"
            },
            {
                id: 2,
                title: "Blood"
            },
            {
                id: 3,
                title: "Heart"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "Lansoprazole is not used in which of the following cases?",
            value: 100,
            answers: [{
                id: 0,
                title: "Gastritis"
            },
            {
                id: 1,
                title: "Peptic Ulcers"
            },
            {
                id: 2,
                title: "Zollinger-Ellison syndrome"
            },
            {
                id: 3,
                title: "Thalamus hypertrophy"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        },
        {
            title: "Which of the following drugs is associated with the reaction of Cinchonism?",
            value: 200,
            answers: [{
                id: 0,
                title: "Valproic acid"
            },
            {
                id: 1,
                title: "Quinidine"
            },
            {
                id: 2,
                title: "Isoniazid"
            },
            {
                id: 3,
                title: "Ethosuximide"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "Which of the following drugs is associated with the reaction of hepatitis?",
            value: 200,
            answers: [{
                id: 0,
                title: "Valproic acid"
            },
            {
                id: 1,
                title: "Quinidine"
            },
            {
                id: 2,
                title: "Isoniazid"
            },
            {
                id: 3,
                title: "Ethosuximide"
            },
            ],
            answer: 2,
            status: Status.Unanswered
        },
        {
            title: "Which of the following drugs is associated with the reaction of Stevens-Johnson syndrome?",
            value: 200,
            answers: [{
                id: 0,
                title: "Valproic acid"
            },
            {
                id: 1,
                title: "Quinidine"
            },
            {
                id: 2,
                title: "Isoniazid"
            },
            {
                id: 3,
                title: "Ethosuximide"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        },
        {
            title: "Which of the following drugs is associated with the reaction of Tendon dyfunction?",
            value: 200,
            answers: [{
                id: 0,
                title: "Digitalis"
            },
            {
                id: 1,
                title: "Niacin"
            },
            {
                id: 2,
                title: "Tetracycline"
            },
            {
                id: 3,
                title: "Fluoroquinolones"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        },
        {
            title: "A drug ending in the suffix (pril) is considered a ______",
            value: 300,
            answers: [{
                id: 0,
                title: "H"
            },
            {
                id: 1,
                title: "ACE inhibitor"
            },
            {
                id: 2,
                title: "Antifungal"
            },
            {
                id: 3,
                title: "Beta agonist"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "A drug ending in the suffix (azole) is considered a ______",
            value: 300,
            answers: [{
                id: 0,
                title: "H"
            },
            {
                id: 1,
                title: "ACE inhibitor"
            },
            {
                id: 2,
                title: "Antifungal"
            },
            {
                id: 3,
                title: "Beta agonist"
            },
            ],
            answer: 2,
            status: Status.Unanswered
        },
        {
            title: "A drug ending in the suffix (tidine) is considered a ______",
            value: 300,
            answers: [{
                id: 0,
                title: "Antidepressant"
            },
            {
                id: 1,
                title: "Protease inhibitor"
            },
            {
                id: 2,
                title: "Beta antagonist"
            },
            {
                id: 3,
                title: "H2 antagonist"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        },
        {
            title: "A drug ending in the suffix (navir) is considered a ______",
            value: 400,
            answers: [{
                id: 0,
                title: "Antidepressant"
            },
            {
                id: 1,
                title: "Protease inhibitor"
            },
            {
                id: 2,
                title: "Beta antagonist"
            },
            {
                id: 3,
                title: "H2 antagonist"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "Which of the following drugs is associated with the reaction of extreme photosensitivity?",
            value: 400,
            answers: [{
                id: 0,
                title: "Digitalis"
            },
            {
                id: 1,
                title: "Niacin"
            },
            {
                id: 2,
                title: "Tetracycline"
            },
            {
                id: 3,
                title: "Fluoroquinolones"
            },
            ],
            answer: 2,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is not related to a drug toxicity of Prednisone?",
            value: 400,
            answers: [{
                id: 0,
                title: "Cataracts"
            },
            {
                id: 1,
                title: "Hypotension"
            },
            {
                id: 2,
                title: "Psychosis"
            },
            {
                id: 3,
                title: "Acne"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is not related to a drug toxicity of Atenolol?",
            value: 400,
            answers: [{
                id: 0,
                title: "CHF"
            },
            {
                id: 1,
                title: "Tachycardia"
            },
            {
                id: 2,
                title: "AV block"
            },
            {
                id: 3,
                title: "Sedative appearance"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is considered a class IA Sodium Channel blocker?",
            value: 500,
            answers: [{
                id: 0,
                title: "Mexiletine"
            },
            {
                id: 1,
                title: "Aminodarone"
            },
            {
                id: 2,
                title: "Quinidine"
            },
            {
                id: 3,
                title: "Procainamide"
            },
            ],
            answer: 1,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is considered a class IA Sodium Channel blocker?",
            value: 500,
            answers: [{
                id: 0,
                title: "Propafenone"
            },
            {
                id: 1,
                title: "Disopyramide"
            },
            {
                id: 2,
                title: "Aminodarone"
            },
            {
                id: 3,
                title: "Quinidine"
            },
            ],
            answer: 0,
            status: Status.Unanswered
        },
        {
            title: "Potassium sparing diuretics have the primary effect upon the _____ found in the kidney",
            value: 500,
            answers: [{
                id: 0,
                title: "Proximal convoluted tubule"
            },
            {
                id: 1,
                title: "Loop of Henle"
            },
            {
                id: 2,
                title: "Collecting duct"
            },
            {
                id: 3,
                title: "Distal convoluted tubule"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is not directly related to a drug toxicity of Nitroglycerin?",
            value: 500,
            answers: [{
                id: 0,
                title: "Headaches"
            },
            {
                id: 1,
                title: "Tachycardia"
            },
            {
                id: 2,
                title: "Dizziness"
            },
            {
                id: 3,
                title: "Projectile vomiting"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        },
        {
            title: "Which of the following is not directly related to a drug toxicity of Ibuprofen?",
            value: 300,
            answers: [{
                id: 0,
                title: "Nausea"
            },
            {
                id: 1,
                title: "Renal dysfunction"
            },
            {
                id: 2,
                title: "Anemia"
            },
            {
                id: 3,
                title: "Muscle wasting"
            },
            ],
            answer: 3,
            status: Status.Unanswered
        }        
    ]
}

export const Categories = [
    {
        title: "Category 1",
        questions: [
            {
                title: "",
                value: 100,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 200,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 300,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 400,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 500,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }
        ]
    },
    {
        title: "Category 1",
        questions: [
            {
                title: "",
                value: 100,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 200,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 300,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 400,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 500,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }
        ]
    },
    {
        title: "Category 1",
        questions: [
            {
                title: "",
                value: 100,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 200,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 300,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 400,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 500,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }
        ]
    },
    {
        title: "Category 1",
        questions: [
            {
                title: "",
                value: 100,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 200,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 300,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 400,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 500,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }
        ]
    },
    {
        title: "Category 1",
        questions: [
            {
                title: "",
                value: 100,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 200,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 300,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 400,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 500,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }
        ]
    },
    {
        title: "Category 1",
        questions: [
            {
                title: "",
                value: 100,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 200,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            },
            {
                title: "",
                value: 300,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 400,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }, {
                title: "",
                value: 500,
                answers: [
                    { id: 0, title: "" },
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                    { id: 3, title: "" },
                ],
                answer: 0, status: Status.Unanswered
            }
        ]
    }
];