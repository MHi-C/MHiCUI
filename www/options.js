var enhancerss={};
var prometerss={};
var ancolor= "#00FF00";



// prometer part
function readprometer() {

    var f = document.getElementById('prometer').files[0];
    //console.log(f)
    $.mobile.loading().show();
    if (f) {
        if(f.name.match(".csv") || f.name.match(".txt")){

            getprometer(f);
        }
        else{alert("input format error")}

    } else {
        alert("Failed to load file");
    }

}


function getprometer(file){

    Papa.parse(file,{
        header: false,
        dynamicTyping: true,
        complete: function(results) {
            //console.log(results);

            useprom(results);


        }});
}

function useprom(prometer){
    var rawdata = prometer;
    //console.log(prometer);
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

    for(i=0 ; i<rawdata.data.length;i++){


        if(rawdata.data[i][1] == "chr1"){
            rawdata1[c1]=rawdata.data[i]
            c1++;
        }
        if(rawdata.data[i][1] == "chr2"){
            rawdata2[c2]=rawdata.data[i]
            c2++;
        }
        if(rawdata.data[i][1] == "chr3"){
            rawdata3[c3]=rawdata.data[i]
            c3++;
        }
        if(rawdata.data[i][1]== "chr4"){
            rawdata4[c4]=rawdata.data[i]
            c4++;
        }



        if(rawdata.data[i][1] == "chr5"){
            rawdata5[c5]=rawdata.data[i]
            c5++;
        }
        if(rawdata.data[i][1] == "chr6"){
            rawdata6[c6]=rawdata.data[i]
            c6++;
        }
        if(rawdata.data[i][1] == "chr7"){
            rawdata7[c7]=rawdata.data[i]
            c7++;
        }
        if(rawdata.data[i][1] == "chr8"){
            rawdata8[c8]=rawdata.data[i]
            c8++;
        }




        if(rawdata.data[i][1] == "chr9"){
            rawdata9[c9]=rawdata.data[i]
            c9++;
        }
        if(rawdata.data[i][1] == "chr10"){
            rawdata10[c10]=rawdata.data[i]
            c10++;
        }
        if(rawdata.data[i][1] == "chr11"){
            rawdata11[c11]=rawdata.data[i]
            c11++;
        }
        if(rawdata.data[i][1] == "chr12"){
            rawdata12[c12]=rawdata.data[i]
            c12++;
        }


        if(rawdata.data[i][1] == "chr13"){
            rawdata13[c13]=rawdata.data[i]
            c13++;
        }
        if(rawdata.data[i][1] == "chr14"){
            rawdata14[c14]=rawdata.data[i]
            c14++;
        }
        if(rawdata.data[i][1]== "chr15"){
            rawdata15[c15]=rawdata.data[i]
            c15++;
        }
        if(rawdata.data[i][1] == "chr16"){
            rawdata16[c16]=rawdata.data[i]
            c16++;
        }

        if(rawdata.data[i][1] == "chr17"){
            rawdata17[c17]=rawdata.data[i]
            c17++;
        }
        if(rawdata.data[i][1] == "chr18"){
            rawdata18[c18]=rawdata.data[i]
            c18++;
        }
        if(rawdata.data[i][1] == "chr19"){
            rawdata19[c19]=rawdata.data[i]
            c19++;
        }
        if(rawdata.data[i][1] == "chr20"){
            rawdata20[c20]=rawdata.data[i]
            c20++;
        }


        if(rawdata.data[i][1] == "chr21"){
            rawdata21[c21]=rawdata.data[i]
            c21++;
        }
        if(rawdata.data[i][1] == "chr22"){
            rawdata22[c22]=rawdata.data[i]
            c22++;
        }



        if(rawdata.data[i][1] == "chrx" || rawdata.data[i][1] == "chrX"){
            rawdatax[cx]=rawdata.data[i]
            cx++;
        }
        if(rawdata.data[i][1] == "chry"|| rawdata.data[i][1] == "chrY"){
            rawdatay[cy]=rawdata.data[i]
            cy++;
        }
    }
    //console.log(rawdata20);
    if($("#chr1").length != 0) {
        var d={};
        d.data=rawdata1;
        buildprom(d,1);
    }
    if($("#chr2").length != 0) {
        var d2={};
        d2.data=rawdata2;
        //console.log(d2);
        buildprom(d2,2);
    }
    if($("#chr3").length != 0) {
        var d3={};
        d3.data=rawdata3;
        buildprom(d3,3);
    }
    if($("#chr4").length != 0) {
        var d4={};
        d4.data=rawdata4;
        buildprom(d4,4);
    }
    if($("#chr5").length != 0) {
        var d5={};
        d5.data=rawdata5;
        buildprom(d5,5);
    }
    if($("#chr6").length != 0) {
        var d6={};
        d6.data=rawdata6;
        buildprom(d6,6);
    }
    if($("#chr7").length != 0) {
        var d7={};
        d7.data=rawdata7;
        buildprom(d7,7);
    }
    if($("#chr8").length != 0) {
        var d8={};
        d8.data=rawdata8;
        buildprom(d8,8);
    }if($("#chr9").length != 0) {
        var d9={};
        d9.data=rawdata9;
        buildprom(d9,9);
    }if($("#chr10").length != 0) {
        var d10={};
        d10.data=rawdata10;
        buildprom(d10,10);
    }if($("#chr11").length != 0) {
        var d11={};
        d11.data=rawdata11;
        buildprom(d11,11);
    }
    if($("#chr12").length != 0) {
        var d12={};
        d12.data=rawdata12;
        buildprom(d12,12);
    }if($("#chr13").length != 0) {
        var d13={};
        d13.data=rawdata13;
        buildprom(d13,13);
    }if($("#chr14").length != 0) {
        var d14={};
        d14.data=rawdata14;
        buildprom(d14,14);
    }if($("#chr15").length != 0) {
        var d15={};
        d15.data=rawdata15;
        buildprom(d15,15);
    }if($("#chr16").length != 0) {
        var d16={};
        d16.data=rawdata16;
        buildprom(d16,16);
    }if($("#chr17").length != 0) {
        var d17={};
        d17.data=rawdata17;
        buildprom(d17,17);
    }if($("#chr18").length != 0) {
        var d18={};
        d18.data=rawdata18;
        buildprom(d18,18);
    }if($("#chr19").length != 0) {
        var d19={};
        d19.data=rawdata19;
        buildprom(d19,19);
    }if($("#chr20").length != 0) {
        var d20={};
        d20.data=rawdata20;
        buildprom(d20,20);
    }if($("#chr21").length != 0) {
        var d21={};
        d21.data=rawdata21;
        buildprom(d21,21);
    }if($("#chr22").length != 0) {
        var d22={};
        d22.data=rawdata22;
        buildprom(d22,22);
    }if($("#chrx").length != 0) {
        var dx={};
        dx.data=rawdatax;
        buildprom(dx,23);
    }if($("#chry").length != 0) {
        var dy={};
        dy.data=rawdatay;
        buildprom(dy,24);
    }
}


