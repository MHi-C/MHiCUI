/**
 * Created by saman on 5/30/2018.
 */
var datasets={};
var bindataset= {};
var max=[];
var level=[];
var margin =40,
    pad = margin / 2;
var i,
    width = $("#diagram").width(),
    height = ($("#diagram").height);

var minvalue=0;
var zoom = d3.behavior.zoom()
    .scaleExtent([0.1, 10])
    .on("zoom", zoomed);
var svg = d3.select("#diagram").append("svg")
    .attr("id", "heatmap")
    .attr("width", width)
    .attr("height", height)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-1500 -200 2800 2800")
    .classed("svg-content", true)
    .call(zoom);

var y1;
function zoomed() {
    plot.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}



function Importfile() {

    var f = document.getElementById('hmyFile').files[0];
    $.mobile.loading( 'show', {
        text: '',
        textVisible: true,
        theme: 'z',
        html: ""
    });
    d3.select("#plot").remove();
    $('#rslider-1a').slider('disable');
    $('#rslider-1b').slider('disable');
    for(i=1;i<23;i++){
        $('#chr'+i).remove();
    }
    $('#chrx').remove();
    $('#chry').remove();
    if (f) {
        if(f.name.match(".csv")){

            gethic(f);
        }
        else{alert("input format error")}

    } else {
        alert("Failed to load file");
    }

}


function gethic(file){
    var x;
    Papa.parse(file,{
        header: true,
        dynamicTyping: true,
        complete: function(results) {
           // console.log(results);

            use(results);


        }});


}


