'use client';

import { useBearStore } from './store.js';
import { usePersistentBearStore } from './store.js'

export function BearCounter() {
    const bears = useBearStore((state) => state.bears)
    return <h1>{bears} around here ...</h1>
}

export function Controls() {
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
}

export function PersistentBearCounter() {
    const bears = usePersistentBearStore((state) => state.bears)
    return <h1>{bears} persistents around here ...</h1>
}

export function PersistentControls() {
    const increasePopulation = usePersistentBearStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one persistent up</button>
}
