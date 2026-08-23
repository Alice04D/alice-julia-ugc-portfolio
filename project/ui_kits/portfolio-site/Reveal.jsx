function Reveal({children,delay=0,style}){
const ref=React.useRef(null);
const [visible,setVisible]=React.useState(false);
React.useEffect(()=>{
const el=ref.current;
const obs=new IntersectionObserver((entries)=>{
entries.forEach(e=>{if(e.isIntersecting){setVisible(true);obs.disconnect();}});
},{threshold:0.15});
if(el)obs.observe(el);
return ()=>obs.disconnect();
},[]);
return React.createElement('div',{ref,style:{
opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(28px)',
transition:`opacity 620ms var(--ease-standard) ${delay}ms, transform 620ms var(--ease-standard) ${delay}ms`,
...style
}},children);
}
window.Reveal=Reveal;
