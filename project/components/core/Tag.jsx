import React from 'react';
export function Tag({children,variant='outline'}){
const solid=variant==='solid';
const [hover,setHover]=React.useState(false);
return React.createElement('span',{onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{
display:'inline-flex',alignItems:'center',padding:'6px 16px',borderRadius:'var(--radius-pill)',
fontSize:'var(--text-caption)',fontWeight:700,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',
cursor:'default',
background:hover?'var(--accent)':(solid?'var(--ink)':'transparent'),
color:hover?'var(--ivory)':(solid?'var(--ivory)':'var(--ink-70)'),
borderColor:hover?'var(--accent)':'var(--border-default)',
border:solid&&!hover?'none':'var(--border-w) solid',
transition:'background var(--dur-med) var(--ease-standard),color var(--dur-med) var(--ease-standard),border-color var(--dur-med) var(--ease-standard)'
}},children);
}
