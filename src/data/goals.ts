export type GoalCategory = 'Professional' | 'Health' | 'Travel' | 'Personal' | 'Education';

export interface Goal {
    title: string;
    description: string;
    status: 'completed' | 'in-progress';
    category: GoalCategory;
    deadline: string;
    progress: number;
}

export interface YearlyGoals {
    [year: string]: {
        goals: Goal[];
        quote: {
            text: string;
            author: string;
        };
    };
}

export const goals: YearlyGoals = {
    "2025": {
        goals: [
            {
                "title": "Pioneer advanced applications in Artificial Intelligence",
                "description": "I am passionate about pushing the boundaries of Artificial Intelligence by delving into complex areas like deep learning, reinforcement learning, natural language processing, and AI ethics. My focus is on applying advanced AI methods to solve innovative, real-world problems and drive transformative change in industries such as healthcare, finance, and automation. I am committed to mastering these technologies and using them to create impactful solutions.",
                "status": "in-progress",
                "category": "Professional",
                "deadline": "2025-12-31",
                "progress": 7
            }
            
            ,
            {
                title: "Write more low-level apps with C/C++",
                description: "I want to know low-level programming, how to work efficently with memory, and how to make super fast apps",
                status: "in-progress",
                category: "Professional",
                deadline: "2025-06-30",
                progress: 10
            },
            {
                title: "Visit 2 New Countries",
                description: "Explore new cultures and places",
                status: "in-progress",
                category: "Travel",
                deadline: "2025-12-31",
                progress: 50
            },
            {
                title: "Read 10 Books",
                description: "Read 10 books to improve my knowledge",
                status: "in-progress",
                category: "Personal",
                deadline: "2025-12-31",
                progress: 0
            },
            {
                title: "Ride a bike for 1000 km",
                description: "Increase my stamina and health",
                status: "in-progress",
                category: "Health",
                deadline: "2025-12-31",
                progress: 60
            },
            {
                title: "Go to the gym, improve the shape of my body",
                description: "I want to be healthier and have a good shape",
                status: "in-progress",
                category: "Health",
                deadline: "2025-12-31",
                progress: 0
            },
            {
                title: "Complete this academic year in a foreign university successfully",
                description: "I am studying in a foreign university and I want to complete this year without any fails, I completed my prevoius degree with a honor degree, currentl I am more focused on career more than student life, so I need to balance both",
                status: "in-progress",
                category: "Education",
                deadline: "2025-12-31",
                progress: 100
            },
            {
                "title": "Master the fundamentals of computer science",
                "description": "I am dedicated to mastering the core principles of computer science, including DSA, algorithms, computer architecture, operating systems, networks, and databases. With a strong foundation already in place, I continue to deepen my expertise to solve complex problems and make valuable contributions to the tech industry.",
                "status": "in-progress",
                "category": "Personal",
                "deadline": "2025-12-31",
                "progress": 55
            }
            
        ],
        quote: {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
    }
};
