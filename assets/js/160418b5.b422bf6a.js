"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[8981],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return N}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,p=e.originalType,i=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),h=l(t),N=s,k=h["".concat(i,".").concat(N)]||h[N]||c[N]||p;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var p=t.length,r=new Array(p);r[0]=h;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:s,r[1]=m;for(var l=2;l<p;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5121:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return i},default:function(){return N},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var n=t(7462),s=t(3366),p=(t(7294),t(3905)),r=["components"],m={sidebar_position:3},i="Variant calling with bcftools",l={unversionedId:"next_generation_sequencing/variant_calling_and_imputation/Variant_calling",id:"next_generation_sequencing/variant_calling_and_imputation/Variant_calling",title:"Variant calling with bcftools",description:"First let's see how to use a simple pipeline to identify genetic variants",source:"@site/docs/next_generation_sequencing/variant_calling_and_imputation/Variant_calling.md",sourceDirName:"next_generation_sequencing/variant_calling_and_imputation",slug:"/next_generation_sequencing/variant_calling_and_imputation/Variant_calling",permalink:"/whg-training-resources/next_generation_sequencing/variant_calling_and_imputation/Variant_calling",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/docs/next_generation_sequencing/variant_calling_and_imputation/Variant_calling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting the data",permalink:"/whg-training-resources/next_generation_sequencing/variant_calling_and_imputation/Prerequisites"},next:{title:"Variant quality control",permalink:"/whg-training-resources/next_generation_sequencing/variant_calling_and_imputation/Variant_quality_control"}},o={},c=[{value:"Inspecting the pileup and calls output",id:"inspecting-the-pileup-and-calls-output",level:3},{value:"Inspecting the calls output",id:"inspecting-the-calls-output",level:3},{value:"Interpreting the GT field",id:"interpreting-the-gt-field",level:3},{value:"An aside on genotype posteriors.",id:"an-aside-on-genotype-posteriors",level:3},{value:"Questions",id:"questions",level:3},{value:"Next steps",id:"next-steps",level:3}],h={toc:c};function N(e){var a=e.components,m=(0,s.Z)(e,r);return(0,p.kt)("wrapper",(0,n.Z)({},h,m,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"variant-calling-with-bcftools"},"Variant calling with bcftools"),(0,p.kt)("p",null,"First let's see how to use a simple pipeline to identify genetic variants\nusing ",(0,p.kt)("a",{parentName:"p",href:"http://samtools.github.io/bcftools/bcftools.html#mpileup"},"bcftools mpileup"),"\nand ",(0,p.kt)("a",{parentName:"p",href:"http://samtools.github.io/bcftools/bcftools.html#call"},"bcftools call"),"."),(0,p.kt)("p",null,"As this suggests the process has two steps. In the first step (the ",(0,p.kt)("em",{parentName:"p"},"mpileup step"),"), we process the\nreads, identify likely alleles, and compute ",(0,p.kt)("strong",{parentName:"p"},"genotype likelihoods"),". In the second ",(0,p.kt)("em",{parentName:"p"},"calling")," step\nthese are used to jointly call variants and genotypes across the samples."),(0,p.kt)("p",null,"Let's get started. Move to a terminal window and make sure you are in the folder\n",(0,p.kt)("inlineCode",{parentName:"p"},"variant_calling_and_imputation"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"cd ~/variant_calling_and_imputation\n")),(0,p.kt)("p",null,'As you should see, there are a number of aligned read files (BAM files) from the GWD population\n("Gambians from the Western Division") in the ',(0,p.kt)("inlineCode",{parentName:"p"},"reads/")," folder. We have subsetted these down so they\ncover the ",(0,p.kt)("em",{parentName:"p"},"FUT2")," gene (which we looked at briefly in the challenge question this morning)."),(0,p.kt)("p",null,"Let's use ",(0,p.kt)("inlineCode",{parentName:"p"},"bcftools")," to compute genotype likelihoods:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"bcftools mpileup -Oz -f GRCh38_chr19.fa.gz -o GWD_FUT2_pileup.vcf.gz reads/*.bam\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note.")," This will take a minute or so to run, as the command reads all the alignment files and\nthe FASTA reference sequence, and inspects the pileup much like we did manually this morning. "),(0,p.kt)("p",null,"Let's go straight ahead and implement calling:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"bcftools call -m -v -Oz -o GWD_FUT2_calls.vcf.gz GWD_FUT2_pileup.vcf.gz\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note.")," The ",(0,p.kt)("inlineCode",{parentName:"p"},"-m")," option means 'use the newer multi-allele calling algorithm', and ",(0,p.kt)("inlineCode",{parentName:"p"},"-v")," means\n'only output variant sites'. In both commands we wrote ",(0,p.kt)("inlineCode",{parentName:"p"},"-Oz")," to mean 'output compressed VCF format'."),(0,p.kt)("h3",{id:"inspecting-the-pileup-and-calls-output"},"Inspecting the pileup and calls output"),(0,p.kt)("p",null,"Both the pileup and call steps output a ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Variant_Call_Format"},"Variant Call Format\n(VCF)")," file. What's the difference? Look first\nat the pileup file using ",(0,p.kt)("inlineCode",{parentName:"p"},"zless"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"zless -S GWD_FUT2_pileup.vcf.gz\n")),(0,p.kt)("p",null,"The first lines in the file (the ones starting with a ",(0,p.kt)("inlineCode",{parentName:"p"},"#")," character) are all ",(0,p.kt)("em",{parentName:"p"},"metadata"),". They're\nuseful but let's skip them for now. The easiest way to do this is search for 'CHROM' which you can\ndo by pressing ",(0,p.kt)("inlineCode",{parentName:"p"},"/")," (forward slash) followed by ",(0,p.kt)("inlineCode",{parentName:"p"},"CHROM"),", and then press enter. You should see\nsomething like this:"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"img",src:t(4105).Z,width:"1732",height:"544"})),(0,p.kt)("p",null,"Feel free to scroll around a bit.  A few things to note:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bcftools mpileup")," has looked at every site in the region (from 48693822 to 48708100, as it\nhappens) and assessed the evidence for variation at each one.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The 4th and 5th columns tell you what alleles ",(0,p.kt)("inlineCode",{parentName:"p"},"mpileup")," thinks are present in the reads. The 4th\ncolumn is the reference sequence base, and the 5th is are the other alleles seen (with ",(0,p.kt)("inlineCode",{parentName:"p"},"<*>"),"\nstanding for 'anything else').")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The 8th column is called ",(0,p.kt)("inlineCode",{parentName:"p"},"INFO")," and contains a bunch of information about the variants across all\nsamples. Exactly what is in there is described in the metadata, but for example you should be\nable to see values called ",(0,p.kt)("inlineCode",{parentName:"p"},"DP"),". This is the ",(0,p.kt)("strong",{parentName:"p"},"total depth of reads")," observed across all samples\nat the site.  Other metrics similarly capture properties of the read pileup.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The per-sample data itself starts way over in the 10th column. The values are ",(0,p.kt)("strong",{parentName:"p"},"PHRED-scaled\ngenotype likelihoods")," for each possible genotype for the given alleles."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note.")," If there are ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"k")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," alleles listed, then there are ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,p.kt)("mfrac",{parentName:"mrow",linethickness:"0px"},(0,p.kt)("mi",{parentName:"mfrac"},"k"),(0,p.kt)("mn",{parentName:"mfrac"},"2")),(0,p.kt)("mo",{parentName:"mrow",fence:"true"},")")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k \\choose 2")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2801em",verticalAlign:"-0.35em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,p.kt)("span",{parentName:"span",className:"delimsizing size1"},"(")),(0,p.kt)("span",{parentName:"span",className:"mfrac"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9301em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.355em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.144em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,p.kt)("span",{parentName:"span"}))))),(0,p.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},(0,p.kt)("span",{parentName:"span",className:"delimsizing size1"},")")))))))," possible genotypes (for a\ndiploid human individual). This is why some rows have many more values than others - more alleles\nwere seen in the reads."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note.")," The PHRED-scaled likelihood (PL) for a particular genotype ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"g")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"g")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g")))))," is computed as"),(0,p.kt)("div",{className:"math math-display"},(0,p.kt)("span",{parentName:"div",className:"katex-display"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mtext",{parentName:"mrow"},"PL"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"g"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mn",{parentName:"mrow"},"10"),(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mrow",{parentName:"msub"},(0,p.kt)("mi",{parentName:"mrow"},"log"),(0,p.kt)("mo",{parentName:"mrow"},"\u2061")),(0,p.kt)("mn",{parentName:"msub"},"10")),(0,p.kt)("mrow",{parentName:"mrow"},(0,p.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,p.kt)("mi",{parentName:"mrow"},"P"),(0,p.kt)("mrow",{parentName:"mrow"},(0,p.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,p.kt)("mtext",{parentName:"mrow"},"read\xa0data"),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,p.kt)("mtext",{parentName:"mrow"},"genotype"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mi",{parentName:"mrow"},"g"),(0,p.kt)("mo",{parentName:"mrow",fence:"true"},")")),(0,p.kt)("mo",{parentName:"mrow",fence:"true"},")"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{PL}(g) = -10 \\log_{10}\\left( P\\left( \\text{read data} | \\text{genotype} = g \\right) \\right)")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord text"},(0,p.kt)("span",{parentName:"span",className:"mord"},"PL")),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mord"},"10"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},(0,p.kt)("span",{parentName:"span",className:"mop"},"lo",(0,p.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.207em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.4559em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2441em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"minner"},(0,p.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"minner"},(0,p.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,p.kt)("span",{parentName:"span",className:"mord text"},(0,p.kt)("span",{parentName:"span",className:"mord"},"read\xa0data")),(0,p.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,p.kt)("span",{parentName:"span",className:"mord text"},(0,p.kt)("span",{parentName:"span",className:"mord"},"genotype")),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,p.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")")),(0,p.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")"))))))),(0,p.kt)("p",null,"The simplest reasonable likelihood function in the bracket here would be something proportional to a binomial likelihood, but\nin practice bcftools uses a more complex likelihood that\n",(0,p.kt)("a",{parentName:"p",href:"https://academic.oup.com/bioinformatics/article/27/21/2987/217423?login=true"},"allows for error dependency between reads"),".\n(One motivation is that an error might occur as an alignment error or be sequence\ncontext-dependent, so it makes sense to allow for this.)"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example.")," For the first site and first sample, the PLs are 0, 3, 26. That translates to\nlikelihoods of about 1, 0.5, and 0.0025.  ",(0,p.kt)("inlineCode",{parentName:"p"},"pileup")," is not very certain about what this genotype is!"),(0,p.kt)("p",null,"If you look at the sample using ",(0,p.kt)("inlineCode",{parentName:"p"},"tview")," you'll see why:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"samtools tview -p chr19:48693822 reads/HG02461.final_FUT2.bam\n")),(0,p.kt)("p",null,"Only two reads cover this position in this sample - they're both ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," bases,\nbut more reads would be needed to be really confident this is a homozygous ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,p.kt)("h3",{id:"inspecting-the-calls-output"},"Inspecting the calls output"),(0,p.kt)("p",null,"Now look at the calls file:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"zless -S GWD_FUT2_calls.vcf.gz\n")),(0,p.kt)("p",null,"Again skip past the metadata by typing ",(0,p.kt)("inlineCode",{parentName:"p"},"/CHROM")," and pressing ENTER.  You should see something like this:"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"img",src:t(1945).Z,width:"1466",height:"650"})),(0,p.kt)("p",null,"(NB. I've shrunk the INFO data in the above image to make it easier to see - your file will no doubt have a\nbunch of stuff in there)."),(0,p.kt)("p",null,"A few points to note:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"The file only has a subset of sites in it - those where ",(0,p.kt)("inlineCode",{parentName:"li"},"bcftools")," thinks there is genuine variation."),(0,p.kt)("li",{parentName:"ul"},"The ",(0,p.kt)("inlineCode",{parentName:"li"},"<*>")," alleles are gone.  They were just there to enable the calling step to sum evidence across samples."),(0,p.kt)("li",{parentName:"ul"},"The PLs are still there - but now they are joined by genotype calls in the ",(0,p.kt)("inlineCode",{parentName:"li"},"GT")," field.")),(0,p.kt)("p",null,"Scroll down the file a bit. Can you find a multi-allelic variant? (i.e. several alleles in column\n5?) What about a multi-allelic SNP (rather than an indel?)"),(0,p.kt)("h3",{id:"interpreting-the-gt-field"},"Interpreting the GT field"),(0,p.kt)("p",null,"It's pretty simple. A ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," corresponds to the reference allele, a ",(0,p.kt)("inlineCode",{parentName:"p"},"1")," corresponds to the first\nalternative allele, and so on. For a diploid sample the genotypes are of the form ",(0,p.kt)("inlineCode",{parentName:"p"},"0/0")," (homozygous\nreference), ",(0,p.kt)("inlineCode",{parentName:"p"},"0/1")," (heterozygous for the first alternative allele) ",(0,p.kt)("inlineCode",{parentName:"p"},"1/1")," homozygous for the first\nalternative allele, and so on."),(0,p.kt)("p",null,"By and large these genotypes correspond to the ",(0,p.kt)("strong",{parentName:"p"},"maximum likelihood genotype")," (as you can tell by\ncomparing to the PL fields... remember we're looking for the ",(0,p.kt)("em",{parentName:"p"},"smallest")," PL because of the PHRED\nscaling.)  However, if there aren't many reads the genotype may also be influenced by the prior."),(0,p.kt)("h3",{id:"an-aside-on-genotype-posteriors"},"An aside on genotype posteriors."),(0,p.kt)("p",null,"In the lecture you will have seen that the calling works in a Bayesian way, by computing a\nposterior probability of each genotype.  But ",(0,p.kt)("inlineCode",{parentName:"p"},"bcftools")," doesn't output that posterior by default."),(0,p.kt)("p",null,"To get it, you can change the calling command to add the ",(0,p.kt)("inlineCode",{parentName:"p"},"-a GP")," option:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"bcftools call -m -v -Oz -a GP -o GWD_FUT2_calls_with_GP.vcf.gz GWD_FUT2_pileup.vcf.gz\n")),(0,p.kt)("p",null,"If you look at this new output file it has, in addition to genotype (",(0,p.kt)("inlineCode",{parentName:"p"},"GT"),") and PHRED-scaled\ngenotype likelihood (",(0,p.kt)("inlineCode",{parentName:"p"},"PL"),"), a new field called ",(0,p.kt)("inlineCode",{parentName:"p"},"GP")," which are the ",(0,p.kt)("em",{parentName:"p"},"genotype posteriors"),". They look\nlike this:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"#CHROM  POS     ID      REF     ALT     QUAL    FILTER  FORMAT  HG02461 HG02462 HG02463 HG02464 HG02465 HG02466 HG02561 HG02562 HG02563 HG02568 HG02569 HG02570 HG02571 HG02572 HG02573 HG02574 HG02575 HG02582 HG02583 HG02584 HG02585 HG02586 HG02588 HG02589 HG02590 HG02594 HG02595...\nchr19   48693829        .       C       T       3357.45 .       GT:PL:GP        0/0:0,9,75:0.810234,0.189766,2.21701e-08        1/1:85,9,0:2.87613e-09,0.213018,0.786982        0/1:21,0,51:0.00425148,0.995745,3.67872e-06     ./.:0,0,0:0,0,0 0/1:24,0,24:0.00213138,0.996024,0.00184...\nchr19   48693956        .       A       G       6806.98 .       GT:PL:GP        0/0:0,99,255:1,3.1458e-11,4.93632e-28   0/0:0,105,255:1,7.9019e-12,4.93632e-28  0/0:0,111,255:1,1.98487e-12,4.93632e-28 0/0:0,78,255:1,3.96033e-09,4.93632e-28  0/0:0,69,255:1,3.1458e-08,4.93632e-28...\nchr19   48693992        .       G       A       1802.53 .       GT:PL:GP        0/0:0,96,255:1,1.43086e-11,2.56527e-29  0/0:0,105,255:1,1.80134e-12,2.56527e-29 0/0:0,90,255:1,5.69634e-11,2.56527e-29  0/0:0,105,255:1,1.80134e-12,2.56527e-29 0/0:0,81,255:1,4.52477e-10,2.56527e-29...\nchr19   48694122        .       C       G       125.986 .       GT:PL:GP        0/0:0,144,255:1,2.25005e-17,2.52536e-31 0/0:0,114,255:1,2.25005e-14,2.52536e-31 0/0:0,102,255:1,3.56609e-13,2.52536e-31 0/0:0,111,255:1,4.48944e-14,2.52536e-31 0/0:0,93,255:1,2.83264e-12,2.52536e-31...\nchr19   48694244        .       GTTTTTTTTTTTTTTTTTTTTTT GTTTTTTTTTTTTTTTTTTTTT,GTTTTTTTTTTTTTTTTTTTTTTT 3261.26 .       GT:PL:GP        0/1:31,0,37,52,46,77:0.00179946,0.998173,2.19386e-05,3.14376e-06,2.75729e-06,5.46634e-10        0/2:54,84,91,0,42,27:1.8098e-05,7.97434e-09,1.7...\nchr19   48694267        .       G       T       186.473 .       GT:PL:GP        0/0:0,42,255:0.999989,1.09366e-05,2.37526e-28   0/0:0,28,255:0.999725,0.000274643,2.37463e-28   0/0:0,30,248:0.999827,0.000173306,1.19026e-27   0/0:0,38,217:0.999973,2.74711e-05,1.49866e-24   0/0:0,8...\nchr19   48694335        .       G       A       1408.47 .       GT:PL:GP        0/0:0,81,255:1,4.55947e-10,2.60477e-29  0/0:0,84,255:1,2.28515e-10,2.60477e-29  0/0:0,58,255:1,9.09735e-08,2.60477e-29  0/0:0,75,255:1,1.81516e-09,2.60477e-29  0/0:0,93,255:1,2.87683e-11,2.60477e-29...\nchr19   48694424        .       T       A       11282.2 .       GT:PL:GP        0/0:0,102,255:1,3.49087e-11,2.41996e-27 1/1:255,90,0:4.13231e-25,7.2298e-09,1   0/1:202,0,151:1.14042e-20,1,1.09869e-16 0/0:0,108,255:1,8.76867e-12,2.41996e-27 0/1:200,0,202:1.80745e-20,1,8.72717e-22...\nchr19   48694447        .       G       A       3214.56 .       GT:PL:GP        0/1:180,0,241:8.19006e-18,1,2.42467e-26 0/0:0,105,255:1,3.86112e-12,1.1786e-28  0/1:161,0,240:6.50559e-16,1,3.05248e-26 0/0:0,108,255:1,1.93514e-12,1.1786e-28  0/0:0,81,255:1,9.69869e-10,1.1786e-28...\nchr19   48694448        .       G       A       349.569 .       GT:PL:GP        0/0:0,114,255:1,4.83668e-14,1.1669e-30  0/0:0,105,255:1,3.84191e-13,1.1669e-30  0/0:0,105,255:1,3.84191e-13,1.1669e-30  0/0:0,108,255:1,1.92552e-13,1.1669e-30  0/0:0,78,255:1,1.92552e-10,1.1669e-30...\nchr19   48694648        .       G       A       360.549 .       GT:PL:GP        0/0:0,105,255:1,4.222e-13,1.40921e-30   0/0:0,87,255:1,2.6639e-11,1.40921e-30   0/0:0,87,255:1,2.6639e-11,1.40921e-30   0/1:196,0,199:1.8814e-18,1,4.20202e-23  0/0:0,78,255:1,2.11601e-10,1.40921e-30...\nchr19   48694728        .       C       A       3031.84 .       GT:PL:GP        0/0:0,99,255:1,1.31458e-11,8.62013e-29  0/0:0,81,255:1,8.29443e-10,8.62013e-29  0/0:0,78,255:1,1.65496e-09,8.62013e-29  0/1:178,0,193:1.5178e-17,1,1.30836e-21  0/0:0,75,255:1,3.30207e-09,8.62013e-29...\n")),(0,p.kt)("p",null,"For example, for the first sample at the first SNP, the posterior probabilities are ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"0.81")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.81")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0.81"))))),", ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"0.19")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.19")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"0.19"))))),",\nand ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"2"),(0,p.kt)("mo",{parentName:"mrow"},"\xd7"),(0,p.kt)("mn",{parentName:"mrow"},"1"),(0,p.kt)("msup",{parentName:"mrow"},(0,p.kt)("mn",{parentName:"msup"},"0"),(0,p.kt)("mo",{parentName:"msup"},"\u2212")),(0,p.kt)("mn",{parentName:"mrow"},"8")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\\times 10^-8")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"2"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7713em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},"0"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7713em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212")))))))),(0,p.kt)("span",{parentName:"span",className:"mord"},"8"))))),". So ",(0,p.kt)("inlineCode",{parentName:"p"},"bcftools")," is ",(0,p.kt)("em",{parentName:"p"},"reasonably")," confident that the genotype is homozygous\nreference, but there's about a ",(0,p.kt)("em",{parentName:"p"},"20%")," chance it is heterozygous."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note.")," The ",(0,p.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/VCFv4.2.pdf"},"VCF spec")," lies about these fields.\nIt says they are ",(0,p.kt)("em",{parentName:"p"},"PHRED scaled"),", but they aren't - they are unscaled probabilities."),(0,p.kt)("h3",{id:"questions"},"Questions"),(0,p.kt)("p",null,"How many of your variants are SNPs?  How many are INDELs?  How many are multi-allelic and how many bi-allelic?"),(0,p.kt)("h3",{id:"next-steps"},"Next steps"),(0,p.kt)("p",null,"The rest of this practical is about using the wealth of information ",(0,p.kt)("inlineCode",{parentName:"p"},"bcftools")," has returned to turn\nthis initial set of variant calls into a robust set of phased genotypes. We'll then apply that to\nimpute a second set of samples. For this purpose we'll use a set of calls on a larger genomic\nregion, that you can find in the file ",(0,p.kt)("inlineCode",{parentName:"p"},"calls/GWD_30X_calls.vcf.gz"),"."),(0,p.kt)("p",null,"When you're ready ",(0,p.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/variant_calling_and_imputation/#Steps_in_the_practical"},"go back to the practical"),"."))}N.isMDXComponent=!0},1945:function(e,a,t){a.Z=t.p+"assets/images/calls-096a6afc5bf292ac00173949b5eaf44c.png"},4105:function(e,a,t){a.Z=t.p+"assets/images/pileup-2b978d38c5d3c9966a1c2c1e40be3d62.png"}}]);