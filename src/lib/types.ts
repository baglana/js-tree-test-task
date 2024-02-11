export type Service = {
    id: number | null;
    head: number | null;
    name: number;
    node: number;
    price: number;
    sorthead: number;
    children?: Service[];
}

export type ServiceList = {
    services: Service[];
}