function use(hicd){
    var rawdata = hicd;

    var rawdata1= [],
        rawdata2= [],
        rawdata3= [],
        rawdata4= [],
        rawdata5= [],
        rawdata6= [],
        rawdata7= [],
        rawdata8= [],
        rawdata9= [],
        rawdata10= [],
        rawdata11= [],
        rawdata12= [],
        rawdata13= [],
        rawdata14= [],
        rawdata15= [],
        rawdata16= [],
        rawdata17= [],
        rawdata18= [],
        rawdata19= [],
        rawdata20= [],
        rawdata21= [],
        rawdata22= [],
        rawdatax= [],
        rawdatay= [];

    var c1= 0,
        c2= 0,
        c3= 0,
        c4= 0,
        c5= 0,
        c6= 0,
        c7= 0,
        c8= 0,
        c9= 0,
        c10= 0,
        c11= 0,
        c12= 0,
        c13= 0,
        c14= 0,
        c15= 0,
        c16= 0,
        c17= 0,
        c18= 0,
        c19= 0,
        c20= 0,
        c21= 0,
        c22= 0,
        cx= 0,
        cy= 0;
    //console.log(rawdata);
    for(i=0 ; i<rawdata.data.length;i++){


        if(rawdata.data[i].chr1 == rawdata.data[i].chr2){'['
            if(rawdata.data[i].chr1 == "chr1"){
                if($("#chr1").length == 0){$("#select-chr").append('<option value=1 id="chr1" ">Chromosme 1</option>');}
                rawdata1[c1]=rawdata.data[i]
                c1++;
            }
            if(rawdata.data[i].chr1 == "chr2"){
                if($("#chr2").length == 0){$("#select-chr").append('<option value=2 id="chr2" ">Chromosme 2</option>');}
                rawdata2[c2]=rawdata.data[i]
                c2++;
            }
            if(rawdata.data[i].chr1 == "chr3"){
                if($("#chr3").length == 0){$("#select-chr").append('<option value=3 id="chr3" ">Chromosme 3</option>');}
                rawdata3[c3]=rawdata.data[i]
                c3++;
            }
            if(rawdata.data[i].chr1 == "chr4"){
                if($("#chr4").length == 0){$("#select-chr").append('<option value=4 id="chr4" ">Chromosme 4</option>');}
                rawdata4[c4]=rawdata.data[i]
                c4++;
            }



            if(rawdata.data[i].chr1 == "chr5"){
                if($("#chr5").length == 0){$("#select-chr").append('<option value=5 id="chr5" ">Chromosme 1</option>');}
                rawdata5[c5]=rawdata.data[i]
                c5++;
            }
            if(rawdata.data[i].chr1 == "chr6"){
                if($("#chr6").length == 0){$("#select-chr").append('<option value=6 id="chr6" ">Chromosme 6</option>');}
                rawdata6[c6]=rawdata.data[i]
                c6++;
            }
            if(rawdata.data[i].chr1 == "chr7"){
                if($("#chr7").length == 0){$("#select-chr").append('<option value=7 id="chr7" ">Chromosme 7</option>');}
                rawdata7[c7]=rawdata.data[i]
                c7++;
            }
            if(rawdata.data[i].chr1 == "chr8"){
                if($("#chr8").length == 0){$("#select-chr").append('<option value=8 id="chr8" ">Chromosme 8</option>');}
                rawdata8[c8]=rawdata.data[i]
                c8++;
            }




            if(rawdata.data[i].chr1 == "chr9"){
                if($("#chr9").length == 0){$("#select-chr").append('<option value=9 id="chr9" ">Chromosme 9</option>');}
                rawdata9[c9]=rawdata.data[i]
                c9++;
            }
            if(rawdata.data[i].chr1 == "chr10"){
                if($("#chr10").length == 0){$("#select-chr").append('<option value=10 id="chr10" ">Chromosme 10</option>');}
                rawdata10[c10]=rawdata.data[i]
                c10++;
            }
            if(rawdata.data[i].chr1 == "chr11"){
                if($("#chr11").length == 0){$("#select-chr").append('<option value=11 id="chr11" ">Chromosme 11</option>');}
                rawdata11[c11]=rawdata.data[i]
                c11++;
            }
            if(rawdata.data[i].chr1 == "chr12"){
                if($("#chr12").length == 0){$("#select-chr").append('<option value=12 id="chr12" ">Chromosme 12</option>');}
                rawdata12[c12]=rawdata.data[i]
                c12++;
            }


            if(rawdata.data[i].chr1 == "chr13"){
                if($("#chr13").length == 0){$("#select-chr").append('<option value=13 id="chr13" ">Chromosme 13</option>');}
                rawdata13[c13]=rawdata.data[i]
                c13++;
            }
            if(rawdata.data[i].chr1 == "chr14"){
                if($("#chr14").length == 0){$("#select-chr").append('<option value=14 id="chr14" ">Chromosme 14</option>');}
                rawdata14[c14]=rawdata.data[i]
                c14++;
            }
            if(rawdata.data[i].chr1 == "chr15"){
                if($("#chr15").length == 0){$("#select-chr").append('<option value=15 id="chr15" ">Chromosme 15</option>');}
                rawdata15[c15]=rawdata.data[i]
                c15++;
            }
            if(rawdata.data[i].chr1 == "chr16"){
                if($("#chr16").length == 0){$("#select-chr").append('<option value=16 id="chr16" ">Chromosme 16</option>');}
                rawdata16[c16]=rawdata.data[i]
                c16++;
            }

            if(rawdata.data[i].chr1 == "chr17"){
                if($("#chr17").length == 0){$("#select-chr").append('<option value=17 id="chr17" ">Chromosme 17</option>');}
                rawdata17[c17]=rawdata.data[i]
                c17++;
            }
            if(rawdata.data[i].chr1 == "chr18"){
                if($("#chr18").length == 0){$("#select-chr").append('<option value=18 id="chr18" ">Chromosme 18</option>');}
                rawdata18[c18]=rawdata.data[i]
                c18++;
            }
            if(rawdata.data[i].chr1 == "chr19"){
                if($("#chr19").length == 0){$("#select-chr").append('<option value=19 id="chr19" ">Chromosme 19</option>');}
                rawdata19[c19]=rawdata.data[i]
                c19++;
            }
            if(rawdata.data[i].chr1 == "chr20"){
                if($("#chr20").length == 0){$("#select-chr").append('<option value=20 id="chr20" ">Chromosme 20</option>');}
                rawdata20[c20]=rawdata.data[i]
                c20++;
            }


            if(rawdata.data[i].chr1 == "chr21"){
                if($("#chr21").length == 0){$("#select-chr").append('<option value=21 id="chr21" ">Chromosme 21</option>');}
                rawdata21[c21]=rawdata.data[i]
                c21++;
            }
            if(rawdata.data[i].chr1 == "chr22"){
                if($("#chr22").length == 0){$("#select-chr").append('<option value=22 id="chr22" ">Chromosme 22</option>');}
                rawdata22[c22]=rawdata.data[i]
                c22++;
            }



            if(rawdata.data[i].chr1 == "chrx"){
                if($("#chrx").length == 0){$("#select-chr").append('<option value=23 id="chrx" ">Chromosme x</option>');}
                rawdatax[cx]=rawdata.data[i]
                cx++;
            }
            if(rawdata.data[i].chr1 == "chry"){
                if($("#chry").length == 0){$("#select-chr").append('<option value=24 id="chry" ">Chromosme y</option>');}
                rawdatay[cy]=rawdata.data[i]
                cy++;
            }
        }

    }

    //console.log(rawdata2);
    if($("#chr1").length != 0) {
        var d={};
        d.data=rawdata1;

        build(d,1);
    }
    if($("#chr2").length != 0) {
        var d2={};
        d2.data=rawdata2;
        //console.log(d2);
        build(d2,2);
    }
    if($("#chr3").length != 0) {
        var d3={};
        d3.data=rawdata3;
        build(d3,3);
    }
    if($("#chr4").length != 0) {
        var d4={};
        d4.data=rawdata4;
        build(d4,4);
    }
    if($("#chr5").length != 0) {
        var d5={};
        d5.data=rawdata5;
        build(d5,5);
    }
    if($("#chr6").length != 0) {
        var d6={};
        d6.data=rawdata6;
        build(d6,6);
    }
    if($("#chr7").length != 0) {
        var d7={};
        d7.data=rawdata7;
        build(d7,7);
    }
    if($("#chr8").length != 0) {
        var d8={};
        d8.data=rawdata8;
        build(d8,8);
    }if($("#chr9").length != 0) {
        var d9={};
        d9.data=rawdata9;
        build(d9,9);
    }if($("#chr10").length != 0) {
        var d10={};
        d10.data=rawdata10;
        build(d10,10);
    }if($("#chr11").length != 0) {
        var d11={};
        d11.data=rawdata11;
        build(d11,11);
    }
    if($("#chr12").length != 0) {
        var d12={};
        d12.data=rawdata12;
        build(d12,12);
    }if($("#chr13").length != 0) {
        var d13={};
        d13.data=rawdata13;
        build(d13,13);
    }if($("#chr14").length != 0) {
        var d14={};
        d14.data=rawdata14;
        build(d14,14);
    }if($("#chr15").length != 0) {
        var d15={};
        d15.data=rawdata15;
        build(d15,15);
    }if($("#chr16").length != 0) {
        var d16={};
        d16.data=rawdata16;
        build(d16,16);
    }if($("#chr17").length != 0) {
        var d17={};
        d17.data=rawdata17;
        build(d17,17);
    }if($("#chr18").length != 0) {
        var d18={};
        d18.data=rawdata18;
        build(d18,18);
    }if($("#chr19").length != 0) {
        var d19={};
        d19.data=rawdata19;
        build(d19,19);
    }if($("#chr20").length != 0) {
        var d20={};
        d20.data=rawdata20;
        build(d20,20);
    }if($("#chr21").length != 0) {
        var d21={};
        d21.data=rawdata21;
        build(d21,21);
    }if($("#chr22").length != 0) {
        var d22={};
        d22.data=rawdata22;
        build(d22,22);
    }if($("#chrx").length != 0) {
        var dx={};
        dx.data=rawdatax;
        build(dx,23);
    }if($("#chry").length != 0) {
        var dy={};
        dy.data=rawdatay;
        build(dy,24);
    }
}



