function ContactFooter(){
const {NavLink}=window.AliceJuliaDesignSystem_3111c6;
return React.createElement('footer',{id:'contact',style:{background:'var(--ink)',color:'var(--ivory)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto',padding:'var(--space-9) var(--content-pad) var(--space-8)',display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:'var(--space-8)',alignItems:'center'}},
React.createElement(Reveal,null,
React.createElement('div',null,
React.createElement('h2',{style:{margin:0,fontSize:'var(--text-h1)',fontWeight:800,letterSpacing:'var(--tracking-tight)'}},'Contact'),
React.createElement('div',{style:{display:'flex',gap:'var(--space-7)',marginTop:'var(--space-6)',flexWrap:'wrap',alignItems:'flex-start'}},
React.createElement('div',null,React.createElement('div',{style:{fontWeight:700,marginBottom:10,fontSize:'var(--text-body-lg)'}},'My Socials'),
React.createElement('div',{style:{fontSize:'var(--text-body)',opacity:.85,lineHeight:'var(--leading-body)'}},'TikTok — @itsalicejulia',React.createElement('br'),'Instagram — @itsalicejulia')),
React.createElement('div',null,React.createElement('div',{style:{fontWeight:700,marginBottom:10,fontSize:'var(--text-body-lg)'}},'Phone Number'),
React.createElement('div',{style:{fontSize:'var(--text-body)',opacity:.85}},'+44 7557 145463')),
React.createElement('div',null,React.createElement('div',{style:{fontWeight:700,marginBottom:10,fontSize:'var(--text-body-lg)'}},'Email'),
React.createElement('a',{href:'mailto:alicejulia.ugc@gmail.com',style:{fontSize:'var(--text-body)',color:'var(--ivory)',opacity:.85}},'alicejulia.ugc@gmail.com'))
)
)
),
React.createElement(Reveal,{delay:120},
React.createElement('div',{style:{aspectRatio:'4/5',width:'100%'}},
React.createElement('image-slot',{id:'contact-portrait',shape:'rounded',radius:'20',style:{width:'100%',height:'100%'},placeholder:'Portrait photo'})
)
)
),
React.createElement('div',{style:{borderTop:'1px solid rgba(246,241,234,.15)',padding:'var(--space-5) var(--content-pad)',display:'flex',justifyContent:'center',gap:36}},
React.createElement(NavLink,{dark:true,href:'#about'},'About'),
React.createElement(NavLink,{dark:true,href:'#portfolio'},'Portfolio'),
React.createElement(NavLink,{dark:true,href:'#contact'},'Contact')
)
);
}
window.ContactFooter=ContactFooter;
