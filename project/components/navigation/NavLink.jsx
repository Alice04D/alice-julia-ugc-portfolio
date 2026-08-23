import React from 'react';
export function NavLink({children,href='#',active=false,dark=false}){
const [hover,setHover]=React.useState(false);
const color=dark?'var(--ivory)':'var(--ink)';
return React.createElement('a',{href,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{
position:'relative',color,fontWeight:600,fontSize:'0.95rem',letterSpacing:'var(--tracking-wide)',
textTransform:'uppercase',paddingBottom:6,display:'inline-block'
}},children,
React.createElement('span',{style:{
position:'absolute',left:0,bottom:0,height:2,background:'var(--accent)',
width:(hover||active)?'100%':'0%',transition:'width var(--dur-med) var(--ease-standard)'
}}));
}
