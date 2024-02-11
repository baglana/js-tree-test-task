<script lang="ts">
    import response from './response.json';
    import type {Service, ServiceList} from "./types";

    const data: ServiceList = JSON.parse(JSON.stringify(response));
    const services: Service[] = data.services;

    const level1 = services.filter(service => service.head === null);

    console.log(build(level1));

    function build(subservices: Service[]) {
        subservices.forEach(node => {
            node.subservices = services.filter(service => service.head === node.id);
            build(node.subservices);
        });

        return subservices;
    }

</script>

<ul>
    {#each data.services as service}
        <li>{service.id} - {service.name} - {service.head} - {service.sorthead}</li>
    {/each}
</ul>