function buildprom(prometer,id){

    var datas=[];
    var prometers={};
    //console.log(prometer);
    for(i=0;i<prometer.data.length;i++) {
        if(prometer.data[i][0]!= undefined && prometer.data[i][1] != undefined && prometer.data[i][2] != undefined
            && prometer.data[i][3] != undefined && prometer.data[i][4] != undefined && prometer.data[i][5] != undefined){
            datas[i] = {
                "class": prometer.data[i][0],
                "chr": prometer.data[i][1],
                "position1": prometer.data[i][2],
                "position2": prometer.data[i][3],
                "sign":prometer.data[i][4],
                "name":prometer.data[i][5]
            };}
    }
    prometers.data=datas;

    prometerss[id]=prometers;
    prometerss[id].id=id;
    //console.log( prometerss);
    var idb =$("#select-chr").val();
    if(idb == id){
    promdiag(prometerss);
}
}
function promdiag(prometers){
    var id =$("#select-chr").val();
    //console.log( id);
    prometer=prometers[id]
    var ind = d3.select("#plot").selectAll(".node");
    ind=ind[0];
    for(j=0; j< ind.length;j++){
        var x = parseFloat(ind[j].attributes.cx.value);
        var y = parseFloat(ind[j].attributes.cy.value);
        var r = parseFloat(ind[j].attributes.r.value);
        d3.select("#plot")
            .append("rect")
            .attr("class", "prometerindex")
            .attr("id", ind[j].id)
            .style("fill","none")
            .attr("x", x )
            .attr("y", y-120)
            .attr("height", 30)
            .attr("width", 1);
    }


    //show range on each prometer
    d3.select("#plot")
        .append("rect")
        .attr("id", "promoter")
        .style("fill","grey")
        .attr("x", function(d,i){
            var pos = d3.select("#plot").selectAll(".node");
            pos=pos[0];
            var minpos=parseFloat(pos[0].attributes.cx.value);
            for(j=0; j< pos.length;j++){

                var x = parseFloat(pos[j].attributes.cx.value);

                if(minpos > x){
                    minpos=x;
                }
            }
            //console.log(minpos);
            return((minpos-5));
        })
        .attr("y",function(d,i){
            var pos = d3.select("#plot").selectAll(".node");
            pos=pos[0];
            var ypos=parseFloat(pos[0].attributes.cy.value);
            ypos= ypos-105;
            return(ypos);
        })
        .attr("width", function(d,i){
            var pos = d3.select("#plot").selectAll(".node");
            pos=pos[0];
            var minpos=parseFloat(pos[0].attributes.cx.value);
            var maxpos=parseFloat(pos[0].attributes.cx.value);
            for(j=0; j< pos.length;j++){

                var x = parseFloat(pos[j].attributes.cx.value);

                if(minpos > x){
                    minpos=x;
                }
                if(maxpos < x){
                    maxpos=x;
                }
            }
            //console.log(minpos);
            return(((maxpos-minpos)+10));
        })
        .attr("height", 30);


    var range = d3.select("#plot").selectAll(".node");
    range=range[0];
    for(j=0; j< range.length;j++){
        var x = parseFloat(range[j].attributes.cx.value);
        var y = parseFloat(range[j].attributes.cy.value);
        var r = parseFloat(range[j].attributes.r.value);
        d3.select("#plot")
            .append("rect")
            .attr("class", "promoterrange")
            .attr("id", ind[j].id)
            .style("fill","none")
            .attr("x", x )
            .attr("y", y-105)
            .attr("height", 30)
            .attr("width", 1);
    }


    var post = d3.select("#plot").selectAll(".node");
    post=post[0];
    var minpost=parseFloat(post[0].id);
    var maxpost=parseFloat(post[0].id);
    for(j1=0; j1< post.length;j1++){

        var x = parseFloat(post[j1].id);

        if(minpost > x){
            minpost=x;
        }
        if(maxpost < x){
            maxpost=x;
        }
    }
    var pdata=prometer.data;

    var pos={};
    var modpdayta=[];
    var m=0;
    for(k=0 ; k<pdata.length;k++){
        if(pdata[k].position1<maxpost && pdata[k].position1>minpost){
   modpdayta[m]=pdata[k];
        m++;}
    }
    //console.log(modpdayta)
    var mod=Math.round(modpdayta.length/200);

    var yb;
    //console.log(pdata);
    for(i=0;i<pdata.length;i++)
    {
        var pindex = d3.select("#plot").selectAll(".prometerindex");
        pindex=pindex[0];
        //console.log(pindex);

        for(j=0; j< pindex.length-1;j++){
            var y = parseFloat(pindex[j].attributes.y.value)-10;
            var len =parseFloat(pindex[j+1].id)-parseFloat(pindex[j].id);
            var xlen=parseFloat(pindex[j+1].attributes.x.value)-parseFloat(pindex[j].attributes.x.value);

            if(pdata[i].position1 >= parseFloat(pindex[j].id)&& pdata[i].position1 <= parseFloat(pindex[j+1].id) &&
                pdata[i].position2 >= parseFloat(pindex[j].id) && pdata[i].position2 <= parseFloat(pindex[j+1].id))
            {
                var temp= xlen/len;
                var xpos1=temp*(pdata[i].position1-parseFloat(pindex[j].id));
                var xpos2=temp*(pdata[i].position2-parseFloat(pindex[j].id));
                //console.log(len);

                var x1=  (parseFloat(pindex[j].attributes.x.value)+xpos1);
                var x2=  (parseFloat(pindex[j].attributes.x.value)+xpos2);
                //var width =(parseFloat(pindex[j].attributes.x.value)+xpos2)-(parseFloat(pindex[j].attributes.x.value)+xpos1);
                //console.log(xpos1);

                if (i==0){y=y;
                yb=y;
                }
                else if( i!=0 && pdata[i].name.split("@")[1]!=pdata[i-1].name.split("@")[1])
                {
                    for(k=0;k<mod;k++){
                        if( i%mod==k ){
                        y=y-(k*10);
                        yb=y;
                        }
                    }

                }
                else if(pdata[i].name.split("@")[1]==pdata[i-1].name.split("@")[1] && i!=0)
                {
                    y=yb;
                }


                if(pdata[i].sign =="+"){
                var path=[ { "x": x1,   "y": y+(4)},{ "x": x2+7,  "y": y}
                        ,  { "x": x1,  "y": y-(4)}
                          ];}
                else if(pdata[i].sign =="-"){
                    var path=[{ "x": x1,  "y": y}, { "x":  x2+7,   "y": y+(4)}
                        ,  { "x":  x2+7,  "y": y-(4)}
                    ];}


                pos[i]={
                    "posx": x1,
                    "posy": y,
                    "id" :  pdata[i].name
                }

                d3.select("#plot")
                    .append("path")
                    .attr("name",pdata[i].name.split("@")[1])
                    .attr("class", "prometer")
                    .attr("id", pdata[i].name)
                    .attr("d", lineFunction(path))
                    .on("click", function(d, i){
                        var b = d3.select(this)
                        d3.select("#plot").selectAll(".Prom")
                            .style('fill', "none");
                        var t ;
                        var px;
                        if($(".Prom") != undefined){
                            //console.log($(".Prom"))
                            var sh =d3.select("#plot").selectAll(".Prom")

                            selectedpdata = pdata.filter(function(index){
                                //console.log(index)
                                return index.name === b[0][0].id
                            })

                            //console.log(sh)
                            sh=sh[0];
                            for(j=0; j< sh.length;j++){
                                if(parseFloat(sh[j].id) == selectedpdata[0].position1){
                                    t=selectedpdata[0].position1;
                                    px= sh[j].attributes.x.value
                                    $(".Prom").filter(
                                        function( index ) {
                                            return $(this).attr("id")=== sh[j].id;
                                        }
                                    ).css({fill:selectedcolor});
                                }
                            }

                            addppos(y, px, t, 0);
                        }


            } )
                    .on("mouseover", function(d, i) {
                        var px;
                        var t ;
                        var b = d3.select(this)
                            .style('fill', selectedcolor);
                        var xpos;
                        var ypos;


                        for(k in pos){
                             if(pos[k].id==b[0][0].id){
                                 xpos= pos[k].posx;
                                 ypos=pos[k].posy;
                                 break
                             }
                        }

                        addname(ypos, xpos, b[0][0].id, 0);


                        if($(".Prom") != undefined){
                            //console.log($(".Prom"))
                            var sh =d3.select("#plot").selectAll(".Prom")

                            selectedpdata = pdata.filter(function(index){
                                //console.log(index)
                                return index.name === b[0][0].id
                            })
                            //console.log(selectedpdata[0].position1)
                            sh=sh[0];
                            for(j=0; j< sh.length;j++){
                                if(parseFloat(sh[j].id) == selectedpdata[0].position1){
                                    t=selectedpdata[0].position1;
                                    px= sh[j].attributes.x.value;
                                    $(".Prom").filter(
                                        function( index ) {
                                            return $(this).attr("id")=== sh[j].id;
                                        }
                                    ).css({fill:selectedcolor});
                                }
                            }

                        }
                        addppos(y, px, t, 0);
                    }

                )
                    .on("mouseout",  function() {
                        d3.select(this)
                            .style('fill', nodecolor);
                        d3.select(".promotername").remove();
                        d3.select("#plot").selectAll(".Prom")
                            .style('fill', ancolor);
                        d3.selectAll(".promoterpos").remove();


                    })
                    .attr("fill",nodecolor);
                break;
            }


        }

        // show range
        //promoter range


        var index = d3.select("#plot").selectAll(".promoterrange");
        index=index[0];
        //console.log(edata);

        for(j=0; j< index.length-1;j++){
            var y = parseFloat(index[j].attributes.y.value);
            var len =parseFloat(index[j+1].id)-parseFloat(index[j].id);
            var xlen=parseFloat(index[j+1].attributes.x.value)-parseFloat(index[j].attributes.x.value);

            if(pdata[i].position1 >= parseFloat(index[j].id)&& pdata[i].position1 <= parseFloat(index[j+1].id) &&
                pdata[i].position2 >= parseFloat(index[j].id) && pdata[i].position2 <= parseFloat(index[j+1].id))
            {
                var temp= xlen/len;
                var xpos1=temp*(pdata[i].position1-parseFloat(index[j].id));
                var xpos2=temp*(pdata[i].position2-parseFloat(index[j].id));
                //console.log(len);

                var x=  (parseFloat(index[j].attributes.x.value)+xpos1);
                var width =(parseFloat(index[j].attributes.x.value)+xpos2)-(parseFloat(index[j].attributes.x.value)+xpos1);
                //console.log(xpos1);
                d3.select("#plot")
                    .append("rect")
                    .attr("class", "Prom")
                    .attr("id", pdata[i].position1)
                    .style("fill",ancolor)
                    .attr("x",x )
                    .attr("y", y)
                    .attr("height", 30)
                    .attr("width", Math.max (width,0.5));
                break;
            }
            else if(pdata[i].position1 >= parseFloat(index[j].id)&& pdata[i].position1 <= parseFloat(index[j+1].id) &&
                pdata[i].position2 >= parseFloat(index[j].id) && pdata[i].position2 >= parseFloat(index[j+1].id))
            {
                var temp= xlen/len;
                var xpos1=temp*(pdata[i].position1-parseFloat(index[j].id));
                var xpos2=temp*(pdata[i].position2-parseFloat(index[j+1].id));
                //console.log(len);

                var x=  (parseFloat(index[j].attributes.x.value)+xpos1);
                var width =(parseFloat(index[j+1].attributes.x.value)+xpos2)-(parseFloat(index[j].attributes.x.value)+xpos1);
                //console.log(xpos1);
                d3.select("#plot")
                    .append("rect")
                    .attr("class", "Prom")
                    .attr("id", pdata[i].position1)
                    .style("fill",ancolor)
                    .attr("x",x )
                    .attr("y", y-70)
                    .attr("height", 30)
                    .attr("width", Math.max (width,0.5));
                break;
            }


        }
    }
    $.mobile.loading().hide();
   // console.log(  d3.select("#plot").selectAll(".prometer"));

}
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");





