"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3779],{79307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(85893),c=t(11151);const o={sidebar_label:"embedded_ipython_code_executor",title:"coding.jupyter.embedded_ipython_code_executor"},d=void 0,s={id:"reference/coding/jupyter/embedded_ipython_code_executor",title:"coding.jupyter.embedded_ipython_code_executor",description:"EmbeddedIPythonCodeExecutor",source:"@site/docs/reference/coding/jupyter/embedded_ipython_code_executor.md",sourceDirName:"reference/coding/jupyter",slug:"/reference/coding/jupyter/embedded_ipython_code_executor",permalink:"/autogen/docs/reference/coding/jupyter/embedded_ipython_code_executor",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/coding/jupyter/embedded_ipython_code_executor.md",tags:[],version:"current",frontMatter:{sidebar_label:"embedded_ipython_code_executor",title:"coding.jupyter.embedded_ipython_code_executor"},sidebar:"referenceSideBar",previous:{title:"docker_jupyter_server",permalink:"/autogen/docs/reference/coding/jupyter/docker_jupyter_server"},next:{title:"jupyter_client",permalink:"/autogen/docs/reference/coding/jupyter/jupyter_client"}},i={},l=[{value:"EmbeddedIPythonCodeExecutor",id:"embeddedipythoncodeexecutor",level:2},{value:"code_extractor",id:"code_extractor",level:3},{value:"execute_code_blocks",id:"execute_code_blocks",level:3},{value:"restart",id:"restart",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"embeddedipythoncodeexecutor",children:"EmbeddedIPythonCodeExecutor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class EmbeddedIPythonCodeExecutor(BaseModel)\n"})}),"\n",(0,r.jsx)(n.p,{children:"(Experimental) A code executor class that executes code statefully using an embedded\nIPython kernel managed by this class."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This will execute LLM generated code on the local machine."})}),"\n",(0,r.jsxs)(n.p,{children:["Each execution is stateful and can access variables created from previous\nexecutions in the same session. The kernel must be installed before using\nthis class. The kernel can be installed using the following command:\n",(0,r.jsx)(n.code,{children:"python -m ipykernel install --user --name {kernel_name}"}),"\nwhere ",(0,r.jsx)(n.code,{children:"kernel_name"})," is the name of the kernel to install."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"timeout"})," ",(0,r.jsx)(n.em,{children:"int"})," - The timeout for code execution, by default 60."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kernel_name"})," ",(0,r.jsx)(n.em,{children:"str"}),' - The kernel name to use. Make sure it is installed.\nBy default, it is "python3".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"output_dir"})," ",(0,r.jsx)(n.em,{children:"str"}),' - The directory to save output files, by default ".".']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"code_extractor",children:"code_extractor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@property\ndef code_extractor() -> CodeExtractor\n"})}),"\n",(0,r.jsx)(n.p,{children:"(Experimental) Export a code extractor that can be used by an agent."}),"\n",(0,r.jsx)(n.h3,{id:"execute_code_blocks",children:"execute_code_blocks"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def execute_code_blocks(code_blocks: List[CodeBlock]) -> IPythonCodeResult\n"})}),"\n",(0,r.jsx)(n.p,{children:"(Experimental) Execute a list of code blocks and return the result."}),"\n",(0,r.jsxs)(n.p,{children:["This method executes a list of code blocks as cells in an IPython kernel\nmanaged by this class.\nSee: ",(0,r.jsx)(n.a,{href:"https://jupyter-client.readthedocs.io/en/stable/messaging.html",children:"https://jupyter-client.readthedocs.io/en/stable/messaging.html"}),"\nfor the message protocol."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"code_blocks"})," ",(0,r.jsx)(n.em,{children:"List[CodeBlock]"})," - A list of code blocks to execute."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IPythonCodeResult"})," - The result of the code execution."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"restart",children:"restart"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def restart() -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"(Experimental) Restart a new session."})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var r=t(67294);const c={},o=r.createContext(c);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);