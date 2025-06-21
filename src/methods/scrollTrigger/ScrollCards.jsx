import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import companies from "../scrollTrigger/companies";

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((ref, i) => {
            if (ref) {
                gsap.fromTo(
                    ref,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: ref,
                            start: "top center",
                            end: "bottom center",
                            toggleActions: "play reverse play reverse",
                            markers: false,
                        },
                    }
                );
            }
        });
        // Cleanup ScrollTriggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-20 space-y-40">
            {companies.map((company, i) => (
                <div
                    key={company.id}
                    ref={el => (cardRefs.current[i] = el)}
                    className="max-w-3xl h-full mx-auto bg-white p-8 rounded-xl shadow-lg text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">{company.name}</h2>
                    <p className="text-gray-600">{company.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ScrollCards;
