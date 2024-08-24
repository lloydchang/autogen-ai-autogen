"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2408],{49717:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var l=s(85893),i=s(11151);const t={sidebar_label:"client_utils",title:"oai.client_utils"},a=void 0,r={id:"reference/oai/client_utils",title:"oai.client_utils",description:"Utilities for client classes",source:"@site/docs/reference/oai/client_utils.md",sourceDirName:"reference/oai",slug:"/reference/oai/client_utils",permalink:"/autogen/docs/reference/oai/client_utils",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/oai/client_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"client_utils",title:"oai.client_utils"},sidebar:"referenceSideBar",previous:{title:"client",permalink:"/autogen/docs/reference/oai/client"},next:{title:"cohere",permalink:"/autogen/docs/reference/oai/cohere"}},o={},d=[{value:"validate_parameter",id:"validate_parameter",level:3},{value:"should_hide_tools",id:"should_hide_tools",level:3}];function c(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Utilities for client classes"}),"\n",(0,l.jsx)(n.h3,{id:"validate_parameter",children:"validate_parameter"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def validate_parameter(params: Dict[str, Any], param_name: str,\n                       allowed_types: Tuple, allow_None: bool,\n                       default_value: Any, numerical_bound: Tuple,\n                       allowed_values: list) -> Any\n"})}),"\n",(0,l.jsx)(n.p,{children:"Validates a given config parameter, checking its type, values, and setting defaults"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"params"})," ",(0,l.jsx)(n.em,{children:"Dict[str, Any]"})," - Dictionary containing parameters to validate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"param_name"})," ",(0,l.jsx)(n.em,{children:"str"})," - The name of the parameter to validate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowed_types"})," ",(0,l.jsx)(n.em,{children:"Tuple"})," - Tuple of acceptable types for the parameter."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allow_None"})," ",(0,l.jsx)(n.em,{children:"bool"})," - Whether the parameter can be ",(0,l.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"default_value"})," ",(0,l.jsx)(n.em,{children:"Any"})," - The default value to use if the parameter is invalid or missing.\nnumerical_bound (Optional[Tuple[Optional[float], Optional[float]]]):\nA tuple specifying the lower and upper bounds for numerical parameters.\nEach bound can be ",(0,l.jsx)(n.code,{children:"None"})," if not applicable."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowed_values"})," ",(0,l.jsx)(n.em,{children:"Optional[List[Any]]"})," - A list of acceptable values for the parameter.\nCan be ",(0,l.jsx)(n.code,{children:"None"})," if no specific values are required."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Any"})," - The validated parameter value or the default value if validation fails."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"TypeError"})," - If ",(0,l.jsx)(n.code,{children:"allowed_values"})," is provided but is not a list."]}),"\n",(0,l.jsx)(n.p,{children:"Example Usage:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'    # Validating a numerical parameter within specific bounds\n    params = {"temperature": 0.5, "safety_model": "Meta-Llama/Llama-Guard-7b"}\n    temperature = validate_parameter(params, "temperature", (int, float), True, 0.7, (0, 1), None)\n    # Result: 0.5\n\n    # Validating a parameter that can be one of a list of allowed values\n    model = validate_parameter(\n    params, "safety_model", str, True, None, None, ["Meta-Llama/Llama-Guard-7b", "Meta-Llama/Llama-Guard-13b"]\n    )\n    # If "safety_model" is missing or invalid in params, defaults to "default"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"should_hide_tools",children:"should_hide_tools"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def should_hide_tools(messages: List[Dict[str, Any]], tools: List[Dict[str,\n                                                                       Any]],\n                      hide_tools_param: str) -> bool\n"})}),"\n",(0,l.jsx)(n.p,{children:"Determines if tools should be hidden. This function is used to hide tools when they have been run, minimising the chance of the LLM choosing them when they shouldn't."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"messages"})," ",(0,l.jsx)(n.em,{children:"List[Dict[str, Any]]"})," - List of messages"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"tools"})," ",(0,l.jsx)(n.em,{children:"List[Dict[str, Any]]"})," - List of tools"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hide_tools_param"})," ",(0,l.jsx)(n.em,{children:"str"}),' - "hide_tools" parameter value. Can be "if_all_run" (hide tools if all tools have been run), "if_any_run" (hide tools if any of the tools have been run), "never" (never hide tools). Default is "never".']}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"bool"})," - Indicates whether the tools should be excluded from the response create request"]}),"\n",(0,l.jsx)(n.p,{children:"Example Usage:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'    # Validating a numerical parameter within specific bounds\n    messages = params.get("messages", [])\n    tools = params.get("tools", None)\n    hide_tools = should_hide_tools(messages, tools, params["hide_tools"])\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var l=s(67294);const i={},t=l.createContext(i);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);