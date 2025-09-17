"use client";

import usePreviewModal from "@/hooks/use-preview-modal";

import  PreviewModal from "@/components/preview-modal";
import { useState } from "react";
import { useEffect } from "react";

const ModalPreview =() => { 

    const [isMounted,  setIsMounted  ] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }
    return( 
        <>
    <PreviewModal />;
        </>
    )
}  




export default ModalPreview;