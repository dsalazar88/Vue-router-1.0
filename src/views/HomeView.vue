<template>
    <div class="text-center">
        <h1>Home counter: {{ count }}</h1>
        <h2>Double: {{ double }}</h2>
        <button @click="increment" class="btn btn-primary">Increment</button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../store/counter'

const useCounter = useCounterStore()
const {increment} = useCounter
const {double, count} = storeToRefs(useCounter)
</script>

<style >

</style>