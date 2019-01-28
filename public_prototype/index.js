var json_data = {
 "name": "X",
 "children": [
   {
    "name": "ExxonMobil",
    "free": true,
    "description": "Interactive authoring tools",
    "url": "https://www.exxonmobilchemical.com/en/products-and-services/",
    "children": [
     {
      "name": "Polymers",
      "description": "Web-based 'cloud' applications for authoring data visualisations",
      "free": true,
      "children": [
       {
        "name": "Butyl",
        "description": "An open-source platform for publishing charts on the web. Cloud-based or self-hosted.",
        "url": "https://datawrapper.de/",
        "free": true
       },
       {
        "name": "EPDM rubber",
        "description": "Spreadsheet in the cloud with charting",
        "free": true
       },
       {
        "name": "Polyethylene",
        "description": "Cloud-based interactive tool for creating data visualisations",
        "url": "https://plot.ly/",
        "free": true
       },
       {
        "name": "Polymer modifiers",
        "description": "Open-source interactive tool for creating and exporting D3-like charts",
        "url": "http://raw.densitydesign.org/",
        "free": true
       }
      ]
     },
     {
      "name": "Chemicals and fluids",
      "children": [
       {
        "name": "Plasticizers",
        "description": "Powerful tool for data analytics and visualisation",
        "url": "http://www.tableausoftware.com/products/desktop"
       },
       {
        "name": "Solvents",
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
    "url": "https://www.3m.com/",
    "free": true,
    "children": [
     {
      "name": "Films",
      "description": "The language behind most (all?) browser-based data visualisations",
      "free": true,
      "children": [
       {
        "name": "3M Automotive Films",
        "description": "Off-the-shelf pre-designed charts. Easy to use but less flexible.",
        "free": true,
        "children": [
         {
          "name": "3M™ Automotive Window Film Crystalline Series",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Automotive Window Film Scotchshield™ Security Series",
          "description": "",
          "url": ""
         },
         {
          "name": "3M™ Automotive Window Film Color Stable Series",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M Automotive Window Tint",
          "description": "",
          "free": true,
          "children": [
           {
            "name": "3M™ Automotive Window Film Crystalline Series",
            "description": "",
            "url": "",
            "free": true
           },
           {
            "name": "3M™ Automotive Window Film Scotchshield™ Security Series",
            "description": "",
            "url": "",
            "free": true
           }
          ]
         },
         {
          "name": "3M™ Automotive Window Film FX ST Series",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Automotive Window Film FX Premium Series",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Paint Protection Film PUL2008, 10 mil, Transparent",
          "description": "",
          "url": "",
          "free": true
         }
        ]
       },
       {
        "name": "3M Electronics Films",
        "description": "For maximum flexibility, custom coding is the way to go. These libraries will lend a hand.",
        "free": true,
        "children": [
         {
          "name": "3M™ Contrast Enhancement Film CEF03A07L5",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Anisotropic Conductive Film 5363",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Anisotropic Conductive Film 7303",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Contrast Enhancement Film CEF06xx",
          "description": "",
          "url": "",
          "free": true
         },
         {
          "name": "3M™ Anisotropic Conductive Film 7371",
          "description": "",
          "url": ""
         },
         {
          "name": "3M™ Contrast Enhancement Film CEF08A07",
          "description": "",
          "url": "",
          "free": true
         }
        ]
       }
      ]
     },
     {
      "name": "3M Paint Protection Films",
      "description": "",
      "free": true,
      "children": [
       {
        "name": "Scotchgard",
        "description": "",
        "free": true,
        "children": [
         {
          "name": "Scotchgard™ Paint Protection Film Pro Series",
          "description": "",
          "url": "",
          "free": true
         }
        ]
       },
       {
        "name": "3M Window Films",
        "description": "",
        "free": true,
        "children": [
         {
          "name": "Residential Window Film",
          "description": "",
          "url": "",
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