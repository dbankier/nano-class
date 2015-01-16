#Nano Class 

A bound class plug-in for [nano](https://github.com/dbankier/nano).

Requires nano version > 0.2.0

Read nano docs there.

##Install

From the root of your existing alloy project you can either.

Install using [gitto](http://gitt.io/)

~~~
$ gittio install nano
$ gittio install nano-class
~~~

or install using npm

~~~
$ npm install ti-nano ti-nano-class
~~~

It will copy all the required libraries to your `app/lib` folder.

##Setup

Add the following to your `alloy.js` file:

~~~
var nano = require("nano");
var class = require("nano-class");
nano.load(class());
~~~

Then use nano as normal in your controller, e.g.

~~~
nano($,$model);
~~~

##Binding

The default syntax is `{{ attribute }}`. Currently there is a limitation in Alloy that prevents its usage.
See [this issue](https://github.com/dbankier/nano/issues/1).

For the examples below the follow command was used to change the syntax:

~~~
nano.syntax(/\-\=(.+?)\=\-/gi);
~~~

This changes the syntax `-= attribute =-`. 

### class attribute 

With the plugin you can now add the `nclass` attribute, e.g.

~~~
<Alloy>
	<Window class="container">
    <View top="100" layout="vertical">
      <TextField value="{{var1}}"></TextField>
      <Label nclass="{{var1}}">Hello World</Label>
      <TextField value="{{var2}}"></TextField>
      <Label nclass="b{{var2}}">Hello World</Label>
     </View>
	</Window>
</Alloy>
~~~

The first Label's class is bound to the value of `var1`.
The second Label's class is bound to the evaluated expression bound to the value of `var2`.


##Building from Source

Building the distributable is done using [grunt](http://gruntjs.com/)

Enter the following:

~~~
$ npm install
$ grunt
~~~

The built library is found in at `dist/nano-class.js`

