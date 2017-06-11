import Head from 'next/head';
import Title from '../../components/post/title';
import Post from '../../layouts/post';
import { H2, H3 } from '../../components/post/heading';
import Code from '../../components/post/code';
import Snippet from '../../components/post/snippet';
import P from '../../components/post/paragraph';
import Meta from '../../components/post/meta';
import Link from '../../components/post/link';

export default () =>
  <Post>
    <Head><title>Fun with Circuits</title></Head>
    <Title>Fun with Circuits</Title>
    <Meta date="January 7, 2017" />
    <P>
      This post assumes that you have a basic understanding of
      {' '}
      <Link to={'https://en.wikipedia.org/wiki/Bitwise_operation'}>
        bitwise
      </Link>
      {' '}
      operations. I’ll also be using
      {' '}
      <Link to={'https://www.typescriptlang.org/docs/tutorial.html'}>
        TypeScript
      </Link>
      {' '}in my examples
      because it offers
      a very nice type system to work with. If you know JavaScript, then you’ll
      be able to follow along with a basic understanding of the type system
      offered by TypeScript.
    </P>

    <P>
      I’ve been solving various problems on the
      {' '}<Link to={'http://adventofcode.com/'}>Advent of Code</Link> and
      I came across
      a pretty interesting problem on
      {' '}<Link to={'http://adventofcode.com/2015/day/7'}>day 7</Link>.
    </P>

    <P>
      The problem has to do with circuits and in particular, we are looking for
      the output value of a certain wire, in this case <Code>A</Code>. Let’s
      break the
      problem down into its essential part, i.e. how do we get the value of a
      given wire? If you take a look at the test input, then you’ll notice that
      the wires on the right hand side of the <Code>-></Code> are all unique.
    </P>

    <P>
      If you know a little bit about digital logic, then you know that a wire
      can carry either a <Code>HIGH (1)</Code> or <Code>LOW (0)</Code>. This is
      why a wire can’t have more
      than one output.
    </P>

    <P>
      Now that we know that a wire’s output is determined from exactly one of
      these rules, we can compute its output. For example, take a look at the
      following rule:
    </P>

    <Snippet>{`
x AND y -> z
    `}</Snippet>

    <P>
      From the rule we can determine that <Code>z</Code>’s value is the result
      of bitwise
      ANDing wire <Code>x</Code> and wire <Code>y</Code>’s values. So we just
      need to get the value of
      wire <Code>x</Code> and wire <Code>y</Code> and we have found wire
      {' '}<Code>z</Code>’s value.
    </P>

    <P>
      However, there is a small problem. What if we don’t know the values of
      {' '}<Code>x</Code>{' '}
      or <Code>y</Code> when we are trying to compute <Code>z</Code>? Well, we
      know that some of these
      rules can be evaluated without any knowledge of the state of other wires,
      such as the rule <Code>123 -> x</Code>. So, after all of these rules have
      been
      evaluated, we can evaluate the rules that depend on the wires that have
      now been initialized.
    </P>

    <P>
      We can keep repeating this process, and eventually all of the wires will
      be evaluated. In JavaScript, this is very simple, as we can add a callback
      to our wire objects that will poll the values according to the rule for
      that specific wire.
    </P>

    <P>
      Suppose we have the following interfaces representing an instruction and a
      wire:
    </P>

    <Snippet>{`
interface Instruction {
  type: number; // the instruction type e.g. AND or OR
  dest: string; // the wire ID that is on the right hand side of the arrow
  src: string;  // source wire ID for assignment instruction
  srcA: string; // source wire IDs for instructions that take in two operands e.g. AND
  srcB: string;
  amount: number; // shift amount for LSHIFT/RSHIFT
};

interface Wire {
  poll: Function; // function for computing the wire's output value
  output: number; // wire's output value
};

// Maps a wire ID to the Wire Object
interface Circuit {
  [id: string]: Wire;
};`}</Snippet>

    <P>
      Now we can build the function that assembles the board:
    </P>

    <Snippet>{`
const assemble = (instructions: Instruction[]): Circuit => {
  let board: Circuit = {};

  // loop over the instructions
  for (const inst of instructions) {
    let pollFunc;

    switch (inst.type) {
      case 'AND':
        pollFunc = () => {
          const opA = getVal(board, inst.srcA);
          const opB = getVal(board, inst.srcB);
          if (opA === undefined || opB === undefined) {
            return undefined;
          }

          return opA & opB;
        }
      // other cases omitted
    }
  }
}`}</Snippet>

    <P>
      Remember that board is a mapping from an identifier to the wire. We close
      over the <Code>board</Code> variable in our <Code>pollFunc</Code> so that
      all of the
      wires are
      polling from the same board. For the <Code>AND</Code> case, we simply poll
      operand <Code>A</Code>
      and operand <Code>B</Code>. If either of these operands is
      {' '}<Code>undefined</Code>, we simply return
      {' '}<Code>undefined</Code>. Otherwise we return the bitwise AND of the
      two
      operands.
    </P>

    <Snippet>{`
const solve = (board: Circuit, wireB: number): Circuit => {
  let count = 0;

  // loop until all of the wires have output defined
  while (count < Object.keys(board).length) {

    // loop over all of the wires
    for (const key of Object.keys(board)) {
      const wire = board[key];

      // poll the operand wire values if the wire's
      // output is currently undefined
      if (wire.output === undefined) {
        const polledVal = wire.poll();
        if (polledVal !== undefined) {
          wire.output = polledVal;
          count++;
        }
      }
    }
  }

  return board;
};`}</Snippet>

    <P>
      Here, we simply loop through all of the wires and check if its value is
      defined. If so we skip over it, since its value won’t change once
      evaluated. Otherwise we call the polling function that we’ve set in our
      assembly function. When all of the values have been evaluated, we can
      return the board.
    </P>

    <P>
      This was a pretty fun problem that gives some insight into how digital
      circuits actually work. If you want to try running the code, you can find
      my full solution
      {' '}
      <Link
        to={
          'https://github.com/dongy7/adventofcode-2015/blob/master/src/day7.ts'
        }
      >
        here
      </Link>.
    </P>
  </Post>;
