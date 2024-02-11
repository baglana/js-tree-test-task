export type Service = {
    id: number;
    head: number | null;
    name: number;
    node: number;
    price: number;
    sorthead: number;
}

export type ServiceList = {
    services: Service[];
}