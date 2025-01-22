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
                title: "Learn deep learning",
                description: "Deep dive into neural networks and machine learning",
                status: "in-progress",
                category: "Professional",
                deadline: "2025-12-31",
                progress: 5
            },
            {
                title: "Learn C/C++",
                description: "I want to know low-level programming, how to work with memory, and how to write fast code",
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
                progress: 20
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
                title: "Complete this academic year in a foreign university without any fails",
                description: "I am studying in a foreign university and I want to complete this year without any fails, I completed my prevoius degree with a honor degree, currentl I am more focused on career more than student life, so I need to balance both",
                status: "in-progress",
                category: "Education",
                deadline: "2025-12-31",
                progress: 40
            },
            {
                title: "Build strong foundations in computer science",
                description: "A true engineer should have strong foundations in computer science and should be able to understand the underlying principles. I want to learn deeply DSA, algorithms, computer architecture, operating systems, networks, databases, etc.",
                status: "in-progress",
                category: "Personal",
                deadline: "2025-12-31",
                progress: 0
            }
        ],
        quote: {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
    }
};
