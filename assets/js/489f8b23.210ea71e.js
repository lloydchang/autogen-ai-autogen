"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8762],{36797:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(85893),i=s(11151);const o={},r="Tests",a={id:"contributor-guide/tests",title:"Tests",description:"Tests are automatically run via GitHub actions. There are two workflows:",source:"@site/docs/contributor-guide/tests.md",sourceDirName:"contributor-guide",slug:"/contributor-guide/tests",permalink:"/autogen/docs/contributor-guide/tests",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/contributor-guide/tests.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Pre-commit",permalink:"/autogen/docs/contributor-guide/pre-commit"},next:{title:"Research",permalink:"/autogen/docs/Research"}},l={},c=[{value:"Running tests locally",id:"running-tests-locally",level:2},{value:"Skip flags for tests",id:"skip-flags-for-tests",level:2},{value:"Coverage",id:"coverage",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tests",children:"Tests"}),"\n",(0,n.jsx)(t.p,{children:"Tests are automatically run via GitHub actions. There are two workflows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/build.yml",children:"build.yml"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/openai.yml",children:"openai.yml"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The first workflow is required to pass for all PRs (and it doesn't do any OpenAI calls). The second workflow is required for changes that affect the OpenAI tests (and does actually call LLM). The second workflow requires approval to run. When writing tests that require OpenAI calls, please use ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/b1adac515931bf236ac59224269eeec683a162ba/test/oai/test_client.py#L19",children:(0,n.jsx)(t.code,{children:"pytest.mark.skipif"})})," to make them run in only when ",(0,n.jsx)(t.code,{children:"openai"})," package is installed. If additional dependency for this test is required, install the dependency in the corresponding python version in ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/openai.yml",children:"openai.yml"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Make sure all tests pass, this is required for ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/build.yml",children:"build.yml"})," checks to pass"]}),"\n",(0,n.jsx)(t.h2,{id:"running-tests-locally",children:"Running tests locally"}),"\n",(0,n.jsx)(t.p,{children:"To run tests, install the [test] option:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'pip install -e."[test]"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Then you can run the tests from the ",(0,n.jsx)(t.code,{children:"test"})," folder using the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pytest test\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Tests for the ",(0,n.jsx)(t.code,{children:"autogen.agentchat.contrib"})," module may be skipped automatically if the\nrequired dependencies are not installed. Please consult the documentation for\neach contrib module to see what dependencies are required."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/contributing.md#testing",children:"here"})," for how to run notebook tests."]}),"\n",(0,n.jsx)(t.h2,{id:"skip-flags-for-tests",children:"Skip flags for tests"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--skip-openai"})," for skipping tests that require access to OpenAI services."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--skip-docker"})," for skipping tests that explicitly use docker"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--skip-redis"})," for skipping tests that require a Redis server"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For example, the following command will skip tests that require access to\nOpenAI and docker services:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pytest test --skip-openai --skip-docker\n"})}),"\n",(0,n.jsx)(t.h2,{id:"coverage",children:"Coverage"}),"\n",(0,n.jsx)(t.p,{children:"Any code you commit should not decrease coverage. To ensure your code maintains or increases coverage, use the following commands after installing the required test dependencies:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'pip install -e ."[test]"\n\npytest test --cov-report=html\n'})}),"\n",(0,n.jsx)(t.p,{children:"Pytest generated a code coverage report and created a htmlcov directory containing an index.html file and other related files. Open index.html in any web browser to visualize and navigate through the coverage data interactively. This interactive visualization allows you to identify uncovered lines and review coverage statistics for individual files."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(67294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);