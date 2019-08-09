
var i,
    width = $("#diagram").width()
height = $("#diagram").height()
margin =40,
    pad = margin / 2,
    radius=4,
    yfixed = (pad + radius);
var nodecolor = "orange";
var intercolor = "black";
var selectedcolor="red";
var zoom = d3.behavior.zoom()
    .scaleExtent([0.3, 10])
    .on("zoom", zoomed);
var svg = d3.select("#diagram").append("svg")
    .attr("id", "arc")
    .attr("width", width)
    .call(zoom)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", ' '+ -($("#diagram").width()/2) +' -200 ' + ($("#diagram").width()*2) + ' ' + ($("#diagram").height()*2+300))
    .classed("svg-content", true)
    .attr("height", height);

var y1;
function zoomed() {
    plot.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
function addTooltip(circle,i,m) {

    var x = parseFloat(circle.attr("cx"))+i;
    var y = parseFloat(circle.attr("cy"));
    var r = parseFloat(circle.attr("r"));
    var text = circle.attr("id");
    y1=y;
    if(x<=0){x=x-i;
    }
    var tooltip = d3.select("#plot")
        .append("text")
        .text(text)
        .attr("x", x)
        .style("font-size", "25px")
        .attr("y", y)
        .attr("dy", -r * 2)
        .attr("id", "tooltip");


    var offset = tooltip.node().getBBox().width / 2;

    if ((x - offset) < 0) {
        tooltip.attr("text-anchor", "start");
        tooltip.attr("dx", -r);
    }
    else if ((x + offset) > (width - margin)) {
        tooltip.attr("text-anchor", "end");
        tooltip.attr("dx", r);
    }
    else {
        tooltip.attr("text-anchor", "middle");
        tooltip.attr("dx", 0);
    }

    if(m==1){ tooltip.attr("id", "tooltipc");
    }

}
function addlinkTooltip(link,id) {
    var x =(((parseFloat(link.source.x)+parseFloat(link.target.x))-radius)/2)-5;
    var y = parseFloat(link.source.y)+(((parseFloat(link.target.x)-parseFloat(link.source.x))-radius)/2)-2;
    var h=parseFloat(y1);
    var text = link.value;

    if(id==0) {
        var tooltip = d3.select("#plot")
            .append("text")
            .text(text)
            .attr("x", x)
            .attr("y", y)
            .style("font-size", "25px")
            .attr("id", "tooltipz");
    }
    else{
        if(id==1) {
            d3.select("#plot").selectAll("#tooltip")
                .attr("y", h);
        }


        var tooltip = d3.select("#plot")
            .append("text")
            .text(text)
            .attr("x", x)
            .attr("y", y)
            .attr("id", "tooltips");
        if(id==1){
            d3.select("#plot").selectAll("#tooltip")
                .attr("id", "tooltip1");
            d3.select("#plot").selectAll("#tooltips")
                .attr("id", "tooltip1");
        }
    }

}

var plot = svg.append("g")
function arc(graph){

    plot.append("g")
        .attr("id", "plot")
        .attr("transform", "translate(" + pad + ", " + pad + ")");

    var max= maxs(graph.nodes);
    $('#rslider-1a').slider('enable');
    $('#rslider-1b').slider('enable');
    d3.select("#rslider-1a")
        .attr("max",max)
        .attr("min",graph.nodes[0].name)
        .attr("value",graph.nodes[0].name );
    d3.select("#rslider-1b")
        .attr("max",max)
        .attr("min",graph.nodes[0].name)
        .attr("value",max);


    graph.links.forEach(function(d, i) {
        d.source = isNaN(d.source) ? d.source : graph.nodes[d.source];
        d.target = isNaN(d.target) ? d.target : graph.nodes[d.target];
    });
    graph.nodes= linearLayout(graph.nodes);
    drawLinks(graph.links);
    drawNodes(graph.nodes);
    //console.log(d3.select("#plot"));
    adata=graph;

    // addchr();
    $.mobile.loading().hide();
    //console.log(adata);

}


function linearLayout(nodes) {
    var xscale = d3.scale.linear()
        .domain([0,counts(nodes) - 1])
        .range([radius, 2000 - margin - radius]);

    for(i in nodes){
        nodes[i].x = xscale(i);
        nodes[i].y = yfixed;
    }

    //var count = counts(nodes);
    // console.log(nodes);
    return nodes;
}


function drawNodes(nodes) {
    // used to assign nodes color by group
    //var color = d3.scale.category20();

    nodes.sort(function(a, b) {
        return parseFloat(a.name) - parseFloat(b.name);
    });
//console.log(nodes);

    var maxint= nodes.length;
    var tp= Math.floor(maxint/60);


    var v= d3.select("#plot").selectAll(".node")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("id", function(d, i) { return d.name; })
        .attr("cx", function(d, i) { return d.x; })
        .attr("cy", function(d, i) { return d.y; })
        .attr("r",  function(d, i) { return radius; })
        .style('fill', nodecolor)
        .on("mouseover", function(d, i) {

            d3.selectAll("#tooltip1").style('fill', "none");
            d3.select("#plot").selectAll(".texts")
                .style('fill', "none");
            addTooltip(d3.select(this),0,0);
            var b = d3.select(this)
                .attr("r",radius+4)
                .style('fill', selectedcolor);
            if($(".lines") != undefined){

                var sh =d3.select("#plot").selectAll(".lines")
                sh=sh[0];
                for(j=0; j< sh.length;j++){
                    if(parseFloat(sh[j].id) == b.attr("id")){
                        $(".lines").filter(
                            function( index ) {
                                return $(this).attr("id")=== sh[j].id;
                            }
                        ).css({fill:selectedcolor});
                    }
                }

            }


            if($(".promoterrange") != undefined){

                var sh =d3.select("#plot").selectAll(".promoterrange")
                sh=sh[0];
                for(j=0; j< sh.length;j++){
                    if(parseFloat(sh[j].id) == b.attr("id")){
                        $(".promoterrange").filter(
                            function( index ) {
                                return $(this).attr("id")=== sh[j].id;
                            }
                        ).css({fill:selectedcolor});
                    }
                }

            }
        })
        .on('click', function(d, i) {
            d3.selectAll("#tooltip").remove();
            d3.selectAll("#tooltip1").remove();
            d3.selectAll("#tooltipz").remove();
            d3.selectAll("#tooltipc").remove();
            d3.select("#plot").selectAll(".texts")
                .style('fill', "none");
            addTooltip(d3.select(this),0,1);

            d3.select("#tooltip").attr("id","tooltip1");
            d3.select("#plot").selectAll(".texts")
                .attr("class", "texts1");
            d3.select("#plot").selectAll(".node")
                .style('fill', nodecolor);
            d3.select("#plot").selectAll(".link")
                .filter(function(b) {
                    return (b.source.name == d.name) || (b.target.name == d.name);
                })
                .style('stroke', selectedcolor);
            d3.select("#plot").selectAll(".link")
                .filter(function(b) {
                    return (b.source.name != d.name) && (b.target.name != d.name);
                })
                .attr("class","links")
                .style('fill', 'none')
                .style('stroke', 'none');
        })
        .on("mouseout",  function(d, i) {
            d3.selectAll("#tooltip1").style('fill', "black");
            d3.select("#plot").selectAll(".texts")
                .style('fill', "black");
            d3.select("#tooltip").remove();
            d3.select(this)
                .attr("r",radius)
                .style('fill', nodecolor);
            d3.select("#plot").selectAll(".lines")
                .style('fill', "none");
            d3.select("#plot").selectAll(".promoterrange")
                .style('fill', "none");

        });


    d3.select("#plot").selectAll(".texts").remove();


    d3.select("#plot").selectAll(".texts")
        .data(nodes)
        .enter()
        .append("text")
        .style("font-size", "30px")
        .attr("class", "texts")

        .filter(function(d,i) {
            if(nodes.length>4){
                return (i%(Math.floor(nodes.length/6))==0);
            }
            if(nodes.length<=4){

                return i%1==0;
            }

        })
        .text(function(d,i){
            if (d.name<1000000 && d.name>=1000){return  (d.name)/1000+"kb"}
            if (d.name>=1000000){return  (d.name)/1000000+"mb"}
            if (d.name<1000){return  (d.name)}
        })
        .attr("x", function(d,i){  return d.x})
        .attr("y", function(d,i){  return d.y})
        .attr("dy", function(d,i){ return -radius*2})
        .attr("text-anchor", "middle")
        .attr("id", "tooltipc");
    var text = $("#select-chr > option:selected").text();
    var addchr = d3.select("#plot")
        .append("text")
        .text(text)
        .attr("x", (900))
        .style("font-size", "35px")
        .attr("y", function(d,i){  var l= d3.select("#plot").selectAll(".link")[0];
            var max=0;
            for(i=0;i<l.length;i++) {
                var yt = parseFloat(l[i].__data__.source.y) + (((parseFloat(l[i].__data__.target.x) - parseFloat(l[i].__data__.source.x))) / 2) - 2;
                if(max<yt){max=yt}
            }
            return max+30;

        })
        .attr("id", "addchr");
}


function drawLinks(links) {
    // scale to generate radians (just for lower-half of circle)
    var w={};
    var k=0;
    var m=[];
    var n =[];
    for(i=0;i<links.length;i++){
        m[k]= links[i].value;
        k=k+1;
    }
    var li = m.unique();
    li=li.sort(function(a, b) { return a - b; });
    k=0;
    for(i=0;i<li.length;i++){
        n[k]= i*(12/li.length);
        k=k+1;
    }
    w.values=li;
    w.width=n;
    //console.log(w);
    var radians = d3.scale.linear()
        .range([Math.PI / 2, 3 * Math.PI / 2]);

    // path generator for arcs (uses polar coordinates)
    var arc = d3.svg.line.radial()
        .interpolate("basis")
        .tension(0)
        .angle(function(d) { return radians(d); });

    // add links
    d3.select("#plot").selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link")
        .style('stroke', intercolor)
        .attr("stroke-width", function(d,i){
            var x;
            for(j=0;j< w.values.length;j++){
                if(d.value==w.values[j]){
                    x = 1+((w.width[j]));
                }
            }
            //console.log(x);
            return x;
        })
        .attr("transform", function(d, i) {
            // arc will always be drawn around (0, 0)
            // shift so (0, 0) will be between source and target
            var xshift = d.source.x + (d.target.x - d.source.x) / 2;
            var yshift = yfixed;
            return "translate(" + xshift + ", " + yshift + ")";
        })
        .attr("d", function(d, i) {
            // get x distance between source and target
            var xdist = Math.abs(d.source.x - d.target.x);

            // set arc radius based on x distance
            arc.radius(xdist / 2);

            // want to generate 1/3 as many points per pixel in x direction
            var points = d3.range(0, Math.ceil(xdist / 3));

            // set radian scale domain
            radians.domain([0, points.length - 1]);

            // return path for arc
            return arc(points);
        })
        .on("mouseover",function(d,i){
            d3.select("#tooltip1").style('fill', "none");
            d3.select("#plot").selectAll(".texts")
                .style('fill', "none");
            d3.select("#plot").selectAll(".link")
                .filter(function(b,i){
                    if(d==b){ return b}
                })
                .style('stroke', selectedcolor);
            d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.source.name!= b.name || d.target.name!= b.name){ return b}
                })
                .style('fill', nodecolor);
            d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.source.name== b.name || d.target.name== b.name){ return b}
                })
                .style('fill', selectedcolor);
            addTooltip(d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.source.name== b.name){ return b}
                }),-30,0)
            addTooltip(d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.target.name== b.name){ return b}
                }),30,0)
            addlinkTooltip(d,0);
        })
        .on("click",function(d,i){
            d3.select("#plot").selectAll(".texts")
                .attr("class", "texts1")
            d3.selectAll("#tooltip1").remove();
            d3.select("#plot").selectAll(".link")
                .filter(function(b,i){
                    if(d!=b){ return b}
                })
                .attr("class","links")
                .style('fill', 'none')
                .style('stroke', 'none');
            d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.source.name!= b.name || d.target.name!= b.name){ return b}
                })
                .style('fill', nodecolor);
            d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.source.name== b.name || d.target.name== b.name){ return b}
                })
                .style('fill', selectedcolor);
            addlinkTooltip(d,1);

        })
        .on("mouseout",function(d,i){
            d3.select("#tooltip1").style('fill', "black");
            d3.select("#plot").selectAll(".texts")
                .style('fill', "black");
            d3.select("#plot").selectAll(".node")
                .filter(function(b,i){
                    if(d.source.name!= b.name || d.target.name!= b.name){ return b}
                })
                .style('fill', nodecolor);
            d3.select("#plot").selectAll(".link")
                .style('stroke', intercolor);
            d3.selectAll("#tooltip").remove();
            d3.selectAll("#tooltipz").remove();
        })

}

