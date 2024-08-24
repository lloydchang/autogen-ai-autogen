"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4546],{3163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(85893),s=n(11151);const a={sidebar_label:"chat",title:"agentchat.chat"},c=void 0,r={id:"reference/agentchat/chat",title:"agentchat.chat",description:"ChatResult",source:"@site/docs/reference/agentchat/chat.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/chat",permalink:"/autogen/docs/reference/agentchat/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/agentchat/chat.md",tags:[],version:"current",frontMatter:{sidebar_label:"chat",title:"agentchat.chat"},sidebar:"referenceSideBar",previous:{title:"assistant_agent",permalink:"/autogen/docs/reference/agentchat/assistant_agent"},next:{title:"conversable_agent",permalink:"/autogen/docs/reference/agentchat/conversable_agent"}},h={},l=[{value:"ChatResult",id:"chatresult",level:2},{value:"chat_id",id:"chat_id",level:4},{value:"chat_history",id:"chat_history",level:4},{value:"summary",id:"summary",level:4},{value:"cost",id:"cost",level:4},{value:"human_input",id:"human_input",level:4},{value:"initiate_chats",id:"initiate_chats",level:3},{value:"a_initiate_chats",id:"a_initiate_chats",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"chatresult",children:"ChatResult"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"@dataclass\nclass ChatResult()\n"})}),"\n",(0,i.jsx)(t.p,{children:"(Experimental) The result of a chat. Almost certain to be changed."}),"\n",(0,i.jsx)(t.h4,{id:"chat_id",children:"chat_id"}),"\n",(0,i.jsx)(t.p,{children:"chat id"}),"\n",(0,i.jsx)(t.h4,{id:"chat_history",children:"chat_history"}),"\n",(0,i.jsx)(t.p,{children:"The chat history."}),"\n",(0,i.jsx)(t.h4,{id:"summary",children:"summary"}),"\n",(0,i.jsx)(t.p,{children:"A summary obtained from the chat."}),"\n",(0,i.jsx)(t.h4,{id:"cost",children:"cost"}),"\n",(0,i.jsx)(t.p,{children:"The cost of the chat.\nThe value for each usage type is a dictionary containing cost information for that specific type."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'"usage_including_cached_inference": Cost information on the total usage, including the tokens in cached inference.'}),"\n",(0,i.jsx)(t.li,{children:'"usage_excluding_cached_inference": Cost information on the usage of tokens, excluding the tokens in cache. No larger than "usage_including_cached_inference".'}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"human_input",children:"human_input"}),"\n",(0,i.jsx)(t.p,{children:"A list of human input solicited during the chat."}),"\n",(0,i.jsx)(t.h3,{id:"initiate_chats",children:"initiate_chats"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def initiate_chats(chat_queue: List[Dict[str, Any]]) -> List[ChatResult]\n"})}),"\n",(0,i.jsx)(t.p,{children:"Initiate a list of chats."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"chat_queue"})," ",(0,i.jsx)(t.em,{children:"List[Dict]"})," - A list of dictionaries containing the information about the chats."]}),"\n",(0,i.jsxs)(t.p,{children:["Each dictionary should contain the input arguments for\n",(0,i.jsx)(t.a,{href:"/docs/reference/agentchat/conversable_agent#initiate_chat",children:(0,i.jsx)(t.code,{children:"ConversableAgent.initiate_chat"})}),".\nFor example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"sender"'})," - the sender agent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"recipient"'})," - the recipient agent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"clear_history"'})," (bool) - whether to clear the chat history with the agent.\nDefault is True."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"silent"'})," (bool or None) - (Experimental) whether to print the messages in this\nconversation. Default is False."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"cache"'})," (Cache or None) - the cache client to use for this conversation.\nDefault is None."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"max_turns"'})," (int or None) - maximum number of turns for the chat. If None, the chat\nwill continue until a termination condition is met. Default is None."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"summary_method"'}),' (str or callable) - a string or callable specifying the method to get\na summary from the chat. Default is DEFAULT_summary_method, i.e., "last_msg".']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"summary_args"'})," (dict) - a dictionary of arguments to be passed to the summary_method.\nDefault is {}."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"message"'})," (str, callable or None) - if None, input() will be called to get the\ninitial message."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"**context"})," - additional context information to be passed to the chat."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"carryover"'}),' - It can be used to specify the carryover information to be passed\nto this chat. If provided, we will combine this carryover with the "message" content when\ngenerating the initial chat message in ',(0,i.jsx)(t.code,{children:"generate_init_message"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"finished_chat_indexes_to_exclude_from_carryover"'})," - It can be used by specifying a list of indexes of the finished_chats list,\nfrom which to exclude the summaries for carryover. If 'finished_chat_indexes_to_exclude_from_carryover' is not provided or an empty list,\nthen summary from all the finished chats will be taken."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"(list)"})," - a list of ChatResult objects corresponding to the finished chats in the chat_queue."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"a_initiate_chats",children:"a_initiate_chats"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"async def a_initiate_chats(\n        chat_queue: List[Dict[str, Any]]) -> Dict[int, ChatResult]\n"})}),"\n",(0,i.jsx)(t.p,{children:"(async) Initiate a list of chats."}),"\n",(0,i.jsx)(t.p,{children:"args:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Please refer to ",(0,i.jsx)(t.code,{children:"initiate_chats"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"returns:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"(Dict): a dict of ChatId: ChatResult corresponding to the finished chats in the chat_queue."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var i=n(67294);const s={},a=i.createContext(s);function c(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);