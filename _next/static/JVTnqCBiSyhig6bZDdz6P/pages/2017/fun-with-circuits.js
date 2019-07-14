(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FDu3:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("Y6hp"),i=t("wFB7"),s=t("6qfE"),p=function(e){var n=e.components;return o.a.createElement(s.MDXTag,{name:"wrapper"},o.a.createElement(s.MDXTag,{name:"p",components:n},"This post assumes that you have a basic understanding of ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Bitwise_operation"}},"bitwise")," operations. I\u2019ll also be using ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.typescriptlang.org/docs/tutorial.html"}},"TypeScript")," in my examples because it offers a very nice type system to work with. If you know JavaScript, then you\u2019ll be able to follow along with a basic understanding of the type system offered by TypeScript."),o.a.createElement(s.MDXTag,{name:"p",components:n},"I\u2019ve been solving various problems on the ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://adventofcode.com/"}},"Advent of Code")," and I came across a pretty interesting problem on ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://adventofcode.com/2015/day/7"}},"day 7"),"."),o.a.createElement(s.MDXTag,{name:"p",components:n},"The problem has to do with circuits and in particular, we are looking for the output value of a certain wire, in this case ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"A"),". Let\u2019s break the problem down into its essential part, i.e. how do we get the value of a given wire? If you take a look at the test input, then you\u2019ll notice that the wires on the right hand side of the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"->")," are all unique."),o.a.createElement(s.MDXTag,{name:"p",components:n},"If you know a little bit about digital logic, then you know that a wire can carry either a ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"HIGH (1)")," or ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"LOW (0)"),". This is why a wire can\u2019t have more than one output."),o.a.createElement(s.MDXTag,{name:"p",components:n},"Now that we know that a wire\u2019s output is determined from exactly one of these rules, we can compute its output. For example, take a look at the following rule:"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre"},"x AND y -> z\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},"From the rule we can determine that ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"z"),"\u2019s value is the result of bitwise ANDing wire ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"x")," and wire ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"y"),"\u2019s values. So we just need to get the value of wire ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"x")," and wire ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"y")," and we have found wire ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"z"),"\u2019s value."),o.a.createElement(s.MDXTag,{name:"p",components:n},"However, there is a small problem. What if we don\u2019t know the values of",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"x")," or ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"y")," when we are trying to compute ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"z"),"? Well, we know that some of these rules can be evaluated without any knowledge of the state of other wires, such as the rule ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"123 -> x"),". So, after all of these rules have been evaluated, we can evaluate the rules that depend on the wires that have now been initialized."),o.a.createElement(s.MDXTag,{name:"p",components:n},"We can keep repeating this process, and eventually all of the wires will be evaluated. In JavaScript, this is very simple, as we can add a callback to our wire objects that will poll the values according to the rule for that specific wire."),o.a.createElement(s.MDXTag,{name:"p",components:n},"Suppose we have the following interfaces representing an instruction and a wire:"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre"},"interface Instruction {\n  type: number; // the instruction type e.g. AND or OR\n  dest: string; // the wire ID that is on the right hand side of the arrow\n  src: string;  // source wire ID for assignment instruction\n  srcA: string; // source wire IDs for instructions that take in two operands e.g. AND\n  srcB: string;\n  amount: number; // shift amount for LSHIFT/RSHIFT\n};\n\ninterface Wire {\n  poll: Function; // function for computing the wire's output value\n  output: number; // wire's output value\n};\n\n// Maps a wire ID to the Wire Object\ninterface Circuit {\n  [id: string]: Wire;\n};\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},"Now we can build the function that assembles the board:"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre"},"const assemble = (instructions: Instruction[]): Circuit => {\n  let board: Circuit = {};\n\n  // loop over the instructions\n  for (const inst of instructions) {\n    let pollFunc;\n\n    switch (inst.type) {\n      case 'AND':\n        pollFunc = () => {\n          const opA = getVal(board, inst.srcA);\n          const opB = getVal(board, inst.srcB);\n          if (opA === undefined || opB === undefined) {\n            return undefined;\n          }\n\n          return opA & opB;\n        }\n      // other cases omitted\n    }\n  }\n}\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},"Remember that board is a mapping from an identifier to the wire. We close over the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"board")," variable in our ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pollFunc")," so that all of the wires are polling from the same board. For the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"AND")," case, we simply poll operand ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"A"),"and operand ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"B"),". If either of these operands is ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"undefined"),", we simply return ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"undefined"),". Otherwise we return the bitwise AND of the two operands."),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre"},"const solve = (board: Circuit, wireB: number): Circuit => {\n  let count = 0;\n\n  // loop until all of the wires have output defined\n  while (count < Object.keys(board).length) {\n\n    // loop over all of the wires\n    for (const key of Object.keys(board)) {\n      const wire = board[key];\n\n      // poll the operand wire values if the wire's\n      // output is currently undefined\n      if (wire.output === undefined) {\n        const polledVal = wire.poll();\n        if (polledVal !== undefined) {\n          wire.output = polledVal;\n          count++;\n        }\n      }\n    }\n  }\n\n  return board;\n};\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},"Here, we simply loop through all of the wires and check if its value is defined. If so we skip over it, since its value won\u2019t change once evaluated. Otherwise we call the polling function that we\u2019ve set in our assembly function. When all of the values have been evaluated, we can return the board."),o.a.createElement(s.MDXTag,{name:"p",components:n},"This was a pretty fun problem that gives some insight into how digital circuits actually work. If you want to try running the code, you can find my full solution ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dongy7/adventofcode-2015/blob/master/src/day7.ts"}},"here"),"."))};n.default=function(){var e=Object(i.a)(p);return o.a.createElement(r.a,{title:"Fun with Circuits",date:"January 7, 2017"},o.a.createElement(e,null))}},JdAF:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2017/fun-with-circuits",function(){var e=t("FDu3");return{page:e.default||e}}])}},[["JdAF",1,0]]]);