function counts(obj){
    var count=0;
    for (i in obj){
        count++;
    }
    return count;
}

function resets(){
    nodecolor = "orange";
    intercolor = "black";
    d3.select("#plot").remove();
    plot = svg.append("g")
    var id =$("#select-chr").val();
    arc(datasets[id]);
}
function remov(){

    d3.select("#plot").selectAll(".node")
        .style('fill', nodecolor);
    d3.select("#plot").selectAll(".link")
        .style('stroke', intercolor);
    d3.select("#plot").selectAll(".links")
        .attr("class","link")
        .style('stroke', intercolor);
    d3.selectAll("#tooltip").remove();
    d3.selectAll("#tooltip1").remove();
    d3.selectAll("#tooltipz").remove();
    d3.selectAll(".nodeid").remove();
    d3.selectAll(".texts1").attr("class", "texts")
        .style("fill","black");

}
function range(){
    range1=document.getElementById("rslider-1a").value;
    range2=document.getElementById("rslider-1b").value;

    //console.log();
    if(parseInt(range1,10)< parseInt(range2,10)){
        d3.select("#plot").selectAll(".node")
            .filter(function(d){
                return(d.name<=range2 && d.name>=range1)
            })
            .style('fill', selectedcolor);
        d3.select("#plot").selectAll(".node")
            .filter(function(d){
                return(d.name>range2 || d.name<range1)
            })
            .style('fill', nodecolor);
        d3.select("#plot").selectAll(".link")
            .filter(function(b) {
                return (b.source.name >= range1) && (b.target.name <= range2);
            })
            .style('stroke', selectedcolor);
        d3.select("#plot").selectAll(".link")
            .filter(function(b) {
                return (b.source.name < range1) || (b.target.name > range2);
            })
            .style('stroke', 'none');


    }
    else{alert("range1 < range2")}

}
function readcounts(){
    countsvalue=document.getElementById("reads").value;

    d3.select("#plot").selectAll(".link")
        .filter(function(b) {
            return (b.value >= countsvalue);
        })
        .style('stroke', 'black');
    removereadcounts();
}
function removereadcounts(){
    countsvalue=document.getElementById("reads").value;
    d3.select("#plot").selectAll(".link")
        .filter(function(b) {
            return (b.value < countsvalue);
        })
        .remove();

    var addchr = d3.select("#plot").select("#addchr")
        .attr("y", function(d,i){  var l= d3.select("#plot").selectAll(".link")[0];

            var max=0;
            for(i=0;i<l.length;i++) {
                var yt = parseFloat(l[i].__data__.source.y) + (((parseFloat(l[i].__data__.target.x) - parseFloat(l[i].__data__.source.x))) / 2) - 2;
                if(max<yt){max=yt}
            }
            return max+30;

        })


}
function maxs(node){
    var max=node[1].name;
    for(i in node){
        if(max < node[i].name){
            max=node[i].name}
    }
    return max
}
function selectzoom(){
    //console.log(adata);
    var range1=document.getElementById("rslider-1a").value;
    var range2=document.getElementById("rslider-1b").value;
    var x =adata.nodes.length;
    var y =adata.links.length;
    var zoom={};
    var znodes=[];
    var zlinks=[];
    var j=0;
    for(i=0; i<x ;i=i+1){
        if(adata.nodes[i].name >= parseInt(range1,10) && adata.nodes[i].name <= parseInt(range2,10)){
            znodes[j]=adata.nodes[i];
            j=j+1;
        }
    }
    j=0;
    for(i=0; i<y ;i=i+1){
        if(adata.links[i].source.name >= parseInt(range1,10) && adata.links[i].target.name <= parseInt(range2,10)){
            zlinks[j]=adata.links[i];
            j=j+1;
        }
    }
    zoom.nodes=znodes;
    zoom.links=zlinks;
    //console.log(zoom);


    d3.select("#plot").remove();

    plot = svg.append("g")
        .attr("id", "plot")
        .attr("transform", "translate(" + pad + ", " + pad + ")");
    var max= maxs(zoom.nodes);
    d3.select("#rslider-1a")
        .attr("max",max)
        .attr("min",zoom.nodes[0].name)
        .attr("value",zoom.nodes[0].name );
    d3.select("#rslider-1b")
        .attr("max",max)
        .attr("min",zoom.nodes[0].name)
        .attr("value",max);

    zoom.nodes= linearLayout(zoom.nodes);
    drawLinks(zoom.links);
    drawNodes(zoom.nodes);

    //addchr();
    removereadcounts();


}
//show each node value
function region(){

    var n= d3.select("#plot").selectAll(".node")
    n=n[0];
    //console.log(n);
    var l =0;
    for(j=0; j< n.length;j++){


        var x = parseFloat(n[j].attributes.cx.value);
        var y = parseFloat(n[j].attributes.cy.value);
        var r = parseFloat(n[j].attributes.r.value);
        var text = n[j].id;

        var tooltip = d3.select("#plot")
            .append("text")
            .text(text)
            .attr("x", x)
            .attr("y", y)
            .attr("dy", -r * 2)
            .attr("transform","translate(" +(x-(2*r))+ "," + (x+(r/2)) + ")rotate(-90)" )
            .attr("class", "nodeid")
            .attr("id", "nodeid"+l);

        var offset = tooltip.node().getBBox().width / 2;

        if ((x - offset) < 0) {
            tooltip.attr("text-anchor", "start");
            tooltip.attr("dx", -r);
        }
        else if ((x + offset) > (width - margin)) {
            tooltip.attr("text-anchor", "end");
            tooltip.attr("dx", r);
        }
        else {
            tooltip.attr("text-anchor", "middle");
            tooltip.attr("dx", 0);
        }
        l++;

    }

    d3.select("#nodeid0")
        .attr("dx",-16)

}

function chr(){
    d3.select("#plot").remove();
    var id =$("#select-chr").val();
    datasets[id];
    //console.log(datasets[id]);
    //console.log(id);
    arc(datasets[id]);
    selectzoom();

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

            saveSvgAsPng(document.getElementById("arc"), "diagram.png",{scale: 10});

        }
    }

}

function readcountscolor(){
    countsvalue=document.getElementById("reads").value;
    d3.select("#plot").selectAll(".link")
        .style('stroke', intercolor);
    d3.select("#plot").selectAll(".link")
        .filter(function(b) {
            return (b.value >= countsvalue);
        })
        .style('stroke', selectedcolor);


}
function nodescolor() {

    nodecolor = document.getElementById("nodecolor").value;

    d3.select("#plot").selectAll(".node")
        .style("fill",nodecolor);
}
function interactcolor(){
    intercolor = document.getElementById("interactioncolor").value;

    d3.select("#plot").selectAll(".link")
        .style("stroke",intercolor);
}
function selectcolor(){
    selectedcolor = document.getElementById("selectcolor").value;

}
function annotationcolor(){
    ancolor = document.getElementById("annotationcolor").value;

}