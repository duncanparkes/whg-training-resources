"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[7721],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,g=d["".concat(o,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7782:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],l={sidebar_position:5},o="Aligning reads",p={unversionedId:"next_generation_sequencing/Introduction to next-generation sequencing data analysis/Aligning_reads",id:"next_generation_sequencing/Introduction to next-generation sequencing data analysis/Aligning_reads",title:"Aligning reads",description:"Most analyses of short-read sequence data are based on the basic paradigm made up of two steps:",source:"@site/docs/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Aligning_reads.md",sourceDirName:"next_generation_sequencing/Introduction to next-generation sequencing data analysis",slug:"/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Aligning_reads",permalink:"/whg-training-resources/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Aligning_reads",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/docs/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Aligning_reads.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Paired-end sequencing in theory and practice",permalink:"/whg-training-resources/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Short_read_theory"},next:{title:"Viewing alignments",permalink:"/whg-training-resources/next_generation_sequencing/Introduction to next-generation sequencing data analysis/Viewing_alignments"}},m={},h=[{value:"The basic pipeline",id:"the-basic-pipeline",level:2},{value:"What did the pipeline generate?",id:"what-did-the-pipeline-generate",level:3},{value:"Inspecting the alignment output",id:"inspecting-the-alignment-output",level:2},{value:"The contents of a SAM file",id:"the-contents-of-a-sam-file",level:3},{value:"How many alignments are there?",id:"how-many-alignments-are-there",level:3},{value:"Primary and supplementary alignments",id:"primary-and-supplementary-alignments",level:3},{value:"Interpreting mapping qualities",id:"interpreting-mapping-qualities",level:3},{value:"What types of alignment are there?",id:"what-types-of-alignment-are-there",level:3},{value:"What did <code>markdup</code> do?",id:"what-did-markdup-do",level:3},{value:"Important!  Cleaning up",id:"important--cleaning-up",level:3},{value:"Next steps",id:"next-steps",level:2}],d={toc:h};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aligning-reads"},"Aligning reads"),(0,r.kt)("p",null,"Most analyses of short-read sequence data are based on the basic paradigm made up of two steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"first, ",(0,r.kt)("em",{parentName:"li"},"align reads to an established reference genome assembly"),"."),(0,r.kt)("li",{parentName:"ul"},"then ",(0,r.kt)("em",{parentName:"li"},"use those alignments to identify and call genetic variation for analysis"),".")),(0,r.kt)("p",null,"The first step in this paradigm is to get reads aligned. On this page we'll implement the basic\nread alignment pipeline that starts with the fastqs and ends with alignments for downstream\nanalysis. "),(0,r.kt)("h2",{id:"the-basic-pipeline"},"The basic pipeline"),(0,r.kt)("p",null,"The basic pipeline is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"align reads to the reference genome assembly"),(0,r.kt)("li",{parentName:"ol"},"sort them so they are in genome position order"),(0,r.kt)("li",{parentName:"ol"},"'mark' reads that look like duplicates (since these are ",(0,r.kt)("a",{parentName:"li",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Quality_control"},"likely to be artifacts"),".)"),(0,r.kt)("li",{parentName:"ol"},"Finally we'll gather some statistics about the alignments.")),(0,r.kt)("p",null,"In theory that's it - in practice it gets a bit more fiddly because of the need for various format\nconversion and indexing steps. (Some data might also need a ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Read_trimming"},"read trimming step"),"\nbut we're skipping that.)"),(0,r.kt)("p",null,"Without further ado let's implement these steps using a popular aligner ",(0,r.kt)("inlineCode",{parentName:"p"},"bwa mem")," and the swiss\narmy knife-like ",(0,r.kt)("inlineCode",{parentName:"p"},"samtools")," to do the work. As before I'll work with the data for the ",(0,r.kt)("inlineCode",{parentName:"p"},"QG0033-C"),"\nmalaria sample (which was ascertained in Congo in 2012), but if you know what you are doing you are\nfree to work with any of the other samples in the folder - or the chromosome 19 human data in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"human/")," folder if you prefer. (Just remember to use the human reference sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"GRCh38_chr19.fa"),"\nin that case.)"),(0,r.kt)("p",null,"To get started, move to a terminal window and make sure you are in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"sequence_data_analysis/malaria")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/sequence_data_analysis/malaria\n")),(0,r.kt)("p",null,"The pipeline can be run like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Make a temp dir to hold intermediate files\nmkdir -p tmp\n\n# Create a FM index for the reference\nbwa index Pf3D7_v3.fa\n\n# align the reads (using 2 threads - don't use more please!)\nbwa mem -t 4 -o tmp/QG0033-C-aligned.sam Pf3D7_v3.fa QG0033-C_Illumina-HiSeq_read1.fastq.gz QG0033-C_Illumina-HiSeq_read2.fastq.gz\n\n# convert to BAM\nsamtools view -b -o tmp/QG0033-C-aligned.bam tmp/QG0033-C-aligned.sam\n\n# fix mate-pair information and convert to BAM\nsamtools fixmate -m tmp/QG0033-C-aligned.bam tmp/QG0033-C-fixmate.bam\n\n# sort reads by genomic position\nsamtools sort -T tmp -o tmp/QG0033-C-sorted.bam tmp/QG0033-C-fixmate.bam\n\n# Identify probable duplicate reads\nsamtools markdup -s tmp/QG0033-C-sorted.bam tmp/QG0033-C-markdup.bam\n\n# Rename to this folder, and index\nmv tmp/QG0033-C-markdup.bam QG0033-C.bam\nsamtools index QG0033-C.bam\n\n")),(0,r.kt)("p",null,"(",(0,r.kt)("strong",{parentName:"p"},"Note.")," You can see what this has created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ls"),".)"),(0,r.kt)("p",null,"If you run all that together it might take around 10 minutes to complete (the longest steps being\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"bwa mem")," indexing and alignment steps.) It's worth running the steps one by one to make sure\nthey complete without errors, and watching the output to see what is being done. While you're\nwaiting for the alignment to complete consider reading the information below about what's in the aligned data,\n",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Short_read_theory"},"reading more about paired-end sequencing"),",\nrunning an alternative analysis to ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/De_novo_error_rate_estimation"},"estimate error rates"),",\nor visiting some other ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Useful_links"},"useful links")," - whatever you find most useful."),(0,r.kt)("h3",{id:"what-did-the-pipeline-generate"},"What did the pipeline generate?"),(0,r.kt)("p",null,"If you followed the above you'll now have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a file ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp/QG0033-C-aligned.sam")," which contains the alignments in the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SAM_(file_format)"},"SAM text file format"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a binary version ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp/QG0033-C-aligned.bam")," of the same thing, in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binary_Alignment_Map"},"BAM format"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a coordinate-sorted version of that, in ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp/QG0033-C-sorted.bam"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a final version of the alignments with duplicate reads 'marked' - called ",(0,r.kt)("inlineCode",{parentName:"p"},"QG0033-C.bam"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and a corresponding index file ",(0,r.kt)("inlineCode",{parentName:"p"},"QG0033-C.bam.bai"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," You should now have an aligned set of reads ready for analysis. "),(0,r.kt)("p",null,"The rest of this page gives details about what is in the alignment files you've just created. When\nyou're satisfied you know enough, ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Pipeline_outline#the-practical-in-a-nutshell"},"go back to the practical"),"."),(0,r.kt)("h2",{id:"inspecting-the-alignment-output"},"Inspecting the alignment output"),(0,r.kt)("h3",{id:"the-contents-of-a-sam-file"},"The contents of a SAM file"),(0,r.kt)("p",null,"If you look at the unsorted SAM file (e.g. by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"less -S tmp/QG0033-C-aligned.sam")," - press ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," when you want to quit) you'll see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@SQ     SN:Pf3D7_08_v3  LN:1472805\n@SQ     SN:Pf_M76611    LN:5967\n@SQ     SN:Pf3D7_01_v3  LN:640851\n@SQ     SN:Pf3D7_09_v3  LN:1541735\n@SQ     SN:Pf3D7_03_v3  LN:1067971\n@SQ     SN:Pf3D7_05_v3  LN:1343557\n@SQ     SN:Pf3D7_02_v3  LN:947102\n@SQ     SN:Pf3D7_14_v3  LN:3291936\n@SQ     SN:Pf3D7_11_v3  LN:2038340\n@SQ     SN:Pf3D7_10_v3  LN:1687656\n@SQ     SN:Pf3D7_04_v3  LN:1200490\n@SQ     SN:Pf3D7_12_v3  LN:2271494\n@SQ     SN:Pf3D7_13_v3  LN:2925236\n@SQ     SN:Pf3D7_06_v3  LN:1418242\n@SQ     SN:Pf3D7_07_v3  LN:1445207\n@SQ     SN:PF_apicoplast_genome_1       LN:29430\n@PG     ID:bwa  PN:bwa  VN:0.7.17-r1188 CL:bwa mem -t 2 -o QG0033-C-aligned.sam Pf3D7_v3.fa QG0033-C_Illumina-HiSeq_read1.fast\nERR377582.7615542       99      Pf3D7_09_v3     37181   21      100M    =       37244   163     AAAAATCCATTTATATCTTTTATGGTTAGTATTATTTATACCTTCCTGTTTTATTTATCCACGTTTTATAAAATTGACGTATTGTTAATAAGTAGTTGTA    B@DECEFEEGFEEHFGGEFFFFFEFFEEFEGHHGGGFFFAEFFFGGEFFHFGEEFFEDEGDDEF@GFGEGEEGHEEDGGGEFEEFFEEEDEFDGDECEEF    NM:i:1  MD:Z:58T41      MC:Z:100M       AS:i:95 XS:i:91\nERR377582.7615542       147     Pf3D7_09_v3     37244   21      100M    =       37181   -163    TTTTATAAAATTGACGTATTGTTAATAAGTAGTTGTATATTATAAATTATAAGGTAATATAATTGCTATAATTATAATAATCATTATCATAATTATTATC    DHEDGBHEDGFEDAAGEDEDGFHGGGDEFCFGFGFFEEEIBCFCIFDEEDFFGGBEFDGEEGEFFEFHIFDEFEHHEFHEDDFFEEFDFEEFDEDECA@9    NM:i:2  MD:Z:43G49A6    MC:Z:100M       AS:i:90 XS:i:90\nERR377582.19970658      77      *       0       0       *       *       0       0       TGATCGGTGCGGGCCGGACTGAATTGCTACGCCTGATTTTCGGTGCCGACCTGGCCGACAGTGGCACGGTGGCCTTGGGGTCGCCAGCGCAGGTGGTGAG    *:?D<CF3-D@EE@EDDGFF?DDEFACEFEBHCGD/EFEE:?E;F?GE=2FE>FFC:EHD??H@DFFB89CD@D-ECC8;EF.A:;6EEDDFA,D>'D@F    AS:i:0  XS:i:0\n...\n")),(0,r.kt)("p",null,"The file consists of some ",(0,r.kt)("em",{parentName:"p"},"metadata")," (lines starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),", and recording information about the sequences in the reference\nassembly and the program that was run to generate the alignments) followed by the alignments themselves."),(0,r.kt)("p",null,"The alignment columns rows consist of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The read ID (straight from the fastq file)"),(0,r.kt)("li",{parentName:"ul"},"Some ",(0,r.kt)("em",{parentName:"li"},"flags")," encoded as an integer.  The best way to understand these is through the ",(0,r.kt)("a",{parentName:"li",href:"https://broadinstitute.github.io/picard/explain-flags.html"},'"Explain SAM flags" webpage'),".  We'll go through some examples below."),(0,r.kt)("li",{parentName:"ul"},"The chromosome and position at which the read aligns"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"mapping quality"),", detailed more below."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"CIGAR")," string which gives some detail about how the read aligns"),(0,r.kt)("li",{parentName:"ul"},"The chromosome and position of the other read in the pair ",(0,r.kt)("em",{parentName:"li"},"if it's aligned"),". (The\nchromosome is often ",(0,r.kt)("inlineCode",{parentName:"li"},"="),", which means the same chromosome as this read, which you'd expect since they both came from the same fragment. A ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," means the other read was not aligned)."),(0,r.kt)("li",{parentName:"ul"},"The 'template length' (how long was the span of the read pair on the reference contig?)"),(0,r.kt)("li",{parentName:"ul"},"The read bases and mapping qualities.  These are straight from the fastq but ",(0,r.kt)("em",{parentName:"li"},"reverse-complemented if necessary")," so they are in the same order as the reference bases."),(0,r.kt)("li",{parentName:"ul"},"Finally there are some ",(0,r.kt)("strong",{parentName:"li"},"optional fields"),".  Among these are ",(0,r.kt)("strong",{parentName:"li"},"NM")," (number of mismatches between the read and the reference), and ",(0,r.kt)("strong",{parentName:"li"},"MD")," (a kind of counterpoint to the CIGAR string in column 6).")),(0,r.kt)("p",null,"If you look at the read IDs and flags above (via\n",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/picard/explain-flags.html"},"this page"),"), you'll see that the read pairs\nare represented as pairs of alignments with the same identifiers but with one flagged as 'first in\npair' and the other as 'second in pair'."),(0,r.kt)("h3",{id:"how-many-alignments-are-there"},"How many alignments are there?"),(0,r.kt)("p",null,"We can use the UNIX ",(0,r.kt)("inlineCode",{parentName:"p"},"wc")," command to count the alignments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"samtools view tmp/QG0033-C-aligned.sam | wc -l\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note.")," The BAM file is exactly the same, it's just encoded in a binary format.  So this also works and is slightly quicker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"samtools view tmp/QG0033-C-aligned.bam | wc -l\n")),(0,r.kt)("p",null,"If you run this with the above data it says there are 4,057,972 alignments. But wait - there were only 2 million read pairs!"),(0,r.kt)("p",null,"This illustrates an important point: ",(0,r.kt)("strong",{parentName:"p"},"there are more alignments than reads in the data"),".  How can this be?"),(0,r.kt)("h3",{id:"primary-and-supplementary-alignments"},"Primary and supplementary alignments"),(0,r.kt)("p",null,"To figure out why, let's look at an example: the read with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"ERR377582.20226793"),". You can extract\nthis using ",(0,r.kt)("inlineCode",{parentName:"p"},"grep")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"grep 'ERR377582.20226793' tmp/QG0033-C-aligned.sam\n")),(0,r.kt)("p",null,"If you look at the alignment flags (second columns) via ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/picard/explain-flags.html"},"this page"),", you'll see that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first alignment (flag=81) represents the first read in the pair.  It is aligned on the reverse strand of the reference."),(0,r.kt)("li",{parentName:"ul"},"The second alignment (flag=2113) ",(0,r.kt)("em",{parentName:"li"},"also")," represents the first read in the pair.  It is flagged as a ",(0,r.kt)("strong",{parentName:"li"},"supplementary alignment"),"."),(0,r.kt)("li",{parentName:"ul"},"The third alignment (flag=161) represents the second read in the pair.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Terminology"),": A ",(0,r.kt)("em",{parentName:"p"},"supplementary alignment")," occurs when a read aligns in more than one part. (The\nadditional alignments aren't adjacent to the primary one, otherwise they would be part of it.)"),(0,r.kt)("p",null,"You can see how this works for this read by looking at the ",(0,r.kt)("em",{parentName:"p"},"CIGAR string"),". For the first alignment\nthe CIGAR is ",(0,r.kt)("inlineCode",{parentName:"p"},"60M40S"),". This means that the first 60 bases of the 100bp read were aligned, and the\nfollowing 40 were 'soft clipped' - not part of the alignment. For the supplementary alignment, the\nCIGAR is ",(0,r.kt)("inlineCode",{parentName:"p"},"54M46H"),". If you look at the read bases you will see they are the reverse complement of\nthe bases from the original read (which are fully represented in the first alignment). The upshot\nis that ",(0,r.kt)("inlineCode",{parentName:"p"},"bwa")," thinks the first ~60 bases align to chromosome ",(0,r.kt)("inlineCode",{parentName:"p"},"Pf3D7_10_v3"),", but the last ~54 bases\nalign in reverse orientation to chromosome ",(0,r.kt)("inlineCode",{parentName:"p"},"Pf3D7_09_v3"),"."),(0,r.kt)("h3",{id:"interpreting-mapping-qualities"},"Interpreting mapping qualities"),(0,r.kt)("p",null,"Taken at face value you might think that this means this sample has a translocation between\nchromosome 9 and 10. But hold on. If you look at the ",(0,r.kt)("em",{parentName:"p"},"mapping quality")," column (column 5) you'll see\nthat all these alignments actually have ",(0,r.kt)("strong",{parentName:"p"},"zero mapping quality"),". This means that confidence in\nthese alignments is very low!"),(0,r.kt)("p",null,"Like base qualities, mapping qualities are expressed on the PHRED scale. They are the aligner's\nestimate of the quantity: the ",(0,r.kt)("em",{parentName:"p"},"probability that the read actually aligns elsewhere"),". On the PHRED\nscale this is expressed as:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"mapping\xa0quality"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"10"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mrow"},"log"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061")),(0,r.kt)("mn",{parentName:"msub"},"10")),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,r.kt)("mi",{parentName:"mrow"},"P"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mtext",{parentName:"mrow"},"the\xa0read\xa0actually\xa0maps\xa0elsewhere"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",fence:"true"},")"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{mapping quality} = -10 \\log_{10} \\left( P( \\text{the read actually maps elsewhere}) \\right)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"mapping\xa0quality")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mord"},"10"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mop"},(0,r.kt)("span",{parentName:"span",className:"mop"},"lo",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.207em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.4559em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2441em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"minner"},(0,r.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"the\xa0read\xa0actually\xa0maps\xa0elsewhere")),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")"))))))),(0,r.kt)("p",null,"which gives this relationship:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"mapping quality"),(0,r.kt)("th",{parentName:"tr",align:null},"Estimated probability alignment is wrong"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"1%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001%")))),(0,r.kt)("p",null,"A mapping quality of zero translates to a 100% probability that the read aligns elsewhere, that is,\nthat ",(0,r.kt)("inlineCode",{parentName:"p"},"bwa")," is not confident at all in this alignment. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note.")," Also like base qualities, this is only an estimate of the probability.  It may not be well calibrated."),(0,r.kt)("p",null,"(What's really going on is that these reads original from the telomeres. Telomeres in malaria, as\nin humans and other organisms, are highly repetitive and are very hard to analyse using short-read\ndata.)"),(0,r.kt)("h3",{id:"what-types-of-alignment-are-there"},"What types of alignment are there?"),(0,r.kt)("p",null,"To get a better sense of the types of alignment let's use ",(0,r.kt)("inlineCode",{parentName:"p"},"samtools flagstat"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This counts reads according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," column. Run it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"samtools flagstat tmp/QG0033-C-aligned.sam \n")),(0,r.kt)("p",null,"From the output you should see: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Of 4 million reads ("4000000 paired in sequencing"), only 3,804,730 were actually aligned by ',(0,r.kt)("inlineCode",{parentName:"li"},"bwa"),".  That's nearly 200,000 that weren't aligned at all."),(0,r.kt)("li",{parentName:"ul"},"Most of these (3731534) were were aligned in pairs."),(0,r.kt)("li",{parentName:"ul"},"Most of ",(0,r.kt)("em",{parentName:"li"},"these")," (3537816) were 'properly paired' - that is, both reads mapped to the same chromosome, in the right orientation (i.e. ",(0,r.kt)("a",{parentName:"li",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Short_read_theory"},"facing each other"),") and about the right distance apart."),(0,r.kt)("li",{parentName:"ul"},"But a small subset (264863 in total) had unmapped mate, mate on a different chromosome, or not close or in the wrong orientation to the original read.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note.")," A much more detailed view of reads can be generated by running ",(0,r.kt)("inlineCode",{parentName:"p"},"samtools stats"),". See more\non the ",(0,r.kt)("a",{parentName:"p",href:"http://www.htslib.org/doc/samtools-stats.html"},(0,r.kt)("inlineCode",{parentName:"a"},"samtools stats")," documentation page"),"."),(0,r.kt)("h3",{id:"what-did-markdup-do"},"What did ",(0,r.kt)("inlineCode",{parentName:"h3"},"markdup")," do?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question")," what ",(0,r.kt)("strong",{parentName:"p"},"did")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"samtools markdup")," step do?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint 1"),". Try viewing the first reads in the coordinate-sorted and final (post-markdup BAM).  E.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"samtools view tmp/QG0033-C-sorted.bam  | head\nsamtools view QG0033-C.bam  | head\n")),(0,r.kt)("p",null,"Can you spot the difference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint"),". Try running ",(0,r.kt)("inlineCode",{parentName:"p"},"samtools flagstat")," on these two files.  What's different?"),(0,r.kt)("h3",{id:"important--cleaning-up"},"Important!  Cleaning up"),(0,r.kt)("p",null,"Our pipeline has left behind several copies of the original data that we don't need.  See them by looking in the temp directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls -lh tmp\ndu -ch tmp\n")),(0,r.kt)("p",null,"That's 2.4Gb of space essentially wasted!  Now is a good time to get rid of these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm tmp/*\nrmdir tmp\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note.")," ",(0,r.kt)("strong",{parentName:"p"},"Don't")," delete the main output file ",(0,r.kt)("inlineCode",{parentName:"p"},"QG0033-C.bam")," or its index - we'll look at that in a moment."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now that we have an aligned set of reads, ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/next_generation_sequencing/Introduction%20to%20next-generation%20sequencing%20data%20analysis/Pipeline_outline#the-practical-in-a-nutshell"},"go back to the\npractical")," and move on to viewing the read pileups."))}u.isMDXComponent=!0}}]);