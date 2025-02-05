export interface Activity {
    name: string;
    category: string;
    company?: string;
    logo?: string;
    year: string;
    link?: string;
    description: string;
}

export const activities = [
    {
        name: "ZIVE IT Projecty",
        category: "Hacakthon",
        company: "FEI Tuke",
        logo: "https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/presentation_images/hreader-zive-it-new-black-blue.png",
        year: "2025",
        link:"https://kpi.fei.tuke.sk/sk/zaverecna-prezentacia-timovych-projektov-2025",
        description: "I am with my teammates worked on a project for MAGNA and we went to finals."
    },
    {
        name: "Unleash Innovation Lab",
        category: "ICT lab",
        company: "Unleash",
        logo: "https://unleash.org/wp-content/uploads/2022/04/UNLEASH_blue-1.png",
        year: "2024",
        link:"https://unleash.org/rwanda/",
        description: "I was selected as a `global talent` to participate in the Unleash Innovation Lab in 2024."
    }
];