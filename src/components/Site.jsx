import React from 'react'

const siteText=[
    {
        text:["Make","site compliant with","johyenho"],
        title:"2차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","작업기간 : 5일","프로그램 : html, css, javascript..."]
    },
    {
        text:["Make","site compliant with","johyenho"],
        title:"팀프로젝트",
        code:"/",
        view:"/",
        info:["site coding","작업기간 : 10일","프로그램 : html, css, javascript..."]
    },
    {
        text:["Make","site compliant with","johyenho"],
        title:"1차포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","작업기간 : 12일","프로그램 : html, css, javascript..."]
    },
    {
        text:["Make","site compliant with","johyenho"],
        title:"지원하고 싶은 회사 웹페이지",
        code:"/",
        view:"/",
        info:["site coding","작업기간 : 3일","프로그램 : html, css, javascript..."]
    }

]

const Site = () => {
    return (
        <section id='site'>
            <div className='site_inner'>
                <h2 className='site_title'>
                    Site coding <em>나의 작품들</em>
                </h2>
                <div className="site_wrap">

        {siteText.map((site,key)=>(
            <article className={`site_item s${key+1}`} key={key}>
                <span className='num'>{key+1}.</span>
                <div className='text'>
                    <div>{site.text[0]}</div>
                    <div>{site.text[1]}</div>
                    <div>{site.text[2]}</div>
                </div>
                <h3 className='title'>{site.title}</h3>
                <div className='btn'>
                    <a href={site.code}>사이트주소</a>
                    <a href={site.view}>설명보기</a>
                </div>
                <div className='info'>
                    <span>{site.info[0]}</span>
                    <span>{site.info[1]}</span>
                    <span>{site.info[2]}</span>
                </div>
            </article>
        ))}

                    
                </div>
            </div>
        </section>
    )
}

export default Site
