import React from 'react';
export function Button({children,variant='outline',size='md',as='button',href,onClick,iconRight=false,style,...rest}){
const isSolid=variant==='primary';
const base={
fontFamily:'var(--font-sans)',fontWeight:700,letterSpacing:'var(--tracking-wide)',
borderRadius:'var(--radius-pill)',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:8,
border:'var(--border-w) solid var(--ink)',
padding:size==='lg'?'18px 34px':'13px 26px',
fontSize:size==='lg'?'1rem':'0.9rem',
transition:'background var(--dur-med) var(--ease-standard),color var(--dur-med) var(--ease-standard),transform var(--dur-fast) var(--ease-standard),border-color var(--dur-med) var(--ease-standard)',
background:isSolid?'var(--ink)':'transparent',
color:isSolid?'var(--ivory)':'var(--ink)',
...style
};
const El=as;
const [hover,setHover]=React.useState(false);
const hoverStyle=hover?{
background:isSolid?'var(--accent-deep)':'var(--accent)',
color:'var(--ivory)',
borderColor:isSolid?'var(--accent-deep)':'var(--accent)',
transform:'scale(1.03)'
}:{};
return React.createElement(El,{href,onClick,style:{...base,...hoverStyle},onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),...rest},
children,iconRight&&React.createElement('span',{style:{transition:'transform var(--dur-med) var(--ease-standard)',transform:hover?'translateX(3px)':'none'}},'→')
);
}
