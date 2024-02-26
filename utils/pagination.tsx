export interface Pagination {
    sortby: string | "createdTime"
    size: number | 10
    page: any | 1
    order: string | "asc"
}

export const getDefaultPagination = (pagination?: Partial<Pagination>): Pagination => {
    return {
        sortby: pagination?.sortby || "createdTime",
        size: pagination?.size || 10,
        page: pagination?.page || 1,
        order: pagination?.order || "asc",
    };
};