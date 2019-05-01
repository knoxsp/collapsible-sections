# d3-collapsible
A simple d3-based library to make a section containing a header and some content into a collapsible div:

For example:
```html
<div class='collapsible'>
    <div class='heading'>
        I am a clickable Header
    </div>
    <div class='collapsible-content'>
        I will disappear when yuou click the header
    </div>
</div>
```

then activate the colapsible behaviour:

```javascript
    collapsible('.collapsible')
```

For containers with multiple collapsible entries:

```html
<div id='my-main-container'>
  <div class='collapsible'>
      <div class='heading'>
          I am clickable Header 1
      </div>
      <div class='collapsible-content'>
          I will disappear when yuou click header 1
      </div>
  </div>
  <div class='collapsible'>
      <div class='heading'>
          I am clickable Header 2
      </div>
      <div class='collapsible-content'>
          I will disappear when yuou click header 2
      </div>
  </div>
</div>
```

THe javascript for this is:
```javascript
   collapsible('#my-main-container') 
```

THis will make only the entries within this container collapsible.

It also supports a callback when the header is clicked:

ex:
```javascript
  collapsible('#my-main-container', {callback: function(){alert("Header Clicked!")}})
```

If there are any other pieces of functionality, add an issue!


