import React from 'react';
export function ServiceCard({title,description,items,price,dark=false}){
const bg=dark?'var(--ink)':'var(--surface)';
const color=dark?'var(--ivory)':'var(--ink)';
const [hover,setHover]=React.useState(false);
return React.createElement('div',{onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{
background:bg,color,borderRadius:'var(--radius-md)',padding:'var(--space-6)',
border:dark?'none':'var(--border-w) solid var(--border-default)',
boxShadow:hover?'var(--shadow-card-hover)':'var(--shadow-card)',
transform:hover?'translateY(-4px)':'none',
transition:'transform var(--dur-med) var(--ease-standard),box-shadow var(--dur-med) var(--ease-standard)',
display:'flex',flexDirection:'column',gap:14
}},
React.createElement('h3',{style:{margin:0,fontSize:'var(--text-h3)',fontWeight:800}},title),
description&&React.createElement('p',{style:{margin:0,fontSize:'var(--text-small)',lineHeight:'var(--leading-body)',opacity:.85}},description),
items&&React.createElement('ul',{style:{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:8}},
items.map((it,i)=>React.createElement('li',{key:i,style:{fontSize:'var(--text-small)',display:'flex',justifyContent:'space-between',gap:12,borderTop:'1px solid',borderColor:dark?'rgba(246,241,234,.15)':'var(--border-default)',paddingTop:8}},it))
),
price&&React.createElement('div',{style:{marginTop:'auto',fontWeight:800,fontSize:'var(--text-body-lg)',paddingTop:8}},price)
);
}
