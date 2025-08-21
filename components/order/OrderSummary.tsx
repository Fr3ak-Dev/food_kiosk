"use client"

import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"

export default function OrderSummary() {

    const order = useStore((state) => state.order)
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
            <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

            {order.length === 0 ? <p className="text-center my-10">El carrito está vacío</p> : (
                <div className="mt-5">
                    {order.map(item => (
                        <ProductDetails key={item.id} item={item} />
                    ))}

                    <p className="font-bold mt-10 text-center">
                        Total a pagar: {''}
                        <span>{formatCurrency(total)}</span>
                    </p>
                </div>
            )}
        </aside>
    )
}
