"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[7098],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Practical outline",u={unversionedId:"next_generation_sequencing/Introduction to next-generation sequencing data analysis/Pipeline_outline",id:"next_generation_sequencing/Introduction to next-generation sequencing data analysis/Pipeline_outline",title:"Practical outline",description:"Overview",source:"@site/docs/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Pipeline_outline.md",sourceDirName:"next_generation_sequencing/Introduction to next-generation sequencing data analysis",slug:"/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Pipeline_outline",permalink:"/whg-training-resources/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Pipeline_outline",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/docs/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Pipeline_outline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting the prerequisites",permalink:"/whg-training-resources/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Prerequisites"},next:{title:"What's in the fastq files?",permalink:"/whg-training-resources/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Inspecting_the_fastqs"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"A look at the data",id:"a-look-at-the-data",level:4},{value:"The practical in a nutshell",id:"the-practical-in-a-nutshell",level:3},{value:"Go!",id:"go",level:4},{value:"Challenge questions",id:"challenge-questions",level:2}],g={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"practical-outline"},"Practical outline"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this tutorial we will demonstrate a basic pipeline for analysing paired-end short-read genomic\nsequencing data. We will start with raw data in a FASTQ file, inspect quality control metrics,\nalign the data, and then use it to look for genetic variation."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"If you got here you should hopefully have already downloaded the practical data - ",(0,i.kt)("strong",{parentName:"p"},"if not"),", please\nfollow the instructions for doing that on the ",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Prerequisites"},"prerequisites page"),", and then come\nback here."),(0,i.kt)("h4",{id:"a-look-at-the-data"},"A look at the data"),(0,i.kt)("p",null,"You should now have a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence_data_analysis")," filled with a number of data\nfiles. Now would be a good point to explore what's in there.  The folder contains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sequence data reads from malaria parasites (under the ",(0,i.kt)("inlineCode",{parentName:"p"},"malaria/")," folder). These reads are in\n",(0,i.kt)("em",{parentName:"p"},"gzipped fastq")," format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A malaria reference genome assembly (",(0,i.kt)("inlineCode",{parentName:"p"},"Pf3D7_v3.fa"),") in ",(0,i.kt)("em",{parentName:"p"},"FASTA")," format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A similar set of sequence data reads and reference genome for a human sample - in the ",(0,i.kt)("inlineCode",{parentName:"p"},"human/")," folder."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note.")," I placed online a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.well.ox.ac.uk/~gav/projects/oxford_statgen_summer_school/sequence_data_analysis/solutions"},"set of solutions files for steps in the practical"),".\nFeel free to check these as you go along."),(0,i.kt)("p",null,"During the practical we'll bring one or more of these datasets to an analysis-ready state."),(0,i.kt)("p",null,"To get started, start a terminal window and change directory into that folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd sequence_data_analysis\n")),(0,i.kt)("h3",{id:"the-practical-in-a-nutshell"},"The practical in a nutshell"),(0,i.kt)("p",null,"This practical works as follows: for each step there's a page giving you some information about how\nto run the step; the page then links back to this one so you can see the next step. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note.")," Most of these example work with the malaria data in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"malaria/QG0033-C_Illumina-HiSeq_read1.fastq.gz\nmalaria/QG0033-C_Illumina-HiSeq_read2.fastq.gz\n")),(0,i.kt)("p",null,"If you want to go off-piste, feel free to work with any (or all) of the others (that's one of the\n",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Challenge_questions"},"Challenge questions"),"). Just remember that the human data will align to\nhuman genome and the malaria data to the malaria genome."),(0,i.kt)("h4",{id:"go"},"Go!"),(0,i.kt)("p",null,"The steps are as follows. ",(0,i.kt)("em",{parentName:"p"},"Can you work out the answers to the questions below? Please make a note of the answers for the consolidation session.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Inspecting_the_fastqs"},"have a look at the FASTQ files")),".  ")),(0,i.kt)("p",null,"Questions: ",(0,i.kt)("em",{parentName:"p"},"How many read pairs are in the file?  What is the read length?")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Quality_control"},"Perform quality control (QC) on the sequence reads")),".  ")),(0,i.kt)("p",null,"Questions: ",(0,i.kt)("em",{parentName:"p"},"What is the GC content in the reads? What is the fragment duplication rate? Are there\nany sequencing artifacts?")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Aligning_reads"},"Align the reads")),".")),(0,i.kt)("p",null,"Questions: ",(0,i.kt)("em",{parentName:"p"},"How are the reads represented in the aligned output file?  How many reads were aligned?  How many were not nmapped?")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Viewing_alignments"},"Inspect read pileups and looking for variation")),".")),(0,i.kt)("p",null,"Questions: ",(0,i.kt)("em",{parentName:"p"},"Can you find a SNP?  An insertion or deletion?  A structural variant?")),(0,i.kt)("h2",{id:"challenge-questions"},"Challenge questions"),(0,i.kt)("p",null,"If you get this far, congratulations - you're an expert!"),(0,i.kt)("p",null,"To test your mettle, here are some ",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Challenge_questions"},"challenge questions"),".  Good luck!"))}d.isMDXComponent=!0}}]);