"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7035],{9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(85893),s=n(11151);const a={},i="Using AutoGen Studio",r={id:"autogen-studio/usage",title:"Using AutoGen Studio",description:"AutoGen Studio supports the declarative creation of an agent workflow and tasks can be specified and run in a chat interface for the agents to complete. The expected usage behavior is that developers can create skills and models, attach them to agents, and compose agents into workflows that can be tested interactively in the chat interface.",source:"@site/docs/autogen-studio/usage.md",sourceDirName:"autogen-studio",slug:"/autogen-studio/usage",permalink:"/autogen/docs/autogen-studio/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/autogen-studio/usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoGen Studio - Getting Started",permalink:"/autogen/docs/autogen-studio/getting-started"},next:{title:"AutoGen Studio FAQs",permalink:"/autogen/docs/autogen-studio/faqs"}},l={},d=[{value:"Building an Agent Workflow",id:"building-an-agent-workflow",level:2},{value:"Skills",id:"skills",level:3},{value:"Models",id:"models",level:3},{value:"Agents",id:"agents",level:3},{value:"Workflows",id:"workflows",level:3},{value:"Autonomous Chat :",id:"autonomous-chat-",level:4},{value:"Sequential Chat",id:"sequential-chat",level:4},{value:"Testing an Agent Workflow",id:"testing-an-agent-workflow",level:2},{value:"Exporting Agent Workflows",id:"exporting-agent-workflows",level:2},{value:"Export Workflow",id:"export-workflow",level:3},{value:"Using AutoGen Studio Workflows in a Python Application",id:"using-autogen-studio-workflows-in-a-python-application",level:3},{value:"Deploying AutoGen Studio Workflows as APIs",id:"deploying-autogen-studio-workflows-as-apis",level:3}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"using-autogen-studio",children:"Using AutoGen Studio"}),"\n",(0,o.jsxs)(t.p,{children:["AutoGen Studio supports the declarative creation of an agent workflow and tasks can be specified and run in a chat interface for the agents to complete. The expected usage behavior is that developers can create skills and models, ",(0,o.jsx)(t.em,{children:"attach"})," them to agents, and compose agents into workflows that can be tested interactively in the chat interface."]}),"\n",(0,o.jsx)(t.h2,{id:"building-an-agent-workflow",children:"Building an Agent Workflow"}),"\n",(0,o.jsx)(t.p,{children:"AutoGen Studio implements several entities that are ultimately composed into a workflow."}),"\n",(0,o.jsx)(t.h3,{id:"skills",children:"Skills"}),"\n",(0,o.jsxs)(t.p,{children:["A skill is a python function that implements the solution to a task. In general, a good skill has a descriptive name (e.g. generate",(0,o.jsx)(t.em,{children:"images), extensive docstrings and good defaults (e.g., writing out files to disk for persistence and reuse). Skills can be _associated with"})," or ",(0,o.jsx)(t.em,{children:"attached to"})," agent specifications."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Skill Interface",src:n(40992).Z+"",width:"1741",height:"994"})}),"\n",(0,o.jsx)(t.h3,{id:"models",children:"Models"}),"\n",(0,o.jsx)(t.p,{children:"A model refers to the configuration of an LLM. Similar to skills, a model can be attached to an agent specification.\nThe AutoGen Studio interface supports multiple model types including OpenAI models (and any other model endpoint provider that supports the OpenAI endpoint specification), Azure OpenAI models and Gemini Models."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"AutoGen Studio Create new model",src:n(28135).Z+"",width:"1592",height:"912"}),"\n",(0,o.jsx)(t.img,{alt:"AutoGen Studio Create new model",src:n(3142).Z+"",width:"1591",height:"910"})]}),"\n",(0,o.jsx)(t.h3,{id:"agents",children:"Agents"}),"\n",(0,o.jsxs)(t.p,{children:["An agent entity declaratively specifies properties for an AutoGen agent (mirrors most but not all of the members of a base AutoGen Conversable agent class). Currently ",(0,o.jsx)(t.code,{children:"UserProxyAgent"})," and ",(0,o.jsx)(t.code,{children:"AssistantAgent"})," and ",(0,o.jsx)(t.code,{children:"GroupChat"})," agent abstractions are supported."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"AutoGen Studio Create new agent",src:n(34824).Z+"",width:"1738",height:"994"}),"\n",(0,o.jsx)(t.img,{alt:"AutoGen Studio Createan assistant agent",src:n(76371).Z+"",width:"1592",height:"912"})]}),"\n",(0,o.jsxs)(t.p,{children:["Once agents have been created, existing models or skills can be ",(0,o.jsx)(t.em,{children:"added"})," to the agent."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Add skills and models to agent",src:n(77773).Z+"",width:"1591",height:"912"})}),"\n",(0,o.jsx)(t.h3,{id:"workflows",children:"Workflows"}),"\n",(0,o.jsx)(t.p,{children:"An agent workflow is a specification of a set of agents (team of agents) that can work together to accomplish a task. AutoGen Studio supports two types of high level workflow patterns:"}),"\n",(0,o.jsx)(t.h4,{id:"autonomous-chat-",children:"Autonomous Chat :"}),"\n",(0,o.jsxs)(t.p,{children:["This workflow implements a paradigm where agents are defined and a chat is initiated between the agents to accomplish a task. AutoGen simplifies this into defining an ",(0,o.jsx)(t.code,{children:"initiator"})," agent and a ",(0,o.jsx)(t.code,{children:"receiver"})," agent where the receiver agent is selected from a list of previously created agents. Note that when the receiver is a ",(0,o.jsx)(t.code,{children:"GroupChat"})," agent (i.e., contains multiple agents), the communication pattern between those agents is determined by the ",(0,o.jsx)(t.code,{children:"speaker_selection_method"})," parameter in the ",(0,o.jsx)(t.code,{children:"GroupChat"})," agent configuration."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Autonomous Chat Workflow",src:n(32010).Z+"",width:"1591",height:"909"})}),"\n",(0,o.jsx)(t.h4,{id:"sequential-chat",children:"Sequential Chat"}),"\n",(0,o.jsxs)(t.p,{children:["This workflow allows users to specify a list of ",(0,o.jsx)(t.code,{children:"AssistantAgent"})," agents that are executed in sequence to accomplish a task. The runtime behavior here follows the following pattern: at each step, each ",(0,o.jsx)(t.code,{children:"AssistantAgent"})," is ",(0,o.jsx)(t.em,{children:"paired"})," with a ",(0,o.jsx)(t.code,{children:"UserProxyAgent"})," and chat initiated between this pair to process the input task. The result of this exchange is summarized and provided to the next ",(0,o.jsx)(t.code,{children:"AssistantAgent"})," which is also paired with a ",(0,o.jsx)(t.code,{children:"UserProxyAgent"})," and their summarized result is passed to the next ",(0,o.jsx)(t.code,{children:"AssistantAgent"})," in the sequence. This continues until the last ",(0,o.jsx)(t.code,{children:"AssistantAgent"})," in the sequence is reached."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Sequential Workflow",src:n(4385).Z+"",width:"1589",height:"911"})}),"\n",(0,o.jsx)(t.h2,{id:"testing-an-agent-workflow",children:"Testing an Agent Workflow"}),"\n",(0,o.jsx)(t.p,{children:"AutoGen Studio allows users to interactively test workflows on tasks and review resulting artifacts (such as images, code, and documents)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Test Workflow",src:n(6879).Z+"",width:"1772",height:"994"})}),"\n",(0,o.jsx)(t.p,{children:"Users can also review the \u201cinner monologue\u201d of agent workflows as they address tasks, and view profiling information such as costs associated with the run (such as number of turns, number of tokens etc.), and agent actions (such as whether tools were called and the outcomes of code execution)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Profile Workflow Results",src:n(65922).Z+"",width:"1770",height:"994"})}),"\n",(0,o.jsx)(t.h2,{id:"exporting-agent-workflows",children:"Exporting Agent Workflows"}),"\n",(0,o.jsx)(t.p,{children:"Users can download the skills, agents, and workflow configurations they create as well as share and reuse these artifacts. AutoGen Studio also offers a seamless process to export workflows and deploy them as application programming interfaces (APIs) that can be consumed in other applications deploying workflows as APIs."}),"\n",(0,o.jsx)(t.h3,{id:"export-workflow",children:"Export Workflow"}),"\n",(0,o.jsx)(t.p,{children:"AutoGen Studio allows you to export a selected workflow as a JSON configuration file."}),"\n",(0,o.jsx)(t.p,{children:"Build -> Workflows -> (On workflow card) -> Export"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AutoGen Studio Export Workflow",src:n(92907).Z+"",width:"1983",height:"825"})}),"\n",(0,o.jsx)(t.h3,{id:"using-autogen-studio-workflows-in-a-python-application",children:"Using AutoGen Studio Workflows in a Python Application"}),"\n",(0,o.jsxs)(t.p,{children:["An exported workflow can be easily integrated into any Python application using the ",(0,o.jsx)(t.code,{children:"WorkflowManager"})," class with just two lines of code. Underneath, the WorkflowManager rehydrates the workflow specification into AutoGen agents that are subsequently used to address tasks."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'\nfrom autogenstudio import WorkflowManager\n# load workflow from exported json workflow file.\nworkflow_manager = WorkflowManager(workflow="path/to/your/workflow_.json")\n\n# run the workflow on a task\ntask_query = "What is the height of the Eiffel Tower?. Dont write code, just respond to the question."\nworkflow_manager.run(message=task_query)\n\n'})}),"\n",(0,o.jsx)(t.h3,{id:"deploying-autogen-studio-workflows-as-apis",children:"Deploying AutoGen Studio Workflows as APIs"}),"\n",(0,o.jsx)(t.p,{children:"The workflow can be launched as an API endpoint from the command line using the autogenstudio commandline tool."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"autogenstudio serve --workflow=workflow.json --port=5000\n"})}),"\n",(0,o.jsx)(t.p,{children:"Similarly, the workflow launch command above can be wrapped into a Dockerfile that can be deployed on cloud services like Azure Container Apps or Azure Web Apps."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},76371:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/agent_groupchat-52e1d67aef78ad6e3aa02689ce8f2c63.png"},34824:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/agent_new-8638ea8bc17c663f95c90bbfd8253e84.png"},77773:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/agent_skillsmodel-3bd69bd745f538017d91498431a00aec.png"},28135:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/model_new-86c7f54178992d2774a601353adeae63.png"},3142:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/model_openai-dcaf2f96cff47abc06f55804010c1ea5.png"},40992:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/skill-ab4a73e0fc9f52cc5546adf6279d99e2.png"},32010:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow_chat-14e75d3570c8289ea15c67bdbe5be91a.png"},92907:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow_export-93b41c1642014d9bf4561cb0fbeaa678.png"},65922:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow_profile-f63a85c82304b7fa154d817e85b53a7e.png"},4385:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow_sequential-816b5077a35afaaf0e4fc565e7e4a981.png"},6879:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow_test-e0d38515e6f3a5f761685fa03a4df06b.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);