<script lang="ts">
    import response from './lib/response.json';
    import type {Service, ServiceList} from "./lib/types";
    import Tree from "./lib/Tree.svelte";

    const data: ServiceList = JSON.parse(JSON.stringify(response));
    const services: Service[] = data.services;
</script>

<main>
    <h1>Тестовое задание (Js разработчик)</h1>

    <div class="card">
        <Tree nodes={services} root={null}/>
    </div>

</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }

    .read-the-docs {
        color: #888;
    }
</style>
