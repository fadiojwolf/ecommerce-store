"use client"

import {ShoppingBag} from "lucide-react"
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Button from "./ui/button";
import useCart from "@/hooks/use-cart";

const NavbarAction = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);

    const router = useRouter();
    const cart = useCart();


    if(!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex item-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex item-center rounded-full bg-black px-4 py-2">
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}

export default NavbarAction;