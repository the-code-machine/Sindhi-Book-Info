'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore, } from '@/data/lib/store'
import Navbar from '@/components/Navbar'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return <div><Provider store={storeRef.current}>
        <Navbar />
        {children}</Provider></div>
}