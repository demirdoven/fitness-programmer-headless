'use client'

import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";

const Hero = () => {

    return (
        <div className="w-full bg-[url(https://fitnessprogramer.com/wp-content/uploads/2015/10/shop-slider-bg-pattern.jpg)] py-4  border-b-red-600 border-b-8">
            <div className="container mx-auto lg:max-w-6xl">
                
                <div className="w-full flex flex-col lg:flex-row justify-between align-center ">
                    <Image src="/hero-sample.png" alt="dasd" width="1600" height="333"/>
                </div>

            </div>
        </div>
    )
}

export default Hero