function build(hicdata,id){
    //console.log(hicdata);
    var pos=[];
    var interaction=[];
    var dataset={};
    for(i=0;i<hicdata.data.length;i++) {
        if(hicdata.data[i].locus1 != undefined ||hicdata.data[i].locus2 != undefined || hicdata.data[i].readCount != undefined ){
            interaction[i] = {
                "source": hicdata.data[i].locus1,
                "target":hicdata.data[i].locus2,
                "value": hicdata.data[i].readCount,
                "valid": hicdata.data[i].valid
            };}
    }

    dataset.interaction=interaction;
    //console.log(links);
    max[id] = getMax(dataset.interaction)

    var m=0;
    var poss=[];

    for(j in hicdata.data){

        if(hicdata.data[j].locus1 != undefined){
            poss[m] =hicdata.data[j].locus1;
        }
        m++;
    }
    m=m+1;
    for(j in hicdata.data){

        if(hicdata.data[j].locus2 != undefined){
            poss[m] =hicdata.data[j].locus2;
        }
        m++;
    }
    var uni=poss.unique();
    level[id] = uni[2]-uni[1]
    i=0;
    for(k=0;k<=uni.length;k++){
        if(uni[k] != undefined  ){
            pos[i] = {
                "name": uni[k]
            };}
        i++
    }
    dataset.pos=pos;
    // map interacyions to positions
    dataset = maplinks(dataset);
    datasets[id]=dataset;
    datasets[id].id=id;
    //console.log(level);
    //console.log(datasets);
    if($("#select-chr").val()==id){

        heatmap(datasets[id],id)
    }


}