function addname(y,x,id,i) {
    var y = y-10
    var text = id;
    y1=y;
    if(x<=0){x=x-i;
    }
    var addname = d3.select("#plot")
        .append("text")
        .text(text)
        .attr("x", x)
        .attr("y", y)
        .attr("class", "promotername");

}
function addppos(y,x,text,i) {
    var y = y-10
    var text = text;
    y1=y;
    if(x<=0){x=x-i;
    }
    var addname = d3.select("#plot")
        .append("text")
        .text(text)
        .attr("x", x)
        .attr("y", y)
        .attr("class", "promoterpos");

}








// enhancer part
// part for use enhancer Hi-C data

function readenhancer() {
    var f = document.getElementById('enhancer').files[0];

    $.mobile.loading().show();

    if (f) {
        if(f.name.match(".csv") || f.name.match(".txt")){

            getenhancer(f);
        }
        else{alert("input format error")}

    } else {
        alert("Failed to load file");
    }

}


function getenhancer(file){

    Papa.parse(file,{
        header: false,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);

            useenh(results);


        }});
}




function useenh(enhancer){
    var rawdata = enhancer;

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

    for(i=0 ; i<rawdata.data.length;i++){


            if(rawdata.data[i][0] == "chr1"){
                rawdata1[c1]=rawdata.data[i]
                c1++;
            }
            if(rawdata.data[i][0] == "chr2"){
                rawdata2[c2]=rawdata.data[i]
                c2++;
            }
            if(rawdata.data[i][0] == "chr3"){
                rawdata3[c3]=rawdata.data[i]
                c3++;
            }
            if(rawdata.data[i][0]== "chr4"){
                rawdata4[c4]=rawdata.data[i]
                c4++;
            }



            if(rawdata.data[i][0] == "chr5"){
                rawdata5[c5]=rawdata.data[i]
                c5++;
            }
            if(rawdata.data[i][0] == "chr6"){
                rawdata6[c6]=rawdata.data[i]
                c6++;
            }
            if(rawdata.data[i][0] == "chr7"){
                rawdata7[c7]=rawdata.data[i]
                c7++;
            }
            if(rawdata.data[i][0] == "chr8"){
                rawdata8[c8]=rawdata.data[i]
                c8++;
            }




            if(rawdata.data[i][0] == "chr9"){
                rawdata9[c9]=rawdata.data[i]
                c9++;
            }
            if(rawdata.data[i][0] == "chr10"){
                rawdata10[c10]=rawdata.data[i]
                c10++;
            }
            if(rawdata.data[i][0] == "chr11"){
                rawdata11[c11]=rawdata.data[i]
                c11++;
            }
            if(rawdata.data[i][0] == "chr12"){
                rawdata12[c12]=rawdata.data[i]
                c12++;
            }


            if(rawdata.data[i][0] == "chr13"){
                rawdata13[c13]=rawdata.data[i]
                c13++;
            }
            if(rawdata.data[i][0] == "chr14"){
                rawdata14[c14]=rawdata.data[i]
                c14++;
            }
            if(rawdata.data[i][0]== "chr15"){
                rawdata15[c15]=rawdata.data[i]
                c15++;
            }
            if(rawdata.data[i][0] == "chr16"){
                rawdata16[c16]=rawdata.data[i]
                c16++;
            }

            if(rawdata.data[i][0] == "chr17"){
                rawdata17[c17]=rawdata.data[i]
                c17++;
            }
            if(rawdata.data[i][0] == "chr18"){
                rawdata18[c18]=rawdata.data[i]
                c18++;
            }
            if(rawdata.data[i][0] == "chr19"){
                rawdata19[c19]=rawdata.data[i]
                c19++;
            }
            if(rawdata.data[i][0] == "chr20"){
                rawdata20[c20]=rawdata.data[i]
                c20++;
            }


            if(rawdata.data[i][0] == "chr21"){
                rawdata21[c21]=rawdata.data[i]
                c21++;
            }
            if(rawdata.data[i][0] == "chr22"){
                rawdata22[c22]=rawdata.data[i]
                c22++;
            }



            if(rawdata.data[i][0] == "chrx" || rawdata.data[i][0] == "chrX"){
                rawdatax[cx]=rawdata.data[i]
                cx++;
            }
            if(rawdata.data[i][0] == "chry"|| rawdata.data[i][0] == "chrY"){
                rawdatay[cy]=rawdata.data[i]
                cy++;
            }
        }



    //console.log(rawdatay);


    if($("#chr1").length != 0) {
        var d={};
        d.data=rawdata1;
        buildenhancer(d,1);
    }
    if($("#chr2").length != 0) {
        var d2={};
        d2.data=rawdata2;
        //console.log(d2);
        buildenhancer(d2,2);
    }
    if($("#chr3").length != 0) {
        var d3={};
        d3.data=rawdata3;
        buildenhancer(d3,3);
    }
    if($("#chr4").length != 0) {
        var d4={};
        d4.data=rawdata4;
        buildenhancer(d4,4);
    }
    if($("#chr5").length != 0) {
        var d5={};
        d5.data=rawdata5;
        buildenhancer(d5,5);
    }
    if($("#chr6").length != 0) {
        var d6={};
        d6.data=rawdata6;
        buildenhancer(d6,6);
    }
    if($("#chr7").length != 0) {
        var d7={};
        d7.data=rawdata7;
        buildenhancer(d7,7);
    }
    if($("#chr8").length != 0) {
        var d8={};
        d8.data=rawdata8;
        buildenhancer(d8,8);
    }if($("#chr9").length != 0) {
        var d9={};
        d9.data=rawdata9;
        buildenhancer(d9,9);
    }if($("#chr10").length != 0) {
        var d10={};
        d10.data=rawdata10;
        buildenhancer(d10,10);
    }if($("#chr11").length != 0) {
        var d11={};
        d11.data=rawdata11;
        buildenhancer(d11,11);
    }
    if($("#chr12").length != 0) {
        var d12={};
        d12.data=rawdata12;
        buildenhancer(d12,12);
    }if($("#chr13").length != 0) {
        var d13={};
        d13.data=rawdata13;
        buildenhancer(d13,13);
    }if($("#chr14").length != 0) {
        var d14={};
        d14.data=rawdata14;
        buildenhancer(d14,14);
    }if($("#chr15").length != 0) {
        var d15={};
        d15.data=rawdata15;
        buildenhancer(d15,15);
    }if($("#chr16").length != 0) {
        var d16={};
        d16.data=rawdata16;
        buildenhancer(d16,16);
    }if($("#chr17").length != 0) {
        var d17={};
        d17.data=rawdata17;
        buildenhancer(d17,17);
    }if($("#chr18").length != 0) {
        var d18={};
        d18.data=rawdata18;
        buildenhancer(d18,18);
    }if($("#chr19").length != 0) {
        var d19={};
        d19.data=rawdata19;
        buildenhancer(d19,19);
    }if($("#chr20").length != 0) {
        var d20={};
        d20.data=rawdata20;
        buildenhancer(d20,20);
    }if($("#chr21").length != 0) {
        var d21={};
        d21.data=rawdata21;
        buildenhancer(d21,21);
    }if($("#chr22").length != 0) {
        var d22={};
        d22.data=rawdata22;
        buildenhancer(d22,22);
    }if($("#chrx").length != 0) {
        var dx={};
        dx.data=rawdatax;
        buildenhancer(dx,23);
    }if($("#chry").length != 0) {
        var dy={};
        dy.data=rawdatay;
        buildenhancer(dy,24);
    }

}

