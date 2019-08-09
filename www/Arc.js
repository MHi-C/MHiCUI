var datasets={};
var bindataset= {};
var max=[];

function readFile() {

    var f = document.getElementById('myFile').files[0];
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
    var nodes=[];
    var links=[];
    var dataset={};
    for(i=0;i<hicdata.data.length;i++) {
        if(hicdata.data[i].locus1 != undefined ||hicdata.data[i].locus2 != undefined || hicdata.data[i].readCount != undefined ){
            links[i] = {
                "source": hicdata.data[i].locus1,
                "target":hicdata.data[i].locus2,
                "value": hicdata.data[i].readCount
            };}
    }

    dataset.links=links;
    //console.log(links);
    max[id] = getMax(dataset.links)
    var m=0;
    var nodess=[];

    for(j in hicdata.data){

        if(hicdata.data[j].locus1 != undefined){
            nodess[m] =hicdata.data[j].locus1;
        }
        m++;
    }
    m=m+1;
    for(j in hicdata.data){

        if(hicdata.data[j].locus2 != undefined){
            nodess[m] =hicdata.data[j].locus2;
        }
        m++;
    }
    var uni=nodess.unique();
    i=0;
    for(k=0;k<=uni.length;k++){
        if(uni[k] != undefined  ){
            nodes[i] = {
                "name": uni[k]
            };}
        i++
    }
    dataset.nodes=nodes;
    // map links to nodes
    dataset = maplinks(dataset);
    datasets[id]=dataset;
    datasets[id].id=id;

    if($("#select-chr").val()==id){
    arc(datasets[id]);
    }


}




function getMax(arr) {
    var max1=arr[0].source;
    for (var i=1 ; i<arr.length ; i++) {
        if (max1 < arr[i].source){
            max1 = arr[i].source;}
    }
    var max2=arr[0].target;
    for (var i=1 ; i<arr.length ; i++) {
        if (max2 < arr[i].target){
            max2 = arr[i].target;}
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

function bin(){
    var id =$("#select-chr").val();
    if(parseInt(document.getElementById("bin").value,10) > 0){
    var nod=[];
    var nods=[];
    var j=0;
     for(i=0;i<=max[id]+parseInt(document.getElementById("bin").value,10);i=i+parseInt(document.getElementById("bin").value,10))
     {
         nod[j] = i;
         j++;
     }

    j=0;
    nod=nod.sort(function(a, b) { return a - b; });
    var u=nod.unique();
    for(i=0;i<u.length;i++)
    {
        nods[j]= {
        "name":u[i]
    };
        j++;
    }

    var link=[];
    var lin=[];
    var su=[];
    var des=[];

        for(i=0; i<datasets[id].links.length;i++) {
            for(b=0;b<nod.length;b++){
                if(datasets[id].links[i].source.name >=nod[b] && datasets[id].links[i].source.name <nod[b+1] ){
                    su[i]= nod[b];
                    break;
                }
            }
            for(b=0;b<nod.length;b++){
                if(datasets[id].links[i].target.name >=nod[b] && datasets[id].links[i].target.name <nod[b+1] ){
                    des[i]= nod[b];
                    break;
                }
            }


            link[i] = {
                "source": su[i],
                "target":des[i],
                "value":datasets[id].links[i].value
            };

    }
        var val;
        var value=[];
        for(i=0; i<link.length;i++) {
             val=0;
            for(k=0; k<link.length;k++) {
                if (link[i].source==link[k].source && link[i].target==link[k].target) {
                    val =val+link[k].value;
                }
            }
            value[i]=val;
        }
         j=0;

        lin[j] = {
            "source": link[0].source,
            "target":link[0].target,
            "value":value[0]
        };
        var k=0;
        var flag;
        for(i=0; i<link.length;i++) {
            flag=1;
            for(j=0; j<lin.length;j++){
                if (link[i].source==lin[j].source && link[i].target==lin[j].target) {
                flag=0;
                break;
               }
             }
            if (flag==1) {
                lin[k] = {
                    "source": link[i].source,
                    "target":link[i].target,
                    "value":value[i]
                };
                k++;
            }
        }
    //console.log(value);
    bindataset.links=lin;
    bindataset.nodes=nods;
    bindataset= maplinks(bindataset);
    //console.log(bindataset);
        d3.select("#plot").remove();

        plot = svg.append("g")
            .attr("id", "plot")
            .attr("transform", "translate(" + pad + ", " + pad + ")");

    arc(bindataset);
        selectzoom();
        readcounts();
}
else{alert("error")}
}








