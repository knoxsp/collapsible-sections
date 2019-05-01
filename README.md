# d3-collapsible
A simple d3-based library to make a section containing a header and some content into a collapsible div:

For example:
```
<div class='collapsible'>
    <div class='heading'>
        I am a clickable Header
    </div>
    <div class='collapsible-content'>
        I will disappear when yuou click the header
    </div>
</div>
```

the en activate the colapsible bejaviour:
collapsible('.collapsible')

For containers with multiple collapsible entries:

```
<div id='my-main-container'>
  <div class='collapsible'>
      <div class='heading'>
          I am a clickable Header
      </div>
      <div class='collapsible-content'>
          I will disappear when yuou click the header
      </div>
  </div>
  <div class='collapsible'>
      <div class='heading'>
          I am a clickable Header
      </div>
      <div class='collapsible-content'>
          I will disappear when yuou click the header
      </div>
  </div>
</div>
```

THe javascript for this is:
```
   collapsible('#my-main-container') 
```

THis will make only the entries within this container collapsible.

It also supports a callback when the header is clicked:

ex:
```
  collapsible('#my-main-container', {callback: function(){alert("Header Clicked!")}})
```

If there are any other pieces of functionality, add an issue!


