# lex-markdown-editor
A simple markdown editor for Salesforce Lightning Experience

## About

This is a prototype of a markdown editor that works on Salesforce's Lightning Experience and contains most 
features needed for a nice user experience editing almost any Object's TextArea field.

## Features

* Side-by-side editing and live preview.
* Available for any record detail page of any object.
* Customizable target field (either via AppBuilder or parent component).
* Auto-save.
* Uses Lightning Data Services so your data is cohesive across all components.
* Github Markdown Styles included.

## Usage

### App Builder

Simply drag the component and drop it anywhere inside a Record Detail Page. 

### As a child component

You can use the following code to include this component inside one of yours:

```html
<aura:component>
    <aura:attribute name="recordId" type="String" />
    <aura:attribute name="textAreaFieldName" type="String" />

    <c:MarkdownEditor sourceField="{!v.textAreaFieldName}" recordId="{!v.recordId}"/>
</aura:component>
```


## Acknowledgements

* [Marked](https://github.com/markedjs/marked )
* [Github Markdown CSS](https://github.com/sindresorhus/github-markdown-css/)