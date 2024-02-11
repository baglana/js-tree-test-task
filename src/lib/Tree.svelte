<script lang="ts">
    import type {Service} from "./types";

    export let root: Service["head"];
    export let nodes: Service[];

    const children = nodes.filter(node => node.head === root);
    children.sort((a, b) => a.sorthead - b.sorthead);
</script>

<ul>
    {#each children as child}
        <li>
            {child.name} {child.price ? `(${child.price})` : ''}

            {#if child.node || nodes.some(node => node.head === child.id)}
                <svelte:self root={child.id} {nodes}/>
            {/if}
        </li>
    {/each}
</ul>