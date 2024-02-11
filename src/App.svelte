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