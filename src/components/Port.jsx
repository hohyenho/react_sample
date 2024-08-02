import React, { useEffect, useRef } from 'react'

import port01 from "../assets/img/mbc_prot01_code_99.png";
import port02 from "../assets/img/mbc_prot02_eof.png";
import port03 from "../assets/img/mbc_prot03__joteam.png";
import port04 from "../assets/img/mbc_prot04__scoops.png";
import port05 from "../assets/img/mbc_prot05_tamyok.png";
import port06 from "../assets/img/mbc_prot01_code_99.png";
import port07 from "../assets/img/mbc_prot02_eof.png";
import port08 from "../assets/img/mbc_prot03__joteam.png";
import port09 from "../assets/img/mbc_prot04__scoops.png";
import port10 from "../assets/img/mbc_prot05_tamyok.png";

import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const portText=[
    {
        num: "01",
        title: "코드99 포트폴리오",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos aliquid ab dolorum laborum fugit quam libero rerum sed, laudantium alias, sint tempora molestias ad, aspernatur asperiores consequuntur doloribus explicabo?",
        img: port01,
        code: "/",
        view: "/",
        name: "코드99 포트폴리오",
    },
    {
        num: "02",
        title: "E.O.F 팀프로젝트",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos aliquid ab dolorum laborum fugit quam libero rerum sed, laudantium alias, sint tempora molestias ad, aspernatur asperiores consequuntur doloribus explicabo?",
        img: port02,
        code: "/",
        view: "/",
        name: "E.O.F 팀프로젝트",
    },
    {
        num: "03",
        title: "조현호와 아이들",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos aliquid ab dolorum laborum fugit quam libero rerum sed, laudantium alias, sint tempora molestias ad, aspernatur asperiores consequuntur doloribus explicabo?",
        img: port03,
        code: "/",
        view: "/",
        name: "조현호와 아이들",
    },
    {
        num: "04",
        title: "scoops 팀프로젝트",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos aliquid ab dolorum laborum fugit quam libero rerum sed, laudantium alias, sint tempora molestias ad, aspernatur asperiores consequuntur doloribus explicabo?",
        img: port04,
        code: "/",
        view: "/",
        name: "scoops 팀프로젝트",
    },
    {
        num: "05",
        title: "scoops 팀프로젝트",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quos aliquid ab dolorum laborum fugit quam libero rerum sed, laudantium alias, sint tempora molestias ad, aspernatur asperiores consequuntur doloribus explicabo?",
        img: port05,
        code: "/",
        view: "/",
        name: "scoops 팀프로젝트",
    },
    
]

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const horizontal = horizontalRef.current;
        // horizontalRef.current : horizontalRef의 현재값
        const sections= sectionsRef.current;

        let scrollTween = gsap.to(sections,{
            xPercent : -120 * (sections.length -1),
            ease:"none",
            scrollTrigger:{
                trigger :  horizontal,   
                start : "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,

            }

        })
        return ()=>{
            scrollTween.kill()
        }
    });  



    return (
        <section id='port'>
            <div className="port_inner"  ref={horizontalRef}>
                <div className="port_title">
                portfolio <em>포폴 작업물</em>
                </div>
                <div className="port_wrap">
                    {
                        portText.map((port,key)=>(
                            <div 
                                className="port_item p1" 
                                key={key}
                                ref={(el)=>(sectionsRef.current[key]=el)}
                            >
                            <span className='num'>0{key+1}.</span>
                            <a href="/">
                                <img src={port.img} alt="" />
                            </a>
                            <h3 className='title'>{port.title}</h3>
                            <p className='desc'>
                                {port.desc}
                            </p>
                            
                            <a href="/" className='site' rel='noreferrer'>사이트 보기</a>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            
        </section>
  )
}

export default Port
