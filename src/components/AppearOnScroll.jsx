import { useRef, useEffect } from "react";

export const AppearOnScroll = ({ children }) => {

    const currentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {  
                if (entry.isIntersecting) {
                    currentRef.current.classList.add("visible");
                
                }
            
            
            },{ threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
        if (currentRef.current) {
            observer.observe(currentRef.current);
        }

        return () => {observer.disconnect()};

            })

    return <div ref={currentRef}  className="appear">{children}</div>
}