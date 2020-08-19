export interface Category {
    id: string;
    description: string;
}

export interface Course {
    id: string;
    subjectDescription: string;
    startDate: Date;
    endDate: Date;
    studentQuantity: number;
    category: Category;
}
