# Bootstrap CSS Tooltips

[![Bootstrap 5](https://img.shields.io/badge/Framework-Bootstrap%205-7952b3.svg)](https://www.getbootstrap.com/)
[![Bootstrap Icons](https://img.shields.io/badge/Styles-CSS-2b69a3.svg)](https://icons.getbootstrap.com/)

**Bootstrap CSS Tooltips** offers a CSS only tooltip solution supporting Bootstrap colors and HTML content.

Bootstrap itself comes with basic black tooltips that require Javascript (popper.js) and do not support HTML content. 
I ran into situations where those didn't work, e.g. when the tooltip content is injected via Javascript after the page is loaded.
In such cases, CSS based tooltips still work well.

On my search for a CSS based tooltip library I did not find one that fulfilled all my requirements, thus, I wrote this one here to serve my specific use cases.

## My Requirements

- no Javascript required
- support for HTML content
- support for Bootstrap colors
- support for positioning top, right, bottom and left

The downside of not having Javascript create the tooltips is not having the automatic computation of the tooltip size and position based on canvas and hover object position.

To work around this I chose to position the tooltips relatively to the hover object based on pixel distances. For horizontal sizing, this library offers four different widths. They 
can be easily set by a class name:

- small: 160px
- medium: 240px
- large: 320px
- xlarge: 400px

## Demo

[http://demo.lewe-online.de/bootstrap-css-tooltips/](http://demo.lewe-online.de/bootstrap-css-tooltips/)

## Usage

The library requires that you use the Bootstrap framework styles. You need to load the stylesheet first because the bsc-tooltips stylesheet refers to color variables from there..

After that, load the stylesheet from this library. 

For example:

```html
<!--begin::Bootstrap Styles-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!--end::Bootstrap Styles-->
<!--begin::Bootstrap CSS Tooltips-->
<link href="bsc-tooltips.css" rel="stylesheet">
<!--end::Bootstrap CSS Tooltips-->
```
In your HTML code you need a DOM object that holds the hover object and the tooltip object. The tooltip object is intially hidden. 

For example:

```html
<div class="btn btn-danger bsc-tooltip m-2">
  Top tooltip
  <span class="bsc-tooltip-content danger top">Tooltip Text</span>
</div>
```
In the above example, a Bootstrap button in color 'danger' is created saying "Top tooltip". When hovering over it with your mouse, 
the tooltip DOM object (span element) will be displayed on top of the button.

Here are two more complex examples:

A large tooltip showing to the right with a table in it:
```html
<div class="btn btn-dark bsc-tooltip">Right large tooltip
  <div class="bsc-tooltip-content dark right large">
    <div class="row">
      <div class="col-5">Build Job:</div>
      <div class="col-7">my-app (815)</div>
    </div>
    <div class="row">
      <div class="col-5">Build Type:</div>
      <div class="col-7">Production</div>
    </div>
    <div class="row">
      <div class="col-5">Version:</div>
      <div class="col-7">v2.4.3</div>
    </div>
    <div class="row">
      <div class="col-5">Branch:</div>
      <div class="col-7">master</div>
    </div>
    <div class="row">
      <div class="col-5">Build Time:</div>
      <div class="col-7">2023-09-24 15:06</div>
    </div>
    <div class="row">
      <div class="col-5">Duration:</div>
      <div class="col-7">00:12:45</div>
    </div>
  </div>
</div>
```
An xlarge tooltip popping up at the bottom containing a left floating image with text next to it:
```html
<div class="btn btn-info bsc-tooltip m-2">Bottom xlarge tooltip
  <div class="bsc-tooltip-content info bottom xlarge">
    <p>
      <img 
        src="duelmen.jpg" 
        style="float: left; margin-right: 8px; width: 100px;" 
        alt=""
      >
      Dülmen is a twon in Germany. It is situated in the south part of the Münsterland area, 
      between the Lippe river to the south, the Baumberge hills to the north and the Ems 
      river to the east. The so-called Ruhrgebiet is located south of Dülmen, once a 
      traditional cole mining area.
    </p>
  </div>
</div>

```
If you have use for this library, feel free to use it anywhere for free.

If you encounter problems or have ideas for improvement, go ahead and open an issue here at GitHub.

Enjoy and best regards,

George
