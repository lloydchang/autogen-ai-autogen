"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2490],{70332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(85893),r=t(11151);const a={sidebar_label:"multimodal_conversable_agent",title:"agentchat.contrib.multimodal_conversable_agent"},i=void 0,l={id:"reference/agentchat/contrib/multimodal_conversable_agent",title:"agentchat.contrib.multimodal_conversable_agent",description:"MultimodalConversableAgent",source:"@site/docs/reference/agentchat/contrib/multimodal_conversable_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/multimodal_conversable_agent",permalink:"/autogen/docs/reference/agentchat/contrib/multimodal_conversable_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/agentchat/contrib/multimodal_conversable_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"multimodal_conversable_agent",title:"agentchat.contrib.multimodal_conversable_agent"},sidebar:"referenceSideBar",previous:{title:"math_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/math_user_proxy_agent"},next:{title:"qdrant_retrieve_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent"}},o={},c=[{value:"MultimodalConversableAgent",id:"multimodalconversableagent",level:2},{value:"__init__",id:"__init__",level:3},{value:"update_system_message",id:"update_system_message",level:3},{value:"generate_oai_reply",id:"generate_oai_reply",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"multimodalconversableagent",children:"MultimodalConversableAgent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MultimodalConversableAgent(ConversableAgent)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(name: str,\n             system_message: Optional[Union[str, List]] = DEFAULT_LMM_SYS_MSG,\n             is_termination_msg: str = None,\n             *args,\n             **kwargs)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.em,{children:"str"})," - agent name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"system_message"})," ",(0,s.jsx)(n.em,{children:"str"})," - system message for the OpenAIWrapper inference.\nPlease override this attribute if you want to reprogram the agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"**kwargs"})," ",(0,s.jsx)(n.em,{children:"dict"})," - Please refer to other kwargs in\n",(0,s.jsx)(n.a,{href:"../conversable_agent#__init__",children:"ConversableAgent"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"update_system_message",children:"update_system_message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def update_system_message(system_message: Union[Dict, List, str])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Update the system message."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"system_message"})," ",(0,s.jsx)(n.em,{children:"str"})," - system message for the OpenAIWrapper inference."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"generate_oai_reply",children:"generate_oai_reply"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def generate_oai_reply(\n    messages: Optional[List[Dict]] = None,\n    sender: Optional[Agent] = None,\n    config: Optional[OpenAIWrapper] = None\n) -> Tuple[bool, Union[str, Dict, None]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a reply using autogen.oai."})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);