'use client';

import { useBearStore } from './store.js';
import { usePersistentBearStore } from './store.js'

export function BearCounter() {
    const bears = useBearStore((state) => state.bears)
    return <span>{bears} around here ...</span>
}

export function Controls() {
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
}

export function PersistentBearCounter() {
    const bears = usePersistentBearStore((state) => state.bears)
    return <span>{bears} persistents around here ...</span>
}

export function PersistentControls() {
    const increasePopulation = usePersistentBearStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one persistent up</button>
}
