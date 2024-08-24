"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2627],{86942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const l={sidebar_label:"qdrant",title:"agentchat.contrib.vectordb.qdrant"},c=void 0,r={id:"reference/agentchat/contrib/vectordb/qdrant",title:"agentchat.contrib.vectordb.qdrant",description:"FastEmbedEmbeddingFunction",source:"@site/docs/reference/agentchat/contrib/vectordb/qdrant.md",sourceDirName:"reference/agentchat/contrib/vectordb",slug:"/reference/agentchat/contrib/vectordb/qdrant",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/qdrant",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/agentchat/contrib/vectordb/qdrant.md",tags:[],version:"current",frontMatter:{sidebar_label:"qdrant",title:"agentchat.contrib.vectordb.qdrant"},sidebar:"referenceSideBar",previous:{title:"pgvectordb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/pgvectordb"},next:{title:"utils",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/utils"}},o={},d=[{value:"FastEmbedEmbeddingFunction",id:"fastembedembeddingfunction",level:2},{value:"__init__",id:"__init__",level:3},{value:"QdrantVectorDB",id:"qdrantvectordb",level:2},{value:"__init__",id:"__init__-1",level:3},{value:"create_collection",id:"create_collection",level:3},{value:"get_collection",id:"get_collection",level:3},{value:"delete_collection",id:"delete_collection",level:3},{value:"insert_docs",id:"insert_docs",level:3},{value:"delete_docs",id:"delete_docs",level:3},{value:"retrieve_docs",id:"retrieve_docs",level:3},{value:"get_docs_by_ids",id:"get_docs_by_ids",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",model:"model",org:"org",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"fastembedembeddingfunction",children:"FastEmbedEmbeddingFunction"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class FastEmbedEmbeddingFunction(EmbeddingFunction)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Embedding function implementation using FastEmbed - ",(0,s.jsx)(n.a,{href:"https://qdrant.github.io/fastembed",children:"https://qdrant.github.io/fastembed"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def __init__(model_name: str = "BAAI/bge-small-en-v1.5",\n             batch_size: int = 256,\n             cache_dir: Optional[str] = None,\n             threads: Optional[int] = None,\n             parallel: Optional[int] = None,\n             **kwargs)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Initialize fastembed.TextEmbedding."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model_name"})," ",(0,s.jsx)(n.em,{children:"str"})," - The name of the model to use. Defaults to ",(0,s.jsx)(n.code,{children:'"BAAI/bge-small-en-v1.5"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"batch_size"})," ",(0,s.jsx)(n.em,{children:"int"})," - Batch size for encoding. Higher values will use more memory, but be faster.                                        Defaults to 256."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache_dir"})," ",(0,s.jsx)(n.em,{children:"str, optional"})," - The path to the model cache directory.                                       Can also be set using the ",(0,s.jsx)(n.code,{children:"FASTEMBED_CACHE_PATH"})," env variable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"threads"})," ",(0,s.jsx)(n.em,{children:"int, optional"})," - The number of threads single onnxruntime session can use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parallel"})," ",(0,s.jsx)(n.em,{children:"int, optional"})," - If ",(0,s.jsx)(n.code,{children:">1"}),", data-parallel encoding will be used, recommended for large datasets.                                      If ",(0,s.jsx)(n.code,{children:"0"}),", use all available cores.                                      If ",(0,s.jsx)(n.code,{children:"None"}),", don't use data-parallel processing, use default onnxruntime threading.                                      Defaults to None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"**kwargs"})," - Additional options to pass to fastembed.TextEmbedding"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValueError"})," - If the model_name is not in the format ",(0,s.jsxs)(n.org,{children:["/",(0,s.jsx)(n.model,{children:" e.g. BAAI/bge-small-en-v1.5."})]})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"qdrantvectordb",children:"QdrantVectorDB"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class QdrantVectorDB(VectorDB)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A vector database implementation that uses Qdrant as the backend."}),"\n",(0,s.jsx)(n.h3,{id:"__init__-1",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def __init__(*,\n             client=None,\n             embedding_function: EmbeddingFunction = None,\n             content_payload_key: str = "_content",\n             metadata_payload_key: str = "_metadata",\n             collection_options: dict = {},\n             **kwargs) -> None\n'})}),"\n",(0,s.jsx)(n.p,{children:"Initialize the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"})," - qdrant_client.QdrantClient | An instance of QdrantClient."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedding_function"})," - Callable | The embedding function used to generate the vector representation\nof the documents. Defaults to FastEmbedEmbeddingFunction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_options"})," - dict | The options for creating the collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create_collection",children:"create_collection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def create_collection(collection_name: str,\n                      overwrite: bool = False,\n                      get_or_create: bool = True) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a collection in the vector database.\nCase 1. if the collection does not exist, create the collection.\nCase 2. the collection exists, if overwrite is True, it will overwrite the collection.\nCase 3. the collection exists and overwrite is False, if get_or_create is True, it will get the collection,\notherwise it raise a ValueError."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"overwrite"})," - bool | Whether to overwrite the collection if it exists. Default is False."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"get_or_create"})," - bool | Whether to get the collection if it exists. Default is True."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Any | The collection object."}),"\n",(0,s.jsx)(n.h3,{id:"get_collection",children:"get_collection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_collection(collection_name: str = None)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the collection from the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Any | The collection object."}),"\n",(0,s.jsx)(n.h3,{id:"delete_collection",children:"delete_collection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def delete_collection(collection_name: str) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete the collection from the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Any"}),"\n",(0,s.jsx)(n.h3,{id:"insert_docs",children:"insert_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def insert_docs(docs: List[Document],\n                collection_name: str = None,\n                upsert: bool = False) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Insert documents into the collection of the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents. Each document is a TypedDict ",(0,s.jsx)(n.code,{children:"Document"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upsert"})," - bool | Whether to update the document if it exists. Default is False."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"delete_docs",children:"delete_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def delete_docs(ids: List[ItemID],\n                collection_name: str = None,\n                **kwargs) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete documents from the collection of the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. Each id is a typed ",(0,s.jsx)(n.code,{children:"ItemID"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"retrieve_docs",children:"retrieve_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def retrieve_docs(queries: List[str],\n                  collection_name: str = None,\n                  n_results: int = 10,\n                  distance_threshold: float = 0,\n                  **kwargs) -> QueryResults\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the queries."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"queries"})," - List[str] | A list of queries. Each query is a string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n_results"})," - int | The number of relevant documents to return. Default is 10."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"distance_threshold"})," - float | The threshold for the distance score, only distance smaller than it will be\nreturned. Don't filter with it if < 0. Default is 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"QueryResults | The query results. Each query result is a list of list of tuples containing the document and\nthe distance."}),"\n",(0,s.jsx)(n.h3,{id:"get_docs_by_ids",children:"get_docs_by_ids"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_docs_by_ids(ids: List[ItemID] = None,\n                    collection_name: str = None,\n                    include=True,\n                    **kwargs) -> List[Document]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the ids."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. If None, will return all the documents. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"include"}),' - List[str] | The fields to include. Default is True.\nIf None, will include ["metadatas", "documents"], ids will always be included.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"List[Document] | The results."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(67294);const i={},l=s.createContext(i);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);