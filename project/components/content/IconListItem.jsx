import React from 'react';
export function IconListItem({icon,title,description}){
const [hover,setHover]=React.useState(false);
return React.createElement('div',{onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{
display:'flex',gap:16,alignItems:description?'flex-start':'center',cursor:'default',
transform:hover?'translateX(6px) scale(1.02)':'none',
transition:'transform var(--dur-med) var(--ease-standard)'
}},
React.createElement('div',{style:{
width:40,height:40,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
background:hover?'var(--accent)':'var(--ink)',
transition:'background var(--dur-med) var(--ease-standard)'
}},
typeof icon==='string'?React.createElement('img',{src:icon,alt:'',style:{width:20,height:20,filter:'invert(1)'}}):icon
),
React.createElement('div',null,
React.createElement('div',{style:{fontWeight:700,fontSize:'var(--text-body)',color:'var(--text-primary)'}},title),
description&&React.createElement('div',{style:{fontSize:'var(--text-small)',color:'var(--text-secondary)',marginTop:2,lineHeight:'var(--leading-body)'}},description)
)
);
}
