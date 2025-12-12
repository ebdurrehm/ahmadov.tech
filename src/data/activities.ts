export interface Activity {
    name: string;
    category: string;
    company?: string;
    logo?: string;
    year: string;
    link?: string;
    description: string;
    image?:string
}

export const activities = [
    {
        name: "Unleash Innovation Lab",
        category: "ICT lab",
        company: "Unleash",
        logo: "https://unleash.org/wp-content/uploads/2022/04/UNLEASH_blue-1.png",
        year: "2024",
        image: "/images/unleash.jpeg",
        link:"https://unleash.org/rwanda/",
        description: "I was selected as a `global talent` to participate in the Unleash Innovation Lab in 2024."
    },
    {
        name: "Deutsche telecom MegabrAIn hackhaton",
        category: "Hackathon",
        company: "Deutsche Telecom Slovakia",
        logo: "https://cdn.imgbin.com/16/8/4/imgbin-pink-area-text-symbol-t-mobile-t-mobile-logo-LD71Bh4mY8W8xgaQkntcruRBm.jpg",
        year: '2025',
        image:"/images/d-hackhaton.jpeg",
        description: "Our team won in the Autonomous Agents challenge at the Deutsche Telekom Slovakia hackathon in Košice! 🎉e joined the Autonomous Agents challenge and built a system that can create full projects from just a prompt. It can research, plan, write code, create tests, and run everything on its own."
    },
    {
        name: "Huawei Seeds For The Future",
        category: "Hackathon",
        company: "Huawei",
        logo: "https://cdn.imgbin.com/23/12/5/huawei-logo-WVx0sryC.jpg",
        year: "2025",
        image: "/images/huawei.jpeg",
        description: "I’ve completed the Seeds for the Future program by Huawei! 🌱It was a great experience to learn about emerging technologies like hashtag#AI, hashtag#5G, and cloud computing, while also connecting with people from different backgrounds and cultures. "
    },
    {
        name: "ZIVE IT Projecty",
        category: "Hackathon",
        company: "FEI Tuke",
        logo: "https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/presentation_images/hreader-zive-it-new-black-blue.png",
        year: "2025",
        link:"https://kpi.fei.tuke.sk/sk/zaverecna-prezentacia-timovych-projektov-2025",
        description: "I am with my teammates worked on a project for MAGNA and we went to finals."
    },
];