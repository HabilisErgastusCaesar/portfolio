import { useStargateContext } from "./useContext/stargateComponents"
import { StargateLayoutContainer } from "./layout/stargateLayoutContainer";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export const StargateSearchEpisode = () => {
    const { Context } = useStargateContext();
    const [isMounted, setIsMounted] = useState(false);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const router = useRouter();
    useEffect(() => {
        if (router.query.command) {
            setLoading(false);
        }

        return () => {};
    }, [router]);
    
    useEffect(() => {
        if (isMounted) { 
            const handleScroll = () => {
                if (scrollRef.current.scrollTop) {
                    setScrollPosition({
                        x: scrollRef.current.scrollLeft,
                        y: scrollRef.current.scrollTop,
                    });
                }
                handleScroll()
                console.log(scrollPosition)
            };

            const currentRef = scrollRef.current;
            if (currentRef) {
                currentRef.addEventListener('scroll', handleScroll);
            }

            return () => {
                if (currentRef) {
                    currentRef.removeEventListener('scroll', handleScroll);
                }
            };
        }
    }, [isMounted]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };
    
    useEffect(() => {
        const handleResize = debounce(() => { 
            if (window.innerWidth <= 830) { 
                if (!Context.windowWidth.searchFilter) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        searchFilter:true
                    }));
                }
            } else {
                if (Context.windowWidth.searchFilter) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        searchFilter:false
                    }));
                }
            } if (window.innerWidth <= 1199) { 
                if (!Context.windowWidth.optionButtons) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        optionButtons:true
                    }));
                }
            } else {
                if (Context.windowWidth.optionButtons) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        optionButtons:false
                    }));
                }
            }
        }, 300); 
        if (typeof window !== "undefined") 
            { handleResize(); window.addEventListener("resize", handleResize); } 
        return () => { 
            if (typeof window !== "undefined") 
                { window.removeEventListener("resize", handleResize); 
        } };
    },[Context.windowWidth])

    if (loading) {
        return 
    }

    const stargate = (router.query.command as string)
    .replace("stargate", "").replace(/-season-(\d+)/,"").replace("&Episodes", "")
    .replace("&Cast", "").replace("&Info", "");
    
    return(<div className={`bigger-page-layout bigger-page-layout-${stargate}`}>
        {Context.windowWidth.optionButtons ? (
            <StargateLayoutContainer scrollRef={scrollRef}/>
        ):(
            <StargateLayoutContainer scrollRef={scrollRef}/>
        )}
        </div>)
}