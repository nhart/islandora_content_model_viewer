Ext.data.JsonP.Ext_chart_series_Line({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.chart.series.Series",
    "Ext.chart.series.Cartesian"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [
    "Ext.util.Observable",
    "Ext.chart.Label",
    "Ext.chart.Highlight",
    "Ext.chart.Tip",
    "Ext.chart.Callout"
  ],
  "href": "Line.html#Ext-chart-series-Line",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-axis",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "The position of the axis to bind the values to. ...",
        "static": false,
        "name": "axis",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>The position of the axis to bind the values to. Possible values are 'left', 'bottom', 'top' and 'right'.\nYou must explicitly set this value to bind the values of the line series to the ones in the axis, otherwise a\nrelative scale will be used.</p>\n",
        "linenr": 107,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Label2.html#Ext-chart-Label-cfg-color",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "shortDoc": "The color of the label text. ...",
        "static": false,
        "name": "color",
        "owner": "Ext.chart.Label",
        "doc": "<p>The color of the label text.\nDefault value: '#000' (black).</p>\n",
        "linenr": 42,
        "html_filename": "Label2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Label2.html#Ext-chart-Label-cfg-display",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "shortDoc": "Specifies the presence and position of labels for each pie slice. ...",
        "static": false,
        "name": "display",
        "owner": "Ext.chart.Label",
        "doc": "<p>Specifies the presence and position of labels for each pie slice. Either \"rotate\", \"middle\", \"insideStart\",\n\"insideEnd\", \"outside\", \"over\", \"under\", or \"none\" to prevent label rendering.\nDefault value: 'none'.</p>\n",
        "linenr": 35,
        "html_filename": "Label2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Label2.html#Ext-chart-Label-cfg-field",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "shortDoc": "The name of the field to be displayed in the label. ...",
        "static": false,
        "name": "field",
        "owner": "Ext.chart.Label",
        "doc": "<p>The name of the field to be displayed in the label.\nDefault value: 'name'.</p>\n",
        "linenr": 48,
        "html_filename": "Label2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-fill",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "If true, the area below the line will be filled in using the style.eefill and\nstyle.opacity config properties. ...",
        "static": false,
        "name": "fill",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>If true, the area below the line will be filled in using the style.eefill and\nstyle.opacity config properties. Defaults to false.</p>\n",
        "linenr": 169,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Label2.html#Ext-chart-Label-cfg-font",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "shortDoc": "The font used for the labels. ...",
        "static": false,
        "name": "font",
        "owner": "Ext.chart.Label",
        "doc": "<p>The font used for the labels.\nDefautl value: \"11px Helvetica, sans-serif\".</p>\n",
        "linenr": 61,
        "html_filename": "Label2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean|Object",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-highlight",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "If set to true it will highlight the markers or the series when hovering\nwith the mouse. ...",
        "static": false,
        "name": "highlight",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>If set to <code>true</code> it will highlight the markers or the series when hovering\nwith the mouse. This parameter can also be an object with the same style\nproperties you would apply to a <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a> to apply custom\nstyles to markers and series.</p>\n",
        "linenr": 46,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-listeners",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "An (optional) object with event callbacks. ...",
        "static": false,
        "name": "listeners",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>An (optional) object with event callbacks. All event callbacks get the target <em>item</em> as first parameter. The callback functions are:</p>\n\n<p> <ul></p>\n\n<pre><code> &lt;li&gt;itemmouseover&lt;/li&gt;\n &lt;li&gt;itemmouseout&lt;/li&gt;\n &lt;li&gt;itemmousedown&lt;/li&gt;\n &lt;li&gt;itemmouseup&lt;/li&gt;\n</code></pre>\n\n<p> </ul></p>\n",
        "linenr": 105,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-markerConfig",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "The display style for the markers. ...",
        "static": false,
        "name": "markerConfig",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>The display style for the markers. Only used if <a href=\"#/api/Ext.chart.series.Line-cfg-showMarkers\" rel=\"Ext.chart.series.Line-cfg-showMarkers\" class=\"docClass\">showMarkers</a> is true.\nThe markerConfig is a configuration object containing the same set of properties defined in\nthe Sprite class. For example, if we were to set red circles as markers to the line series we could\npass the object:</p>\n\n<pre><code>        markerConfig: {\n            type: 'circle',\n            radius: 4,\n            'fill': '#f00'\n        }\n     </code></pre>\n\n",
        "linenr": 127,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Label2.html#Ext-chart-Label-cfg-minMargin",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "shortDoc": "Specifies the minimum distance from a label to the origin of the visualization. ...",
        "static": false,
        "name": "minMargin",
        "owner": "Ext.chart.Label",
        "doc": "<p>Specifies the minimum distance from a label to the origin of the visualization.\nThis parameter is useful when using PieSeries width variable pie slice lengths.\nDefault value: 50.</p>\n",
        "linenr": 54,
        "html_filename": "Label2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Label2.html#Ext-chart-Label-cfg-orientation",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "shortDoc": "Either \"horizontal\" or \"vertical\". ...",
        "static": false,
        "name": "orientation",
        "owner": "Ext.chart.Label",
        "doc": "<p>Either \"horizontal\" or \"vertical\".\nDafault value: \"horizontal\".</p>\n",
        "linenr": 67,
        "html_filename": "Label2.html"
      },
      {
        "inheritable": false,
        "type": "Function",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-renderer",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "A function that can be overridden to set custom styling properties to each rendered element. ...",
        "static": false,
        "name": "renderer",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>A function that can be overridden to set custom styling properties to each rendered element.\nPasses in (sprite, record, attributes, index, store) to the function.</p>\n",
        "linenr": 87,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-selectionTolerance",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "The offset distance from the cursor position to the line series to trigger events (then used for highlighting series,...",
        "static": false,
        "name": "selectionTolerance",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>The offset distance from the cursor position to the line series to trigger events (then used for highlighting series, etc).</p>\n",
        "linenr": 114,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-shadowAttributes",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "static": false,
        "name": "shadowAttributes",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>An array with shadow attributes</p>\n",
        "linenr": 96,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-showInLegend",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "static": false,
        "name": "showInLegend",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Whether to show this series in the legend.</p>\n",
        "linenr": 81,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-showMarkers",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "Whether markers should be displayed at the data points along the line. ...",
        "static": false,
        "name": "showMarkers",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>Whether markers should be displayed at the data points along the line. If true,\nthen the <a href=\"#/api/Ext.chart.series.Line-cfg-markerConfig\" rel=\"Ext.chart.series.Line-cfg-markerConfig\" class=\"docClass\">markerConfig</a> config item will determine the markers' styling.</p>\n",
        "linenr": 120,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "Boolean/Number",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-smooth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "If set to true or a non-zero number, the line will be smoothed/rounded around its points; otherwise\nstraight line seg...",
        "static": false,
        "name": "smooth",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>If set to <code>true</code> or a non-zero number, the line will be smoothed/rounded around its points; otherwise\nstraight line segments will be drawn.</p>\n\n<p>A numeric value is interpreted as a divisor of the horizontal distance between consecutive points in\nthe line; larger numbers result in sharper curves while smaller numbers result in smoother curves.</p>\n\n<p>If set to <code>true</code> then a default numeric value of 3 will be used. Defaults to <code>false</code>.</p>\n",
        "linenr": 152,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Line.html#Ext-chart-series-Line-cfg-style",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "An object containing styles for the visualization lines. ...",
        "static": false,
        "name": "style",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>An object containing styles for the visualization lines. These styles will override the theme styles.\nSome options contained within the style object will are described next.</p>\n",
        "linenr": 145,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-tips",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "Add tooltips to the visualization's markers. ...",
        "static": false,
        "name": "tips",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Add tooltips to the visualization's markers. The options for the tips are the\nsame configuration used with <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>. For example:</p>\n\n<pre><code>tips: {\n  trackMouse: true,\n  width: 140,\n  height: 28,\n  renderer: function(storeItem, item) {\n    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');\n  }\n},\n</code></pre>\n",
        "linenr": 54,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-title",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "static": false,
        "name": "title",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>The human-readable name of the series.</p>\n",
        "linenr": 75,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Series.html#Ext-chart-series-Series-cfg-type",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "The type of series. ...",
        "static": false,
        "name": "type",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>The type of series. Set in subclasses.</p>\n",
        "linenr": 69,
        "html_filename": "Series.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.chart.series.Line-method-fireEvent\" rel=\"Ext.chart.series.Line-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Line.html#Ext-chart-series-Line-method-drawSeries",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
        "private": false,
        "shortDoc": "Draws the series for the current chart. ...",
        "static": false,
        "name": "drawSeries",
        "owner": "Ext.chart.series.Line",
        "doc": "<p>Draws the series for the current chart.</p>\n",
        "linenr": 250,
        "html_filename": "Line.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.chart.series.Line-method-enableBubble\" rel=\"Ext.chart.series.Line-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "y"
          }
        ],
        "href": "Series.html#Ext-chart-series-Series-method-getItemForPoint",
        "return": {
          "type": "Object",
          "doc": "<p>An object describing the item, or null if there is no matching item. The exact contents of</p>\n\n<pre><code>             this object will vary by series type, but should always contain at least the following:\n             &lt;ul&gt;\n               &lt;li&gt;{Ext.chart.series.Series} series - the Series object to which the item belongs&lt;/li&gt;\n               &lt;li&gt;{Object} value - the value(s) of the item's data point&lt;/li&gt;\n               &lt;li&gt;{Array} point - the x/y coordinates relative to the chart box of a single point\n                   for this data item, which can be used as e.g. a tooltip anchor point.&lt;/li&gt;\n               &lt;li&gt;{Ext.draw.Sprite} sprite - the item's rendering Sprite.\n             &lt;/ul&gt;\n</code></pre>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any. ...",
        "static": false,
        "name": "getItemForPoint",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any.</p>\n",
        "linenr": 241,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "href": "Series.html#Ext-chart-series-Series-method-getLegendColor",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "Returns a string with the color to be used for the series legend item. ...",
        "static": false,
        "name": "getLegendColor",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Returns a string with the color to be used for the series legend item.</p>\n",
        "linenr": 321,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Series.html#Ext-chart-series-Series-method-hideAll",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "Hides all the elements in the series. ...",
        "static": false,
        "name": "hideAll",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Hides all the elements in the series.</p>\n",
        "linenr": 282,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Info about the item; same format as returned by #getItemForPoint.</p>\n",
            "name": "item"
          }
        ],
        "href": "Highlight.html#Ext-chart-Highlight-method-highlightItem",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Highlight.js",
        "private": false,
        "shortDoc": "Highlight the given series item. ...",
        "static": false,
        "name": "highlightItem",
        "owner": "Ext.chart.Highlight",
        "doc": "<p>Highlight the given series item.</p>\n",
        "linenr": 38,
        "html_filename": "Highlight.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-addManagedListener\" rel=\"Ext.chart.series.Line-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-removeManagedListener\" rel=\"Ext.chart.series.Line-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Line-method-mon\" rel=\"Ext.chart.series.Line-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.chart.series.Line-method-fireEvent\" rel=\"Ext.chart.series.Line-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Line-method-mon\" rel=\"Ext.chart.series.Line-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.chart.series.Line-method-suspendEvents\" rel=\"Ext.chart.series.Line-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "title"
          }
        ],
        "href": "Series.html#Ext-chart-series-Series-method-setTitle",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "Changes the value of the title for the series. ...",
        "static": false,
        "name": "setTitle",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Changes the value of the <a href=\"#/api/Ext.chart.series.Line-cfg-title\" rel=\"Ext.chart.series.Line-cfg-title\" class=\"docClass\">title</a> for the series.\nArguments can take two forms:</p>\n\n<ul>\n<li>A single String value: this will be used as the new single title for the series (applies\nto series with only one yField)</li>\n<li>A numeric index and a String value: this will set the title for a single indexed yField.</li>\n</ul>\n\n",
        "linenr": 350,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Series.html#Ext-chart-series-Series-method-showAll",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "Shows all the elements in the series. ...",
        "static": false,
        "name": "showAll",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Shows all the elements in the series.</p>\n",
        "linenr": 308,
        "html_filename": "Series.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.chart.series.Line-method-resumeEvents\" rel=\"Ext.chart.series.Line-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.chart.series.Line-method-resumeEvents\" rel=\"Ext.chart.series.Line-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-removeListener\" rel=\"Ext.chart.series.Line-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Highlight.html#Ext-chart-Highlight-method-unHighlightItem",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Highlight.js",
        "private": false,
        "shortDoc": "Un-highlight any existing highlights ...",
        "static": false,
        "name": "unHighlightItem",
        "owner": "Ext.chart.Highlight",
        "doc": "<p>Un-highlight any existing highlights</p>\n",
        "linenr": 106,
        "html_filename": "Highlight.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new title value</p>\n",
            "name": "title"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index in the collection of titles</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Series.html#Ext-chart-series-Series-event-titlechange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "shortDoc": "Fires when the series title is changed via setTitle. ...",
        "static": false,
        "name": "titlechange",
        "owner": "Ext.chart.series.Series",
        "doc": "<p>Fires when the series title is changed via <a href=\"#/api/Ext.chart.series.Line-method-setTitle\" rel=\"Ext.chart.series.Line-method-setTitle\" class=\"docClass\">setTitle</a>.</p>\n",
        "linenr": 139,
        "html_filename": "Series.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-axis",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Cartesian.js",
        "private": false,
        "static": false,
        "name": "axis",
        "owner": "Ext.chart.series.Cartesian",
        "doc": "<p>Indicates which axis the series will bind to</p>\n",
        "linenr": 36,
        "html_filename": "Cartesian.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Highlight.html#Ext-chart-Highlight-property-highlight",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Highlight.js",
        "private": false,
        "static": false,
        "name": "highlight",
        "owner": "Ext.chart.Highlight",
        "doc": "<p>Highlight the given series item.</p>\n",
        "linenr": 13,
        "html_filename": "Highlight.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-xField",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Cartesian.js",
        "private": false,
        "static": false,
        "name": "xField",
        "owner": "Ext.chart.series.Cartesian",
        "doc": "<p>The field used to access the x axis value from the items from the data\nsource.</p>\n",
        "linenr": 18,
        "html_filename": "Cartesian.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-yField",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Cartesian.js",
        "private": false,
        "static": false,
        "name": "yField",
        "owner": "Ext.chart.series.Cartesian",
        "doc": "<p>The field used to access the y-axis value from the items from the data\nsource.</p>\n",
        "linenr": 27,
        "html_filename": "Cartesian.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Line.js",
  "private": false,
  "alternateClassNames": [
    "Ext.chart.LineSeries",
    "Ext.chart.LineChart"
  ],
  "static": false,
  "name": "Ext.chart.series.Line",
  "doc": "<p>Creates a Line Chart. A Line Chart is a useful visualization technique to display quantitative information for different\ncategories or other real values (as opposed to the bar chart), that can show some progression (or regression) in the dataset.\nAs with all other series, the Line Series must be appended in the <em>series</em> Chart array configuration. See the Chart\ndocumentation for more information. A typical configuration object for the line series could be:</p>\n\n<p><p><img src=\"doc-resources/Ext.chart.series.Line/Ext.chart.series.Line.png\" alt=\"Ext.chart.series.Line chart series\"></p></p>\n\n<pre><code>var store = Ext.create('Ext.data.JsonStore', {\n    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n    data: [\n        {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},\n        {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},\n        {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},\n        {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},\n        {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}                                                \n    ]\n});\n\nExt.create('Ext.chart.Chart', {\n    renderTo: Ext.getBody(),\n    width: 500,\n    height: 300,\n    animate: true,\n    store: store,\n    axes: [{\n        type: 'Numeric',\n        position: 'bottom',\n        fields: ['data1'],\n        label: {\n            renderer: Ext.util.Format.numberRenderer('0,0')\n        },\n        title: 'Sample Values',\n        grid: true,\n        minimum: 0\n    }, {\n        type: 'Category',\n        position: 'left',\n        fields: ['name'],\n        title: 'Sample Metrics'\n    }],\n    series: [{\n        type: 'line',\n        highlight: {\n            size: 7,\n            radius: 7\n        },\n        axis: 'left',\n        xField: 'name',\n        yField: 'data1',\n        markerCfg: {\n            type: 'cross',\n            size: 4,\n            radius: 4,\n            'stroke-width': 0\n        }\n    }, {\n        type: 'line',\n        highlight: {\n            size: 7,\n            radius: 7\n        },\n        axis: 'left',\n        fill: true,\n        xField: 'name',\n        yField: 'data3',\n        markerCfg: {\n            type: 'circle',\n            size: 4,\n            radius: 4,\n            'stroke-width': 0\n        }\n    }]\n});\n</code></pre>\n\n<p>In this configuration we're adding two series (or lines), one bound to the <code>data1</code>\nproperty of the store and the other to <code>data3</code>. The type for both configurations is\n<code>line</code>. The <code>xField</code> for both series is the same, the name propert of the store.\nBoth line series share the same axis, the left axis. You can set particular marker\nconfiguration by adding properties onto the markerConfig object. Both series have\nan object as highlight so that markers animate smoothly to the properties in highlight\nwhen hovered. The second series has <code>fill=true</code> which means that the line will also\nhave an area below it of the same color.</p>\n\n<p><strong>Note:</strong> In the series definition remember to explicitly set the axis to bind the\nvalues of the line series to. This can be done by using the <code>axis</code> configuration property.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Line.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.chart.series.Cartesian"
});