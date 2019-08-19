## This documentation has two sections:
### 1.	Overview
### 2.	User Guide – how to use this tool

------------

#### 1.	Overview 
In order to have an integrated tool, we developed a Graphical User Interface for MHiC. This graphical User Interface enables the user to set parameters and generate significant interactions and also visualize Hi-C contact map. We developed this part as an HTML page. This document, we will describe each part of the user interface and diagrams page.

------------

#### 2.	User Guide
We explain this section in two parts:
##### 2.1.	User Interface
We developed this user interface to provide an easier way for users’ operations with the analytical section of the tool. This page receives data and its options from users and sends it to analytical section. In other words, we use the main section as a local server. 
This HTML page contains two types of elements. In the center, we implemented the import data section to receive data from users and process it in R functions. This section includes: 
  
**“Hi-C Input File”**: Path of a file that contains the reads (interactions) information. This also noticeable that instead of the file path user can set file name as input, if data located in MHiC’s data direction.  
  
**“Hi-C Digest File”**: Path of digest file, which used to map reads.  
  
**“Sample Name”**: The name used for the tool’s outputs.  
  
**“Method”**: In this part, users select the method used for Hi-C data analysis.  
  
**“Tool Name”**: Defines the preparing process used on Hi-C data.  

Along the import data section, we develop an options section on the left side to change the main process parameters. The option part contains six elements:  
  
**“Interactions type”**: Specify that the R package process work on witch type of interactions (inter or intra interactions).  
  
**“Bin size/resolution”**: Sets the resolution of data in the process.  
  
**“Parallel mode (more options)”**: Changes the process mode from single-core to multi-core.  
  
**“Remove diagonal interactions (more options)”**: Removes interactions, that both sides of interactions have a same locus. 
  
**“Remove invalid interactions (more options)”**: Removes interactions that are not significant interactions (at the process end).  
  
**“Core numbers”**: Defines the number of cores for parallel processing.  
##### 2.2.	Visualizations
In MHiC, we develop a visualization section. This section implemented as HTML pages to show Hi-C interaction as Heatmap diagram or Arc diagram.
- **Arc Diagram**  
Arc Diagram only works on cis interactions and use circular nodes to show Locus positions, and for each interaction, this diagram draws an Arc link between two nodes. In this diagram, the number of interacting reads between two regions impacts on Arc link Thickness. In this diagram, we provide some options to create more accurate diagrams . Also, users can change some options such as node and link colors. 
Also, users can select a particular node (locus position) or link (interaction between two regions) to show pieces of information about that locus or interaction.

  The other option that we provided is zoom in. this options allow users to show interactions and locus between two particular positions. In other words, users can zoom in and show limited regions. 

  Along with the zoom in, we developed an option to set read counts and visualize Hi-C interactions that only have more read counts than the option value.

  The other main element is the annotation files’ visualization. In this part, users can import different annotation files to show on top of the Arc diagram. 
- **Contact map diagram**  
Contact map diagram draws a Heatmap of interactions. The Heatmap can show interactions within a single chromosome or multiple chromosomes. As well as Arc Diagram, users can import different annotation files to show on top of the Arc diagram. Also, users can set read counts, so interactions that have more read counts value visualizes in red or aother color that user selects. 
