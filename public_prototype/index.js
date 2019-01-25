var json_data = {
 "name": " ",
 "children": [
   {
    "name": "ExxonMobil",
    "free": true,
    "description": "Interactive authoring tools",
    "children": [
     {
      "name": "Browser-based",
      "description": "Web-based 'cloud' applications for authoring data visualisations",
      "free": true,
      "children": [
       {
        "name": "Datawrapper",
        "description": "An open-source platform for publishing charts on the web. Cloud-based or self-hosted.",
        "url": "https://datawrapper.de/",
        "free": true
       },
       {
        "name": "Google Sheets",
        "description": "Spreadsheet in the cloud with charting",
        "free": true
       },
       {
        "name": "plotly",
        "description": "Cloud-based interactive tool for creating data visualisations",
        "url": "https://plot.ly/",
        "free": true
       },
       {
        "name": "RAW",
        "description": "Open-source interactive tool for creating and exporting D3-like charts",
        "url": "http://raw.densitydesign.org/",
        "free": true
       }
      ]
     },
     {
      "name": "Desktop",
      "children": [
       {
        "name": "Tableau Desktop",
        "description": "Powerful tool for data analytics and visualisation",
        "url": "http://www.tableausoftware.com/products/desktop"
       },
       {
        "name": "Tableau Public",
        "description": "Free version of Tableau Desktop where charts are public",
        "url": "http://www.tableausoftware.com/products/public",
        "free": true
       }
      ]
     }
    ]
   },
   {
    "name": "3M Science",
    "description": "Code-based data visualisation creation",
    "free": true,
    "children": [
     {
      "name": "JavaScript",
      "description": "The language behind most (all?) browser-based data visualisations",
      "free": true,
      "children": [
       {
        "name": "Charting libraries",
        "description": "Off-the-shelf pre-designed charts. Easy to use but less flexible.",
        "free": true,
        "children": [
         {
          "name": "Google Charts",
          "description": "A good selection of charts including bar, line, scatter, geo, pie, donut, org etc.",
          "url": "https://developers.google.com/chart/",
          "free": true
         },
         {
          "name": "HighCharts",
          "description": "A well maintained commercial library of commonly used chart types",
          "url": "https://www.highcharts.com/"
         },
         {
          "name": "InfoVis",
          "description": "A lovely selection of charts including bar, pie, sunburst, icicle, network, trees etc.",
          "url": "https://philogb.github.io/jit/",
          "free": true
         },
         {
          "name": "Mapping",
          "description": "Libraries for visualising geographic data",
          "free": true,
          "children": [
           {
            "name": "Kartograph",
            "description": "Lovely vector based mapping library with good browser support",
            "url": "http://kartograph.org/",
            "free": true
           },
           {
            "name": "Leaflet",
            "description": "Tile-based mapping library",
            "url": "http://leafletjs.com/",
            "free": true
           }
          ]
         },
         {
          "name": "MetricsGraphics.js",
          "description": "Beautiful line, scatter and histogram charts built on top of D3",
          "url": "http://metricsgraphicsjs.org/",
          "free": true
         },
         {
          "name": "NVD3",
          "description": "A general purpose charting library built on top of D3",
          "url": "http://nvd3.org/",
          "free": true
         },
         {
          "name": "Sigma",
          "description": "Library for visualising networks",
          "url": "http://sigmajs.org/",
          "free": true
         }
        ]
       },
       {
        "name": "Custom coded",
        "description": "For maximum flexibility, custom coding is the way to go. These libraries will lend a hand.",
        "free": true,
        "children": [
         {
          "name": "D3",
          "description": "The jewel in the crown of web-based data visualisation. A library packed full of components for building any data visualisation you can imagine.",
          "url": "https://d3js.org/",
          "free": true
         },
         {
          "name": "Ractive",
          "description": "Relatively new, Ractive helps you make your HTML and SVG interactive",
          "url": "http://www.ractivejs.org/",
          "free": true
         },
         {
          "name": "Raphaël",
          "description": "A general purpose drawing library with good browser support",
          "url": "http://raphaeljs.com/",
          "free": true
         },
         {
          "name": "Snap.svg",
          "description": "A modern version of Raphaël that supports modern browsers",
          "url": "http://snapsvg.io/",
          "free": true
         },
         {
          "name": "Variance",
          "description": "A declarative, mark-up based data visualisation library",
          "url": "https://variancecharts.com/"
         },
         {
          "name": "Vega",
          "description": "A declarative language for specifying data visualistions",
          "url": "https://trifacta.github.io/vega/",
          "free": true
         }
        ]
       }
      ]
     },
     {
      "name": "Other",
      "description": "Non-JavaScript languages for producing web-based data visualisations",
      "free": true,
      "children": [
       {
        "name": "Python",
        "description": "Python's a very popular language in data science and is a pleasant language to learn and use",
        "free": true,
        "children": [
         {
          "name": "Bokeh",
          "description": "A powerful tool for producing interactive plots, dashboards and data applications",
          "url": "https://bokeh.pydata.org/",
          "free": true
         }
        ]
       },
       {
        "name": "R",
        "description": "Very popular language for data science",
        "free": true,
        "children": [
         {
          "name": "Shiny",
          "description": "A platform for producing web applications using R",
          "url": "http://shiny.rstudio.com/",
          "free": true
         }
        ]
       }
      ]
     }
    ]
   }
 ]
}

var m = [20, 120, 20, 20],
    w = 1280 - m[1] - m[3],
    h = 800 - m[0] - m[2],
    i = 0,
    root;

var tree = d3.layout.tree()
    .size([h, w]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var vis = d3.select("#body").append("svg:svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

root = json_data;
root.x0 = h / 2;
root.y0 = 0;

function toggleAll(d) {
  if (d.children) {
    d.children.forEach(toggleAll);
    toggle(d);
  }
}

  // Initialize the display to show a few nodes.
  // root.children.forEach(toggleAll);
  // toggle(root.children[1]);
  // toggle(root.children[1].children[2]);
  // toggle(root.children[9]);
  // toggle(root.children[9].children[0]);

 update(root);


function update(source) {
  var duration = d3.event && d3.event.altKey ? 5000 : 500;

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse();

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", function(d) { toggle(d); update(d); });

  nodeEnter.append("svg:circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append('a')
      .attr('xlink:href', function(d) {
        return d.url;
      })
      .append("svg:text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style('fill', function(d) {
        return d.free ? 'black' : '#999';
      })
      .style("fill-opacity", 1e-6);

  nodeEnter.append("svg:title")
    .text(function(d) {
      return d.description;
    });

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = vis.selectAll("path.link")
      .data(tree.links(nodes), function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("svg:path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      })
    .transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children.
function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}