var colors = ["#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58","black"];
//var colors = ['#005824','#1A693B','#347B53','#4F8D6B','#699F83','#83B09B','#9EC2B3','#B8D4CB','#D2E6E3','#EDF8FB','#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];
var plot = svg.append("g")
var c;

var maxvalue;
function heatmap(data,id){

    var colorindex=[];
    maxvalue=data.interaction[0].value
    for(i in data.interaction){
        if(data.interaction[i].value>maxvalue){
            maxvalue=data.interaction[i].value;
        }
    }
    c =Math.floor(maxvalue/(colors.length-1));
    var j=0;
    for(i=0;i<=maxvalue;i=i+c){
        colorindex[j]=i;
        j=j+1;
    }
    colorindex[0]=minvalue;
    //console.log(colorindex);
    var heatmappositions=[];
    var lev= max[id]/level[id];
    var  gridSize = Math.floor((width*2) / lev);
    if(gridSize<0.5){gridSize=0.5}
    for(i=0;i<=lev;i++ ){
        heatmappositions[i]= i*level[id]
    }

    var int=rc(data,heatmappositions)
    //console.log(int)
    plot.append("g")
        .attr("id", "plot")
        .attr("transform", "translate(" + pad + ", " + pad + ")");


    //console.log(int1);
    //console.log(int2);
    var maxp= getMax(int)
    position(heatmappositions,gridSize);

    showheatmap(int,heatmappositions,gridSize,colorindex,maxp);

    $.mobile.loading().hide();
}

function rc(interactions,heatmappositions){

    var int=[];
    var src;
    var tar;
for(i in interactions.interaction){
    for(j in heatmappositions){
        if (interactions.interaction[i].source == heatmappositions[j] ){
            src=j;
        }
    }
    for(k in heatmappositions){
        if (interactions.interaction[i].target == heatmappositions[k] ){
            tar=k;
        }
    }
    if(interactions.interaction[i].value != undefined){
    int[i] = {
        "source": src,
        "target":tar,
        "value": interactions.interaction[i].value,
        "valid":interactions.interaction[i].valid
    };}
}
    for(i in interactions.interaction){

    }
    return int
}


