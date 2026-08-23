function AboutContent(){
const {SectionHeading,IconListItem,QuoteBlock,Tag}=window.AliceJuliaDesignSystem_3111c6;
const optimised=[
['tiktok','TikTok','Short-form, trend-native'],
['instagram','Instagram','Visual storytelling & discovery'],
['youtube','YouTube Shorts','Hook-driven, retention-focused'],
['pinterest','Pinterest','Search-friendly, evergreen reach']
];
const builtFor=[
'Conversion-focused creative','Scroll-stopping hooks','Platform-native execution','Audience connection & trust'
];
return React.createElement(React.Fragment,null,
React.createElement('section',{id:'about',style:{background:'var(--ink)',color:'var(--ivory)',padding:'var(--space-9) var(--content-pad)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}},
React.createElement(Reveal,null,
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:18,fontSize:'var(--text-body-lg)',lineHeight:'var(--leading-body)',opacity:.92}},
React.createElement('p',{style:{margin:0}},"Hi, I'm Alice — a UGC creator who builds content that feels native to the platform it's on. With a background in digital marketing and paid advertising, I know what a hook needs to do in the first two seconds, and how to create content that performs whether it's running organically or behind paid spend."),
React.createElement('p',{style:{margin:0}},"I create high-performing UGC across tech and SaaS, fintech, lifestyle, and beauty/self-care — bringing the same strategic thinking to a software demo as I would a skincare routine: what's the hook, what's the proof point, and what actually makes someone stop scrolling. That paid advertising background means every piece of content is built with more than aesthetics in mind — I'm thinking about engagement, conversion, and what a brand's performance team needs it to do.")
)
),
React.createElement(Reveal,{delay:120},
React.createElement(SectionHeading,{dark:true,titleSize:'clamp(2.8rem,5.2vw,4.3rem)',title:React.createElement(React.Fragment,null,'About',React.createElement('br'),React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:14}},React.createElement('span',{style:{width:14,height:14,borderRadius:'50%',background:'var(--accent)'}}),'Me'))})
)
)
),
React.createElement('section',{style:{background:'var(--ivory)',padding:'var(--space-9) var(--content-pad)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto'}},
React.createElement(Reveal,null,React.createElement(SectionHeading,{eyebrow:'Why UGC',title:'Content built with intention.'})),
React.createElement('div',{style:{display:'grid',gridTemplateColumns:'1fr 1px 1fr',gap:'var(--space-8)',marginTop:'var(--space-8)'}},
React.createElement(Reveal,{delay:80},
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-5)'}},
React.createElement(Tag,null,'Content optimised for'),
optimised.map(([slug,title,desc])=>React.createElement(IconListItem,{key:slug,icon:`https://cdn.simpleicons.org/${slug}/221b18`,title,description:desc}))
)
),
React.createElement('div',{style:{background:'var(--border-default)'}}),
React.createElement(Reveal,{delay:160},
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-5)'}},
React.createElement(Tag,{variant:'solid'},'Content built for'),
builtFor.map((t,i)=>React.createElement(IconListItem,{key:i,icon:React.createElement('span',{style:{color:'var(--ivory)',fontWeight:800}},'✓'),title:t}))
)
)
),
React.createElement(Reveal,{delay:220,style:{marginTop:'var(--space-9)'}},
React.createElement(QuoteBlock,{quote:'Creating engaging, native content that converts.',body:"In today's content landscape, attention is currency, and not all content earns it. High-performing UGC is designed with intention: to stop the scroll, build trust, and drive action. I create content that sits seamlessly within the platform while working hard behind the scenes, combining creative execution with a performance-led approach."})
)
)
)
);
}
window.AboutContent=AboutContent;
