<script lang="ts">
    import type {Service} from "./types";

    export let root: Service["head"];
    export let nodes: Service[];

    const children = nodes.filter(node => node.head === root);
</script>

<ul>
    {#each children as child}
        <li>
            {child.id} - {child.name} - {child.head} - {child.sorthead}
            {#if nodes.some(node => node.head === child.id)}
                <svelte:self root={child.id} {nodes}/>
            {/if}
        </li>
    {/each}
</ul>