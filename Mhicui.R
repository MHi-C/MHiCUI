library(shiny)
library(FitHiC)
library(MHiC)

server <- function(input, output,sessions) {

  dl<-observeEvent(input$Run,{ 
    
    
    if(input$Method=="gothic"){
    model<-MHiC(input$Input,input$Digest,method= input$Method,
                sample_name=input$Name
                ,tools_name = input$Tools,res = input$Bin ,cistrans = input$Itypee,
                 parallel=input$Parallel, cores=input$cores,
                removeDiagonal=input$RemoveDiagonal,save = TRUE 
                , remove = input$RemoveInteraction
                )
    }
     else if(input$Method=="hicnorm"){
      model<-MHiC(input$Input,input$Digest,method= input$Method,
                  sample_name=input$Name
                  ,tools_name = input$Tools,res = input$Bin 
                  ,cistrans = input$Itypee
                  ,min_cov = input$mcoverage
                  ,min_len = input$mlength
                  ,min_gc = inputmgc
                  ,min_map = input$mmap
                  ,removeDiagonal=input$RemoveDiagonal,save = TRUE 
                  
      )
    }
   else if(input$Method=="fithic"){
      model<-MHiC(input$Input,input$Digest,method= input$Method,
                  sample_name=input$Name
                  ,tools_name = input$Tools
                  , biasfile=input$biasfile
                  , noOfPasses=input$passes
                  , noOfBins=input$Bins1
                  , mappabilityThreshold=input$mappability
                  , distUpThres=input$Upper
                  ,distLowThres=input$Lower
                  ,plots=input$Plots
      )
    }

    output$state <- renderText({
      "Operation Successfully Completed"
    })
  })
 
 
  
}

# Create MhiC Shiny app
shinyApp(ui = htmlTemplate("C:/Users/saman/WebstormProjects/Arcdiagram/MHiC.html" ,button = actionButton("Run", "Run"))
         , server=server)