function buildenhancer(enhancers,id){

var datas=[];
 var enhancer={};
    console.log(enhancers.data[0][2]);
    for(i=0;i<enhancers.data.length;i++) {
        if(enhancers.data[i][0]!= undefined && enhancers.data[i][1] != undefined && enhancers.data[i][2] != undefined && enhancers.data[i][3] != undefined){
            datas[i] = {
                "chr": enhancers.data[i][0],
                "class":enhancers.data[i][1],
                "position1": enhancers.data[i][2],
                "position2": enhancers.data[i][3]
            };}
    }
    enhancer.data=datas;
    enhancerss[id]=enhancer;
    enhancerss[id].id=id;

    enhdiag(enhancerss);
    //console.log(enhancerss[id]);
}

function enhdiag(datas){

    var id =$("#select-chr").val();
    data=datas[id]
d3.select("#plot")
    .append("rect")
    .attr("id", "enhancer")
    .style("fill","grey")
    .attr("x", function(d,i){
        var pos = d3.select("#plot").selectAll(".node");
        pos=pos[0];
        var minpos=parseFloat(pos[0].attributes.cx.value);
        for(j=0; j< pos.length;j++){

            var x = parseFloat(pos[j].attributes.cx.value);

            if(minpos > x){
            minpos=x;
            }
        }
        //console.log(minpos);
        return((minpos-5));
    })
    .attr("y",function(d,i){
        var pos = d3.select("#plot").selectAll(".node");
        pos=pos[0];
        var ypos=parseFloat(pos[0].attributes.cy.value);
        ypos= ypos-70;
        return(ypos);
    })
    .attr("width", function(d,i){
        var pos = d3.select("#plot").selectAll(".node");
        pos=pos[0];
        var minpos=parseFloat(pos[0].attributes.cx.value);
        var maxpos=parseFloat(pos[0].attributes.cx.value);
        for(j=0; j< pos.length;j++){

            var x = parseFloat(pos[j].attributes.cx.value);

            if(minpos > x){
                minpos=x;
            }
            if(maxpos < x){
                maxpos=x;
            }
        }
        //console.log(minpos);
        return(((maxpos-minpos)+10));
    })
    .attr("height", 30);



    var line = d3.select("#plot").selectAll(".node");
    line=line[0];
    for(j=0; j< line.length;j++){
        var x = parseFloat(line[j].attributes.cx.value);
        var y = parseFloat(line[j].attributes.cy.value);
        var r = parseFloat(line[j].attributes.r.value);
        d3.select("#plot")
            .append("rect")
            .attr("class", "lines")
            .attr("id", line[j].id)
            .style("fill","none")
            .attr("x", x )
            .attr("y", y-70)
            .attr("height", 30)
            .attr("width", 1);
    }

    var edata=data.data;

    //console.log(d3.select("#plot").selectAll(".line"));

    for(i=0;i<edata.length;i++)
    {
        var index = d3.select("#plot").selectAll(".lines");
        index=index[0];
        //console.log(edata);

        for(j=0; j< index.length-1;j++){
            var y = parseFloat(index[j].attributes.y.value);
            var len =parseFloat(index[j+1].id)-parseFloat(index[j].id);
            var xlen=parseFloat(index[j+1].attributes.x.value)-parseFloat(index[j].attributes.x.value);

            if(edata[i].position1 >= parseFloat(index[j].id)&& edata[i].position1 <= parseFloat(index[j+1].id) &&
                edata[i].position2 >= parseFloat(index[j].id) && edata[i].position2 <= parseFloat(index[j+1].id))
            {
                var temp= xlen/len;
                var xpos1=temp*(edata[i].position1-parseFloat(index[j].id));
                var xpos2=temp*(edata[i].position2-parseFloat(index[j].id));
                //console.log(len);

                var x=  (parseFloat(index[j].attributes.x.value)+xpos1);
                var width =(parseFloat(index[j].attributes.x.value)+xpos2)-(parseFloat(index[j].attributes.x.value)+xpos1);
                //console.log(xpos1);
                d3.select("#plot")
                    .append("rect")
                    .attr("class", "enhancer")
                    .attr("id", edata[i].position1)
                    .style("fill",ancolor)
                    .attr("x",x )
                    .attr("y", y)
                    .attr("height", 30)
                    .attr("width", Math.max (width,0.5));
                break;
            }
            else if(edata[i].position1 >= parseFloat(index[j].id)&& edata[i].position1 <= parseFloat(index[j+1].id) &&
                edata[i].position2 >= parseFloat(index[j].id) && edata[i].position2 >= parseFloat(index[j+1].id))
            {
                var temp= xlen/len;
                var xpos1=temp*(edata[i].position1-parseFloat(index[j].id));
                var xpos2=temp*(edata[i].position2-parseFloat(index[j+1].id));
                //console.log(len);

                var x=  (parseFloat(index[j].attributes.x.value)+xpos1);
                var width =(parseFloat(index[j+1].attributes.x.value)+xpos2)-(parseFloat(index[j].attributes.x.value)+xpos1);
                //console.log(xpos1);
                d3.select("#plot")
                    .append("rect")
                    .attr("class", "enhancer")
                    .attr("id", edata[i].position1)
                    .style("fill",ancolor)
                    .attr("x",x )
                    .attr("y", y-70)
                    .attr("height", 30)
                    .attr("width", Math.max (width,0.5));
                break;
            }


        }
    }
    $.mobile.loading().hide();

}



// add promoter and enhancer butuon

function promoterenhancer(){

}