var legentsize;
function position(pos,gridSize){
    var maxint= pos.length;
    var tp= Math.floor(maxint/60);
    var tt= (tp/2);
    legentsize= tt;
    //console.log(pos)
    //console.log(gridSize)
    var p= d3.select("#plot").selectAll(".rows")
        .data(pos)
        .enter()
        .append("text")
        .attr("class", "rows")
        .attr("id", function (d, i) { return i})
        .text( function (d, i) { return d})
        .attr("x", -10)
        .attr("y", function (d, i) { return i * gridSize; })
        .style("text-anchor", "end")
        .style("fill", function (d, i) { if(i%(10*tp)!=0){

            return "none"}

            else if(i%(10*tp)==0){   var line3=  d3.select("#plot").append("line")
            .attr("x1", -2)
            .attr("y1", i*gridSize)
            .attr("x2", -8)
            .attr("y2",i*gridSize)
            .attr("stroke-width", 2)
            .attr("stroke", "black");
            return "black"
        }
        })
        .style("font-size", function(d) {
            var mintt=14*tt;
            if(mintt>80){mintt=80;}
            if(mintt<40){mintt=40;}
            return mintt})
        .attr("transform", "translate(-6," + gridSize / 1.5 + ")");

    var p1= d3.select("#plot").selectAll(".cols")
        .data(pos)
        .enter()
        .append("text")
        .attr("class", "cols")
        .attr("id", function (d, i) { return i})
        .text( function (d, i) { return d})
        .attr("x",function(d, i) { return i * gridSize; })
        .attr("y",-10)
        .style("text-anchor", "middle")
        .style("fill",  function (d, i) { if(i%(10*tp)!=0){

            return "none"}
        else if(i%(10*tp)==0){   var line4=  d3.select("#plot").append("line")
            .attr("x1", i*gridSize)
            .attr("y1", -2)
            .attr("x2", i*gridSize)
            .attr("y2",-8)
            .attr("stroke-width", 2)
            .attr("stroke", "black");

            if(i%(20*tp)==0){
                return "black"
            }
            else{
                return "none"
            }
        }

        } )
        .style("font-size", function(d) { var mintt=14*tt;
            if(mintt>80){mintt=80;}
            if(mintt<40){mintt=40;}
            return mintt})
        .attr("transform", "translate(" + gridSize / 2 + ", -6)");
    var line1=  d3.select("#plot").append("line")
        .attr("x1", -5)
        .attr("y1", 0)
        .attr("x2", -5)
        .attr("y2",maxint*gridSize)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    var line2=  d3.select("#plot").append("line")
        .attr("x1",0 )
        .attr("y1", -5)
        .attr("x2", maxint*gridSize)
        .attr("y2",-5)
        .attr("stroke-width", 2)
        .attr("stroke", "black");


    var line5=  d3.select("#plot").append("line")
        .attr("x1", maxint*gridSize+5)
        .attr("y1", 0)
        .attr("x2",maxint*gridSize+5)
        .attr("y2",maxint*gridSize)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    var line6=  d3.select("#plot").append("line")
        .attr("x1",0 )
        .attr("y1", maxint*gridSize+5)
        .attr("x2", maxint*gridSize)
        .attr("y2",maxint*gridSize+5)
        .attr("stroke-width", 2)
        .attr("stroke", "black");





    d3.select("#plot").append("line")
        .attr("x1", -4)
        .attr("y1", maxint*gridSize)
        .attr("x2", -8)
        .attr("y2",maxint*gridSize)
        .attr("stroke-width", 2)
        .attr("stroke", "black");
    d3.select("#plot").append("line")
        .attr("x1", maxint*gridSize)
        .attr("y1", -4)
        .attr("x2", maxint*gridSize)
        .attr("y2",-8)
        .attr("stroke-width", 2)
        .attr("stroke", "black");
}
function showheatmap(data,heatmappositions,gridSize,colorindex,maxp){
    var data1=[];
    var temp=[];
    var l=0;
    var k=0;
    var maxint= heatmappositions.length;
    var tp= Math.floor(maxint/60);


    if((maxint*maxint)<=6000){
  for(i=0;i<=maxp;i++){
      for(j=0;j<=maxp;j++) {
          temp[k] = {
              "source": i,
              "target": j
          };
          k=k+1;
      }
  }

    for(i=0;i<temp.length;i++){
        for(j=0;j<data.length;j++) {
            if(temp[i].source==data[j].source && temp[i].target==data[j].target || temp[i].source==data[j].target && temp[i].target==data[j].source) {
                temp[i].source="c";
            }
        }
    }
    for(i=0;i<temp.length;i++){

            if(temp[i].source!="c") {
                data1[l]={
                    "source": temp[i].source,
                    "target":temp[i].target
                };
                l=l+1
            }

    }
    temp=1;
    }



       var l1 = parseInt(data.length / 1000);
        var l2 = (data.length % 1000);

        var int1 = new Array(l1) ;
        var int2 = [];
        for (k = 0; k < l1; k++) {
            int1[k]=new Array(1000)
        }
        for (k = 0; k < l1; k++) {
            for (i = 0; i < 1000; i++) {
                int1[k][i] = data[i+(1000*k)]
            }
        }

        for (m = 0; m < l2; m++) {

            int2[m] = data[1000 + m]
        }
    //console.log(l1)
    //console.log(int1)
        for(f = 0; f < l1; f++){
            var heat = d3.select("#plot").selectAll(".rheats")
                .data(int1[f])
                .enter()
                .append("rect")
                .attr("class","rheats")
                .attr("id", function (d) {
                    return d.valid
                })
                .attr("x", function (d) {
                    return (parseFloat(d.source) ) * gridSize;
                })
                .attr("y", function (d) {
                    return (parseFloat(d.target) ) * gridSize;
                })
                .attr("rx", 4)
                .attr("ry", 4)
                .attr("width", gridSize)
                .attr("height", gridSize)
                .style("fill",function (d) {

                    for (k = 0; k < colorindex.length; k = k + 1) {

                        if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                            return colors[k];
                        }
                        if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                            return colors[colorindex.length - 1]
                        }
                        if (d.value < minvalue && d.value >= 0) {
                            return "white"
                        }
                    }
                })
                .on("mouseover", function (d, i) {
                    d3.select(this)
                        .style('fill', "red");

                })
                .on("mouseout", function (d, i) {
                    d3.select(this)
                        .style('fill', function (d) {

                            for (k = 0; k < colorindex.length; k = k + 1) {

                                if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                                    return colors[k];
                                }
                                if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                                    return colors[colorindex.length - 1]
                                }
                                if (d.value < minvalue && d.value >= 0) {
                                    return "white"
                                }

                            }
                        })
                    d3.select("#plot").selectAll('.rows')
                        .filter(function (b) {
                            return parseFloat(this.id) == parseFloat(d.target)
                        })
                        .style("fill", function (d, i) {
                            if (parseFloat(this.id) % (10 * tp) != 0) {
                                return "none"
                            }
                        });
                    d3.select("#plot").selectAll('.cols')
                        .filter(function (b) {
                            return parseFloat(this.id) == parseFloat(d.source)
                        })
                        .style("fill", function (d, i) {
                            if (parseFloat(this.id) % (20 * tp) != 0) {
                                return "none"
                            }
                        });
                });

            var heat1 = d3.select("#plot").selectAll(".lheats")
                .data(int1[f])
                .enter()
                .append("rect")
                .attr("class","lheats")
                .attr("id", function (d) {
                    return d.valid
                })
                .attr("x", function (d) {
                    return (parseFloat(d.target) ) * gridSize;
                })
                .attr("y", function (d) {
                    return (parseFloat(d.source) ) * gridSize;
                })
                .attr("rx", 4)
                .attr("ry", 4)
                .attr("width", gridSize)
                .attr("height", gridSize)
                .style("fill",  function (d) {

                    for (k = 0; k < colorindex.length; k = k + 1) {

                        if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                            return colors[k];
                        }
                        if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                            return colors[colorindex.length - 1]
                        }
                        if (d.value < minvalue && d.value >= 0) {
                            return "white"
                        }
                    }
                })
                .on("mouseover", function (d, i) {
                    d3.select(this)
                        .style('fill', "red");

                })
                .on("mouseout", function (d, i) {
                    d3.select(this)
                        .style('fill', function (d) {

                            for (k = 0; k < colorindex.length; k = k + 1) {

                                if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                                    return colors[k];
                                }
                                if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                                    return colors[colorindex.length - 1]
                                }
                                if (d.value < minvalue && d.value >= 0) {
                                    return "white"
                                }
                            }
                        })
                    d3.select("#plot").selectAll('.rows')
                        .filter(function (b) {
                            return parseFloat(this.id) == parseFloat(d.source)
                        })
                        .style("fill", function (d, i) {
                            if (parseFloat(this.id) % (10 * tp) != 0) {
                                return "none"
                            }
                        });
                    d3.select("#plot").selectAll('.cols')
                        .filter(function (b) {
                            return parseFloat(this.id) == parseFloat(d.target)
                        })
                        .style("fill", function (d, i) {
                            if (parseFloat(this.id) % (20 * tp) != 0) {
                                return "none"
                            }
                        });
                });
        }

        var heat = d3.select("#plot").selectAll(".rheats1")
            .data(int2)
            .enter()
            .append("rect")
            .attr("class", "rheats1")
            .attr("id", function (d) {
                return d.valid
            })
            .attr("x", function (d) {
                return (parseFloat(d.source) ) * gridSize;
            })
            .attr("y", function (d) {
                return (parseFloat(d.target) ) * gridSize;
            })
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("fill", function (d) {

                for (k = 0; k < colorindex.length; k = k + 1) {

                    if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                        return colors[k];
                    }
                    if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                        return colors[colorindex.length - 1]
                    }
                    if (d.value < minvalue && d.value >= 0) {
                        return "white"
                    }
                }

            })
            .on("mouseover", function (d, i) {
                d3.select(this)
                    .style('fill', "red");

            })
            .on("mouseout", function (d, i) {
                d3.select(this)
                    .style('fill', function (d) {

                        for (k = 0; k < colorindex.length; k = k + 1) {

                            if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                                return colors[k];
                            }
                            if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                                return colors[colorindex.length - 1]
                            }
                            if (d.value < minvalue && d.value >= 0) {
                                return "white"
                            }

                        }
                    })
                d3.select("#plot").selectAll('.rows')
                    .filter(function (b) {
                        return parseFloat(this.id) == parseFloat(d.target)
                    })
                    .style("fill", function (d, i) {
                        if (parseFloat(this.id) % (10 * tp) != 0) {
                            return "none"
                        }
                    });
                d3.select("#plot").selectAll('.cols')
                    .filter(function (b) {
                        return parseFloat(this.id) == parseFloat(d.source)
                    })
                    .style("fill", function (d, i) {
                        if (parseFloat(this.id) % (20 * tp) != 0) {
                            return "none"
                        }
                    });
            });

        var heat1 = d3.select("#plot").selectAll(".lheats1")
            .data(int2)
            .enter()
            .append("rect")
            .attr("class", "lheats1")
            .attr("id", function (d) {
                return d.valid
            })
            .attr("x", function (d) {
                return (parseFloat(d.target) ) * gridSize;
            })
            .attr("y", function (d) {
                return (parseFloat(d.source) ) * gridSize;
            })
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("fill", function (d) {

                for (k = 0; k < colorindex.length; k = k + 1) {

                    if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                        return colors[k];
                    }
                    if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                        return colors[colorindex.length - 1]
                    }
                    if (d.value < minvalue && d.value >= 0) {
                        return "white"
                    }
                }

            })
            .on("mouseover", function (d, i) {
                d3.select(this)
                    .style('fill', "red");

            })
            .on("mouseout", function (d, i) {
                d3.select(this)
                    .style('fill', function (d) {

                        for (k = 0; k < colorindex.length; k = k + 1) {

                            if (d.value >= colorindex[k] && d.value < colorindex[k + 1]) {
                                return colors[k];
                            }
                            if (d.value <= maxvalue && d.value > colorindex[colorindex.length - 1]) {
                                return colors[colorindex.length - 1]
                            }
                            if (d.value < minvalue && d.value >= 0) {
                                return "white"
                            }
                        }
                    })
                d3.select("#plot").selectAll('.rows')
                    .filter(function (b) {
                        return parseFloat(this.id) == parseFloat(d.source)
                    })
                    .style("fill", function (d, i) {
                        if (parseFloat(this.id) % (10 * tp) != 0) {
                            return "none"
                        }
                    });
                d3.select("#plot").selectAll('.cols')
                    .filter(function (b) {
                        return parseFloat(this.id) == parseFloat(d.target)
                    })
                    .style("fill", function (d, i) {
                        if (parseFloat(this.id) % (20 * tp) != 0) {
                            return "none"
                        }
                    });
            });

    if((maxint*maxint)<=6000) {
        var heat2 = d3.select("#plot").selectAll(".nheats")
            .data(data1)
            .enter()
            .append("rect")
            .attr("class", "nheats")
            .attr("x", function (d) {
                return (parseFloat(d.target) ) * gridSize;
            })
            .attr("y", function (d) {
                return (parseFloat(d.source) ) * gridSize;
            })
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("fill", "white")
            .on("mouseover", function (d, i) {
                d3.select(this)
                    .style('fill', "red");


            })
            .on("mouseout", function (d, i) {
                d3.select(this)
                    .style('fill', "white")
                d3.select("#plot").selectAll('.rows')
                    .filter(function (b) {
                        return parseFloat(this.id) == parseFloat(d.source)
                    })
                    .style("fill", function (d, i) {
                        if (parseFloat(this.id) % (10*tp) != 0) {
                            return "none"
                        }
                    });
                d3.select("#plot").selectAll('.cols')
                    .filter(function (b) {
                        return parseFloat(this.id) == parseFloat(d.target)
                    })
                    .style("fill", function (d, i) {
                        if (parseFloat(this.id) % (20*tp) != 0) {
                            return "none"
                        }
                    });
            });
    }
    addlegends(gridSize,maxp,colorindex);
}


