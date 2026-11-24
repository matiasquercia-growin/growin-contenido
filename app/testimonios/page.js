"use client";
import {useState} from "react";

const groups=[
 {id:"indumentaria",label:"Indumentaria y moda",items:[
 ["QNHyWDJXLx0","AL Indumentaria","Indumentaria deportiva","De soñar con crecer a facturar en grande"],
 ["EYbmatZICaM","Anda La Osa","Remeras y moda","Cómo llevaron su tienda al siguiente nivel"]
 ]},
 {id:"hogar",label:"Hogar, muebles y sanitarios",items:[
 ["ibfabS1uhc4","Cubos Blackioso","Muebles y sanitarios","De USD 2.000 a USD 30.000"]
 ]},
 {id:"gastronomia",label:"Alimentos y gastronomía",items:[
 ["6fLRYCrWdqE","Fitfood","Gastronomía","De USD 1.000 a más de USD 15.000"]
 ]},
 {id:"infantil",label:"Bebés y niños",items:[
 ["YODV-z0IVFI","Ropita de bebés","Indumentaria infantil","De ARS 100.000 a USD 7.000 en 2 meses"],
 ["2hRXQHRlL90","Ojitos de Cielo","Ropa de bebés","De USD 1.000 a más de USD 6.000 por mes"]
 ]},
 {id:"belleza",label:"Belleza y perfumería",items:[
 ["njXJKOP0bOU","Idraet","Cuidado de la piel","De una venta al mes a más de USD 10.000 por mes por su web"],
 ["livnU6fyPTE","Parfum Decants","Perfumería","De vender a conocidos a más de USD 4.000 por mes"]
 ]},
 {id:"accesorios",label:"Accesorios y venta mayorista",items:[
 ["zThH43b2exU","Nazarena Accesorios","Accesorios mayoristas","De vender por WhatsApp a ARS 24 millones por mes"],
 ["WZ05MhhsxO0","Es que lo necesito Bijou","Bijouterie","De USD 0 a más de USD 4.000 en 3 meses"]
 ]},
 {id:"tecnologia",label:"Tecnología y electrónica",items:[
 ["oo-wDv2Yk8M","Video Suiza","Tecnología","De ARS 2 millones a más de ARS 30 millones por mes"]
 ]},
 {id:"otros",label:"Más historias de ecommerce",items:[
 ["iK1WnHEWeRs","Caso de éxito","Tienda online","De USD 3.000 a USD 30.000"],
 ["8pDAhrTWiHM","Caso de éxito","Tienda online","De USD 0 a USD 6.000"],
 ["5gLWDqg7wE4","Caso de éxito","Tienda online","El camino de USD 100 a USD 2.000"],
 ["MIcYAPzQ6Uc","Caso de éxito","Tienda online","De USD 500 a USD 2.000"],
 ["U40UimzQ-v0","Caso de éxito","Tienda online","De perder plata con anuncios a facturar ARS 2 millones en un mes"],
 ["DfyIi2KCAC0","Planeta Mars","Tienda online","La historia de Joa y su tienda online"]
 ]}
];
const count=groups.reduce((n,g)=>n+g.items.length,0);
function VideoCard({item,active,onPlay}){
 const [id,name,sector,result]=item;
 return <article className="gw-case">
 <div className="gw-player">{active?<iframe src={"https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0&playsinline=1"} title={"Entrevista: "+name+" | "+result} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>:<button className="gw-thumb" onClick={()=>onPlay(id)} aria-label={"Reproducir entrevista: "+name+" "+result}><img src={"https://i.ytimg.com/vi/"+id+"/hqdefault.jpg"} loading="lazy" alt={"Miniatura original de YouTube: "+name}/><span className="gw-play" aria-hidden="true"><svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span className="gw-watch">Ver entrevista</span></button>}</div>
 <div className="gw-cardbody"><span className="gw-sector">{sector}</span><h3>{result}</h3><p>{name}</p><a href={"https://www.youtube.com/watch?v="+id} target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div>
 </article>
}
export default function Testimonios(){
 const [playing,setPlaying]=useState(null);
 const [copied,setCopied]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText("VISTO");setCopied(true)}catch{setCopied(false)}}
 return <div className="gw-testimonials"><style>{css}</style>
 <div className="gw-wrap">
 <header className="gw-header"><div className="gw-wordmark" aria-label="Growin">grow<span>in</span><i>.</i></div><span className="gw-pre">ANTES DE TU ASESORÍA</span></header>
 <main className="gw-main">
 <section className="gw-hero"><div className="gw-kicker"><span/> HISTORIAS REALES · GROWIN</div><h1>Antes de tu llamada,<br/>conocé negocios que <em>ya dieron el paso.</em></h1><p>Dueños de tiendas online que tenían desafíos parecidos a los tuyos. Elegí el rubro más cercano a tu negocio y mirá cómo trabajaron para crecer.</p><a className="gw-primary" href="#casos">Ver casos de éxito <span aria-hidden="true">↓</span></a><div className="gw-count">{count} entrevistas reales · Diferentes rubros</div></section>
 <section id="casos" className="gw-cases"><div className="gw-sectionhead"><div><div className="gw-kicker">RESULTADOS REALES</div><h2>Encontrá tu industria.</h2></div><p>Escuchá sus historias en primera persona.</p></div>
 <nav aria-label="Industrias" className="gw-nav">{groups.map(g=><a key={g.id} href={"#"+g.id}>{g.label}<span>{g.items.length}</span></a>)}</nav>
 {groups.map(g=><section key={g.id} id={g.id} className="gw-group"><div className="gw-grouphead"><h2>{g.label}</h2><span>{g.items.length} {g.items.length===1?"entrevista":"entrevistas"}</span></div><div className="gw-grid">{g.items.map(item=><VideoCard key={item[0]} item={item} active={playing===item[0]} onPlay={setPlaying}/>)}</div></section>)}
 <p className="gw-disclaimer">Los resultados corresponden a experiencias individuales y no garantizan resultados futuros. Dependen del negocio, su situación inicial y la implementación.</p>
 </section>
 <section className="gw-next"><div className="gw-kicker">ÚLTIMO PASO</div><h2>¿Ya viste los testimonios?</h2><p>Volvé al mismo chat de WhatsApp donde coordinaste la asesoría y mandale a tu asesor la palabra:</p><button className="gw-copy" onClick={copy} aria-label="Copiar la palabra VISTO">VISTO <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></button><div className="gw-copyhint" role="status">{copied?"¡Copiado! Pegalo en el chat de tu asesor.":"Tocá para copiar y pegalo en WhatsApp."}</div><p className="gw-reminder">Reservá el horario de tu llamada y prepará tus dudas. Nos vemos en la asesoría.</p></section>
 </main><footer className="gw-footer"><span>Growin · Ecommerce</span><a href="https://www.youtube.com/playlist?list=PLTU-PNlh60YUonCQtJHeKLk8sllaY9o5y" target="_blank" rel="noopener noreferrer">Playlist original ↗</a></footer>
 </div></div>
}
const css=`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Rubik:wght@400;500;600;700&display=swap');
.gw-testimonials{--bg:#090909;--panel:#121216;--ink:#fff;--muted:#b8b8c4;--green:#32DB6E;--violet:#4A22F2;--line:#292933;min-height:100vh;color:var(--ink);background:radial-gradient(ellipse at 90% 0%,#281660 0,transparent 37%),radial-gradient(ellipse at 0% 10%,#123c25 0,transparent 25%),var(--bg);font-family:Rubik,Arial,sans-serif;overflow:hidden}
.gw-testimonials *{box-sizing:border-box}.gw-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(16px,4vw,48px)}.gw-testimonials .gw-header{display:flex;align-items:center;justify-content:space-between;padding:24px 0;border:0;border-bottom:1px solid var(--line);letter-spacing:0}.gw-wordmark{font-family:Montserrat,sans-serif;font-size:30px;font-weight:900;letter-spacing:-.085em;color:white}.gw-wordmark span,.gw-wordmark i{color:var(--green);font-style:normal}.gw-testimonials .gw-header .gw-pre{color:#ddd9eb;letter-spacing:.13em;font-size:10px;font-weight:700}
.gw-testimonials .gw-main{padding:0;max-width:none;margin:0}.gw-hero{text-align:center;padding:clamp(45px,7vw,94px) 0 48px;max-width:870px;margin:auto}.gw-kicker{color:var(--green);font-size:11px;letter-spacing:.17em;font-weight:700;display:flex;align-items:center;gap:8px}.gw-hero .gw-kicker,.gw-next .gw-kicker{justify-content:center}.gw-kicker>span{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 14px var(--green)}.gw-testimonials h1,.gw-testimonials h2,.gw-testimonials h3{font-family:Montserrat,Arial,sans-serif;color:var(--ink);letter-spacing:-.035em;margin:0;line-height:1.16}.gw-testimonials h1{font-size:clamp(32px,5.5vw,65px);font-weight:800;margin:18px 0}.gw-testimonials h1 em{font-style:normal;color:var(--green)}.gw-testimonials p{color:var(--muted);line-height:1.6;margin:0}.gw-hero p{max-width:590px;margin:0 auto 25px;font-size:clamp(15px,2vw,18px)}.gw-primary{display:inline-flex;align-items:center;gap:24px;background:var(--green);color:#07160b;font-weight:700;padding:15px 25px;border-radius:10px;text-decoration:none;box-shadow:0 8px 32px #32db6e20}.gw-count{font-size:12px;color:#b9b9c5;margin-top:15px}
.gw-cases{padding:28px 0 48px}.gw-sectionhead{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;padding-bottom:20px}.gw-sectionhead h2{font-size:clamp(26px,4vw,42px);margin-top:8px}.gw-sectionhead p{font-size:14px}.gw-nav{display:flex;flex-wrap:wrap;gap:8px;padding-bottom:15px}.gw-nav a{display:inline-flex;gap:8px;align-items:center;border:1px solid #42404e;border-radius:30px;padding:9px 13px;color:#eeedf2;font-size:13px;text-decoration:none;background:#16151d}.gw-nav a:hover,.gw-nav a:focus-visible{border-color:var(--green);color:var(--green)}.gw-nav a span{font-size:11px;color:var(--green)}.gw-group{scroll-margin-top:20px;padding:25px 0;border-top:1px solid var(--line)}.gw-grouphead{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:15px}.gw-grouphead h2{font-size:clamp(19px,2.5vw,25px);font-weight:700}.gw-grouphead>span{color:var(--muted);font-size:12px;white-space:nowrap}.gw-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.gw-case{background:var(--panel);border:1px solid var(--line);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;min-width:0}.gw-player{position:relative;aspect-ratio:16/9;background:#000;overflow:hidden}.gw-player iframe{width:100%;height:100%;border:0;display:block}.gw-thumb{position:absolute;inset:0;display:block;border:0;background:#151515;width:100%;height:100%;padding:0;cursor:pointer;overflow:hidden;color:#fff}.gw-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:filter .2s}.gw-thumb:hover img{filter:brightness(.78)}.gw-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:58px;height:58px;background:var(--violet);border:2px solid #ffffff80;border-radius:50%;display:grid;place-items:center;box-shadow:0 4px 20px #0008}.gw-watch{position:absolute;bottom:8px;right:8px;background:#000b;border-radius:5px;padding:5px 8px;font-size:11px}.gw-cardbody{padding:15px 16px 17px;display:flex;flex:1;flex-direction:column;align-items:flex-start;gap:7px}.gw-sector{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.075em;color:var(--green)}.gw-cardbody h3{font-size:clamp(15px,1.6vw,19px);line-height:1.35;font-weight:750}.gw-cardbody p{font-size:13px}.gw-cardbody a{margin-top:auto;padding-top:5px;font-size:12px;color:#c4b3ff;text-decoration:none}.gw-cardbody a:hover{text-decoration:underline}.gw-testimonials .gw-disclaimer{font-size:12px;margin:12px 0 0;max-width:800px}
.gw-next{border:1px solid #5140a0;border-radius:24px;padding:clamp(25px,5vw,52px);text-align:center;background:radial-gradient(ellipse at 50% 0%,#32206a,transparent 75%),#151222}.gw-next h2{font-size:clamp(25px,4vw,39px);margin:12px 0}.gw-next p{max-width:540px;margin:0 auto;font-size:15px}.gw-copy{cursor:pointer;font-family:Montserrat,Arial,sans-serif;font-weight:900;font-size:clamp(28px,5vw,45px);color:#06170c;background:var(--green);border:0;border-radius:12px;padding:14px 30px;margin:22px 0 9px;display:inline-flex;align-items:center;gap:25px;letter-spacing:.08em}.gw-copyhint{font-size:13px;color:#d2c7f5;min-height:20px}.gw-next .gw-reminder{margin-top:20px;font-size:13px}.gw-testimonials .gw-footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;padding:30px 0;color:#a3a3ad;font-size:12px}.gw-footer a{color:#c4b3ff;text-decoration:none}.gw-testimonials :focus-visible{outline:2px solid var(--green);outline-offset:3px}.gw-thumb:focus-visible{outline-offset:-4px}.gw-primary:hover,.gw-copy:hover{filter:brightness(1.08)}
@media(max-width:800px){.gw-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.gw-sectionhead{align-items:flex-start;flex-direction:column}.gw-hero h1 br{display:none}}@media(max-width:500px){.gw-grid{grid-template-columns:1fr;gap:12px}.gw-testimonials .gw-header{padding:17px 0}.gw-wordmark{font-size:26px}.gw-testimonials .gw-header .gw-pre{font-size:9px}.gw-hero{padding:42px 0 30px}.gw-nav{gap:6px}.gw-nav a{font-size:12px;padding:7px 10px}.gw-group{padding:21px 0}.gw-cardbody{padding:14px}.gw-cardbody h3{font-size:18px}}@media(prefers-reduced-motion:reduce){.gw-thumb img{transition:none}}
`;
