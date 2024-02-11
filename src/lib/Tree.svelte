<script lang="ts">
    import response from './response.json';
    import type {Service, ServiceList} from "./types";

    const data: ServiceList = JSON.parse(JSON.stringify(response));
    const services: Service[] = data.services;

    const level1 = services.filter(service => service.head === null);
    buildTreeFrom(level1);

    function buildTreeFrom(level: Service[]) {
        level.forEach(node => {
            node.children = services.filter(service => service.head === node.id);
            buildTreeFrom(node.children);
        });
    }
</script>

<ul>
    {#each level1 as service}
        <li>
            {#if service.children?.length}
                <ul>
                    {#each service.children as child}
                        <li>{child.id} - {child.name} - {child.head} - {child.sorthead}</li>
                    {/each}
                </ul>
            {:else}
                {service.id} - {service.name} - {service.head} - {service.sorthead}
            {/if}
        </li>
    {/each}
</ul>