function addlegends(gridSize,max,colorindex){

    var lm;
    if(gridSize >20 && gridSize <35){
        lm=gridSize
    }
    else if(gridSize>=35){
        lm=35
    }
    else{lm=15+gridSize}
var legendElementWidth= lm*3;
var legend = d3.select("#plot").selectAll(".legend")
    .data(colorindex)
    .enter().append("g")
    .attr("class", "legend");
 console.log(legend)
legend.append("rect")
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", function(d, i) { return ((max*gridSize)+(2*lm)); })
    .attr("width", legendElementWidth)
    .attr("height", lm)
    .style("fill", function(d, i) { return colors[i]; });

legend.append("text")
    .attr("class", "mono")
    .text(function(d) { return d; })
    .attr("width", legendElementWidth)
    .style("font-size", function(d) {
        var mintt=14*legentsize;
        if(mintt>80){mintt=80;}
        if(mintt<56){mintt=56;}
        return mintt})
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .style("fill", function(d, i) { if(i%2==1){return "none" }})
    .attr("y",  function(d, i) { return ((max*gridSize)+(4*lm)+18); });
}
function getMax(arr) {
    var max1=parseFloat(arr[0].source);
    for (var i=1 ; i<arr.length ; i++) {
        if (max1 < parseFloat(arr[i].source)){
            max1 = parseFloat(arr[i].source);}
    }
    var max2=parseFloat(arr[0].target);
    for (var i=1 ; i<arr.length ; i++) {
        if (max2 < parseFloat(arr[i].target)){
            max2 = parseFloat(arr[i].target);}
    }
    if(max1>max2){
        return max1;}
    else{return max2;}
}
Array.prototype.unique = function() {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}
function maplinks(data){
    for(i in data.links){
        for(j in data.nodes){
            if(data.links[i].source==data.nodes[j].name){
                data.links[i].source=Number(j);
                break;
            }
        }
        for(j in data.nodes){
            if(data.links[i].target==data.nodes[j].name){
                data.links[i].target=Number(j);
                break;
            }
        }
    }
    return data;
}


