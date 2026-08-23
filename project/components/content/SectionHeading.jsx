import React from 'react';
export function SectionHeading({eyebrow,title,align='left',dark=false,titleSize}){
const color=dark?'var(--ivory)':'var(--ink)';
const justify=align==='center'?'center':'flex-start';
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:18,alignItems:align==='center'?'center':'flex-start'}},
eyebrow&&React.createElement('div',{style:{display:'flex',alignItems:'center',gap:14,justifyContent:justify,width:'100%'}},
React.createElement('span',{style:{width:56,height:1,background:color,opacity:.5,display:align==='center'?'none':'block'}}),
React.createElement('span',{style:{width:7,height:7,borderRadius:'50%',background:'var(--accent)',flexShrink:0}}),
React.createElement('span',{style:{fontSize:'var(--text-eyebrow)',fontWeight:700,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--accent)'}},eyebrow)
),
React.createElement('h2',{style:{margin:0,fontSize:titleSize||'var(--text-h1)',fontWeight:800,letterSpacing:'var(--tracking-tight)',lineHeight:'var(--leading-tight)',color,textAlign:align}},title)
);
}
