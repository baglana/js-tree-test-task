export type Service = {
    id: number;
    head: number | null;
    name: number;
    node: number;
    price: number;
    sorthead: number;
    subservices?: Service[];
}

export type ServiceList = {
    services: Service[];
}