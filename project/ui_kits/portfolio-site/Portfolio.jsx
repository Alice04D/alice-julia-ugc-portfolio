function Portfolio(){
const {SectionHeading,PhoneFrame,Tag}=window.AliceJuliaDesignSystem_3111c6;
function Row({items}){
return React.createElement('div',{style:{display:'flex',gap:'var(--space-8)',flexWrap:'wrap',justifyContent:'center'}},
items.map((cap,i)=>React.createElement(Reveal,{key:i,delay:i*100},
React.createElement(PhoneFrame,{width:240,caption:cap},
React.createElement('image-slot',{id:`ugc-${cap.replace(/\s+/g,'-').toLowerCase()}`,style:{width:'100%',height:'100%'},placeholder:'UGC video'})
)))
);
}
return React.createElement(React.Fragment,null,
React.createElement('section',{id:'portfolio',style:{background:'var(--ink)',color:'var(--ivory)',padding:'var(--space-9) var(--content-pad)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto'}},
React.createElement(Reveal,null,React.createElement(SectionHeading,{dark:true,eyebrow:'Portfolio',title:'UGC Examples'})),
React.createElement('p',{style:{fontSize:'var(--text-small)',opacity:.6,marginTop:14,fontStyle:'italic'}},'Example content created to showcase style and process — not paid brand partnerships.'),
React.createElement('div',{style:{marginTop:'var(--space-8)',display:'flex',flexDirection:'column',gap:'var(--space-7)'}},
React.createElement('div',null,
React.createElement(Tag,null,'Beauty'),
React.createElement('div',{style:{marginTop:'var(--space-5)'}},React.createElement(Row,{items:['Chāmpo Pitta Growth Serum','Medik8 Crystal Retinal','Maybelline Grippy Serum & Grippy Setting Mist']}))
),
React.createElement('div',null,
React.createElement(Tag,null,'Tech / SaaS'),
React.createElement('div',{style:{marginTop:'var(--space-5)'}},React.createElement(Row,{items:['TopCashback','Mazuma Mobile','Canva']}))
)
)
)
),
React.createElement('section',{style:{background:'var(--ivory)',padding:'var(--space-9) var(--content-pad)'}},
React.createElement('div',{style:{maxWidth:'var(--content-max)',margin:'0 auto'}},
React.createElement(Reveal,null,React.createElement(SectionHeading,{eyebrow:'Portfolio',title:'Case Studies'})),
React.createElement('p',{style:{fontSize:'var(--text-small)',color:'var(--text-secondary)',marginTop:14,fontStyle:'italic'}},'Self-initiated concept work for portfolio purposes, not commissioned campaigns.'),
React.createElement('div',{style:{marginTop:'var(--space-8)',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-7)'}},
[['Medik8 Crystal Retinal','The concept was built around introducing Medik8 Crystal Retinal as a market-leading, effective but approachable choice when introducing retinal into their skincare routine. Ensuring the content feels authentic and educational while still highlighting the premium positioning of both the product and brand.','Talking-to-camera / Product demo',React.createElement(React.Fragment,null,"Opening with the relatable question, ",React.createElement('i',null,"'Looking to start your retinal journey but don't know where to begin?'")," to immediately address a common pain point for retinal beginners. Pairing this with a visual hook , looking up at an overlay image of all progressive strengths available and deciding on which one is for me, visually reinforces the feeling of choice and uncertainty before introducing a solution.")],
['Mazuma Mobile','Creating a relatable \'declutter and earn\' concept that makes selling an old phone or device feel quick, simple and worthwhile. The video follows the journey from discovering the potential value of an old device, to completing the valuation online and packaging it up to be sent - giving the viewer a clear picture of how easy the process can be.','I used a varied UGC format combining talking-head footage, lifestyle cutaways and a website demonstration. This built a relatable narrative while visually showing how straightforward the Mazuma Mobile process is from start to finish.',React.createElement(React.Fragment,null,"The verbal hook in the opening line, ",React.createElement('i',null,"'That old phone sitting in your drawer could actually be worth something!'")," was designed to create a curiosity loop by introducing the possibility of hidden value without immediately revealing how to access it. This is designed to stop the scroll and encourage viewers to watch on to discover how they could turn an unused device into a little extra cash.")],
['Canva','Positioning Canva as a practice solution for the everyday creative overwhelm that comes with managing multiple projects at once. Rather than focusing solely on the features, I built the concept around a relatable creative mindset and then demonstrated how Canva can support everything from presentations and mood boards to organising ideas.','Combining talking-to-camera footage with a screen-recorded website demonstration to balance personality with platform education.','A relatable verbal hook to demonstrate the pain point of creative overwhelm that comes with managing multiple projects at once.']
].map(([title,ideation,format,hook],i)=>React.createElement(Reveal,{key:i,delay:i*100},
React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:16,textAlign:'center'}},
React.createElement(PhoneFrame,{width:195},React.createElement('image-slot',{id:`case-${i}`,style:{width:'100%',height:'100%'},placeholder:'Case study video'})),
React.createElement('div',null,
React.createElement('div',{style:{fontWeight:800,fontSize:'var(--text-body)'}},title),
React.createElement('div',{style:{fontSize:'var(--text-small)',color:'var(--text-secondary)',marginTop:6}},React.createElement('b',null,'Ideation: '),ideation),
React.createElement('div',{style:{fontSize:'var(--text-small)',color:'var(--text-secondary)'}},React.createElement('b',null,React.createElement('br'),'Format: '),format),
React.createElement('div',{style:{fontSize:'var(--text-small)',color:'var(--text-secondary)'}},React.createElement('b',null,React.createElement('br'),'Hook: '),hook)
)
)
))
)
)
)
);
}
window.Portfolio=Portfolio;