function saves(a) {
    if (a == 1) {
        if (confirm("Save diagram as svg file:")) {
            var config = {
                filename: 'diagram'
            }
            d3_save_svg.save(d3.select('svg').node(), config);
        }
    }
    else {
        if (confirm("Save diagram as png file:")) {

            saveSvgAsPng(document.getElementById("heatmap"), "diagram.png",{scale: 10});

        }
    }

}
function chr(){
    d3.select("#plot").remove();
    var id =$("#select-chr").val();
    datasets[id];
    //console.log(datasets[id]);
    //console.log(id);
    heatmap(datasets[id],id);

}
function resets(){
    d3.select("#plot").remove();
    var id =$("#select-chr").val();
    heatmap(datasets[id],id);
}


function readcounts(){
    d3.select("#plot").remove();
    countsvalue=document.getElementById("reads").value;
    var id =$("#select-chr").val();
    minvalue=countsvalue;
    heatmap(datasets[id],id);
}

function valid(){


    d3.select("#plot").selectAll(".rheats")
        .filter(function(d){if(this.id==1){return this}
             })
        .style("fill", "red");
    d3.select("#plot").selectAll(".lheats")
        .filter(function(d){if(this.id==1){return this}
        })
        .style("fill", "red");
    d3.select("#plot").selectAll(".rheats1")
        .filter(function(d){if(this.id==1){return this}
        })
        .style("fill", "red");
    d3.select("#plot").selectAll(".lheats1")
        .filter(function(d){if(this.id==1){return this}
        })
        .style("fill", "red");
}