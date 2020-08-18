export interface Category {
    categoryId: string;
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
