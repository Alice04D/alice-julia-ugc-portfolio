import React from 'react';
export function QuoteBlock({quote,body,dark=true}){
const bg=dark?'var(--ink)':'var(--surface-alt)';
const color=dark?'var(--ivory)':'var(--ink)';
const [hover,setHover]=React.useState(false);
return React.createElement('div',{onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{
background:bg,color,borderRadius:'var(--radius-lg)',padding:'var(--space-8)',
display:'grid',gridTemplateColumns:body?'1fr 1.3fr':'1fr',gap:'var(--space-6)',alignItems:'center',
transform:hover?'translateY(-6px)':'none',
boxShadow:hover?'var(--shadow-card-hover)':'none',
transition:'transform var(--dur-med) var(--ease-standard),box-shadow var(--dur-med) var(--ease-standard)'
}},
React.createElement('div',{style:{fontSize:'var(--text-h2)',fontWeight:800,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-tight)'}},'\u201C',quote,'\u201D'),
body&&React.createElement('div',{style:{fontSize:'var(--text-body)',lineHeight:'var(--leading-body)',opacity:.85}},body)
);
}
