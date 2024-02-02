"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6621],{5169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(5893),r=t(1151);const i={id:"overview",sidebar_label:"Overview",title:"Overview",slug:"overview"},o="Garnet Cluster Overview",a={id:"cluster/overview",title:"Overview",description:"Garnet cluster provides an easy and scalable way to operate Garnet across multiple nodes.",source:"@site/docs/cluster/overview.md",sourceDirName:"cluster",slug:"/cluster/overview",permalink:"/docs/cluster/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Garnet/tree/main/website/docs/cluster/overview.md",tags:[],version:"current",frontMatter:{id:"overview",sidebar_label:"Overview",title:"Overview",slug:"overview"},sidebar:"garnetDocSidebar",previous:{title:"Performance Numbers",permalink:"/docs/benchmarking/perf-numbers"},next:{title:"Replication",permalink:"/docs/cluster/replication"}},l={},c=[{value:"Garnet Cluster Sharding",id:"garnet-cluster-sharding",level:2},{value:"Client Redirection",id:"client-redirection",level:3},{value:"Garnet Cluster Configuration",id:"garnet-cluster-configuration",level:2},{value:"Creating a Garnet Cluster",id:"creating-a-garnet-cluster",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"garnet-cluster-overview",children:"Garnet Cluster Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Garnet cluster provides an easy and scalable way to operate Garnet across multiple nodes.\nIt supports multiple features including ",(0,s.jsx)(n.strong,{children:"scaling up/down"}),", ",(0,s.jsx)(n.strong,{children:"data migration"}),", and ",(0,s.jsx)(n.strong,{children:"data replication"}),".\nThis document presents an overview of the sharding mechanics and cluster configuration."]}),"\n",(0,s.jsx)(n.h2,{id:"garnet-cluster-sharding",children:"Garnet Cluster Sharding"}),"\n",(0,s.jsx)(n.p,{children:"The cluster's key space is split into 16384 slots.\nAny given slot is owned by a single primary Garnet instance, and any given key maps to only a single slot.\nIf chosen to setup Garnet with replication, a Garnet instance can operate as a replica and serve read-only requests\nfor the keys hashing to slots owned by their corresponding primaries.\nAll single key operations are supported in Garnet cluster.\nHowever, multikey operations are processed only if all keys involved are mapped to a single slot.\nUsers can overcome this restriction by using hashtags to map differents keys to the same slot.\nIf a key contains {...}, only the string enclosed is used for the hash function computation.\nFor example, keys {abc}xyz and xyz{abc} will hash in the same hashlot."}),"\n",(0,s.jsx)(n.h3,{id:"client-redirection",children:"Client Redirection"}),"\n",(0,s.jsx)(n.p,{children:"Clients can connect to any node in the cluster and issues single/multi-key operations or any type of\ncluster management operations.\nThe receiving node processes single/multi-key operations by calculating the hashlot value(s) for the key(s) associatew with the corresponding operation\nand responds in one of the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the slot is owned by the receiving node, it performs the actual operation as expected from standalone Garnet."}),"\n",(0,s.jsx)(n.li,{children:"If the slot is owned by the another node, it responds with -MOVED <slot> <address> <port>"}),"\n",(0,s.jsx)(n.li,{children:"If the receiving node is a replica, it will serve only read requests to the slots owned by its primaruy and redirect any write requests to the primary using -MOVED message."}),"\n",(0,s.jsxs)(n.li,{children:["If the slot is owned by the receiving node and that slot is migrating then:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the key exists, then read requests are served as normal while write requests return -MIGRATING."}),"\n",(0,s.jsx)(n.li,{children:"If the key does not exits, then read and write requests return -ASK <slot> <address> <port>."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If the slot is owned by the another node and the receiving node is the target of the migration operation then:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Read and write requests are served only if ASKING issued before hand. Note that write safety is not ensured if ASKING is used, so clients should take extra care when using it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"garnet-cluster-configuration",children:"Garnet Cluster Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Every Garnet cluster instance retains a persistent local copy of the cluster configuration.\nConfiguration updates are either directly applied through cluster commands to a specific node\nor propagated through the gossip protocol."}),"\n",(0,s.jsx)(n.p,{children:"The cluster configuration contain slot assignment information and information about every known node\nin the cluster."}),"\n",(0,s.jsxs)(n.p,{children:["For more information about the cluster configuration please see the description of ",(0,s.jsx)(n.em,{children:"CLUSTER NODES"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-garnet-cluster",children:"Creating a Garnet Cluster"}),"\n",(0,s.jsx)(n.p,{children:"Before showing how to create a Garnet cluster, we present below a brief overview of the most important parameters associated\nwith running a basic Garnet cluster deployment."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--port"}),": Port to run server on. Same port is used for serving queries and internode communication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--bind"}),": IP address to bind server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--checkpointdir"}),": Used to specify the path to checkpoint location and cluster config when --cluster option is enabled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--cluster"}),": Enable cluster mode"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--cluster-timeout"}),": Internode communication timeout."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--gossip-delay"}),": Gossip protocol delay to broadcast send updated configuration or ping known nodes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"--gossip-sp"}),": Percent of cluster nodes to gossip with at each gossip iteration"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create a Garnet cluster you need first to run Garnet instances using the ",(0,s.jsx)(n.code,{children:"--cluster"})," option as shown below.\nUsing the ",(0,s.jsx)(n.code,{children:"--checkpointdir"})," option is optional. It is include in this example to avoid any conflicts between the configuration\nfiles.\nIf you don't specify the ",(0,s.jsx)(n.code,{children:"--checkpointdir"})," option Garnet will you the startup folder to save any configuration associated"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\tGarnetServer --cluster --checkpointdir clusterData/7000 --port 7000\n\tGarnetServer --cluster --checkpointdir clusterData/7001 --port 7001\n\tGarnetServer --cluster --checkpointdir clusterData/7001 --port 7002\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the instance are up and running, you can use any kind of redis compatible client to initialize\nthe cluster to assign slots."}),"\n",(0,s.jsx)(n.p,{children:"For the above example, we use redis-cli to demonstrate how a cluster is initialized"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\tredis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 --cluster-yes\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the above initialization completes, the cluster is ready to process client queries.\nAn example of how one may use the initialized cluster is shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'PS C:\\Dev> redis-cli -p 7000\n127.0.0.1:7000> cluster nodes\nee337ebd15255c163b0d6faa4d055cdb26215938 127.0.0.1:7000@17000,hostname01 myself,master - 0 0 1 connected 0-5460\n4f86082c3d3250c0dba0f925e71963d46974fbca 127.0.0.1:7002@17002,hostname02 master - 0 0 3 connected 10923-16383\ncf333332b44a32fa70c30862b6d9535e9bac19f9 127.0.0.1:7001@17001,hostname03 master - 0 0 2 connected 5461-10922\n127.0.0.1:7000> cluster keyslot x\n(integer) 16287\n127.0.0.1:7000> get x\n(error) MOVED 16287 10.159.2.73:7002\n127.0.0.1:7000> set x 1234\n(error) MOVED 16287 10.159.2.73:7002\n127.0.0.1:7000> cluster keyslot wxz\n(integer) 949\n127.0.0.1:7000> set wxz 1234\nOK\n127.0.0.1:7000> get wxz\n"1234"\n127.0.0.1:7000>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);